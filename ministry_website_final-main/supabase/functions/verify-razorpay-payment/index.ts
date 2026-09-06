import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
  });
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function hmacSha256Hex(secret: string, message: string) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders() });

  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  if (!RAZORPAY_KEY_SECRET) {
    return json({ error: "Razorpay key secret is not configured on the server." }, 500);
  }

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return json({ error: "Supabase environment is not configured on the server." }, 500);
  }

  try {
    const body = await req.json();
    const { order_id, payment_id, signature } = body;
    const participant = body.participant;

    if (!order_id || !payment_id || !signature) {
      return json({ error: "Missing payment verification fields (order_id, payment_id, signature)." }, 400);
    }

    if (!participant?.fullName || !participant?.email) {
      return json({ error: "Missing participant details (fullName, email)." }, 400);
    }

    const expected = await hmacSha256Hex(RAZORPAY_KEY_SECRET, `${order_id}|${payment_id}`);
    const sig = String(signature).toLowerCase();

    if (!safeEqual(expected, sig)) {
      return json({ error: "Payment signature verification failed. Registration not completed." }, 400);
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });

    const { error } = await supabase.from("participants").insert([
      {
        full_name: participant.fullName.trim(),
        spouse_name: participant.spouseName?.trim() || null,
        age: participant.age?.trim() || null,
        dob: participant.dob?.trim() || null,
        gender: participant.gender || null,
        whatsapp: participant.whatsapp?.trim() || null,
        email: participant.email.trim(),
        occupation: participant.occupation?.trim() || null,
        location: participant.location?.trim() || null,
        govt_id: participant.govtId?.trim() || null,
        address: participant.address?.trim() || null,
        role: participant.role || null,
        language: participant.language || null,
        payment_id,
        payment_order_id: order_id,
        razorpay_signature: signature,
        amount: 1000.00,
        payment_status: "paid",
      },
    ]);

    if (error) {
      return json({ error: "Failed to save registration: " + error.message }, 500);
    }

    return json({ success: true, message: "Payment verified and registration completed." });
  } catch (err) {
    return json({ error: "Unexpected error verifying payment: " + String(err) }, 500);
  }
});