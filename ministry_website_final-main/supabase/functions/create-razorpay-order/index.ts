import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const RAZORPAY_KEY_ID = Deno.env.get("RAZORPAY_KEY_ID");
const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET");

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

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders() });

  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    return json({ error: "Razorpay keys are not configured on the server." }, 500);
  }

  try {
    const { amount } = await req.json();
    const paise = parseInt(amount, 10);

    if (!paise || paise < 100) {
      return json({ error: "Amount must be at least 100 paise (₹1)." }, 400);
    }

    const auth = "Basic " + btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);

    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify({
        amount: paise,
        currency: "INR",
        receipt: "registration-" + Date.now(),
      }),
    });

    const order = await res.json();

    if (!res.ok) {
      return json({ error: "Failed to create Razorpay order: " + JSON.stringify(order) }, 500);
    }

    return json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: RAZORPAY_KEY_ID,
    });
  } catch (err) {
    return json({ error: "Unexpected error creating order: " + String(err) }, 500);
  }
});