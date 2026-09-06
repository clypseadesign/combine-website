import React, { useState } from 'react';
import Backdrop from '../components/Backdrop';

const FUNCTIONS_URL = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL;
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
const REGISTRATION_FEE_PAISE = 100000; // ₹1,000 in paise

const EMPTY_FORM = {
    fullName: '',
    spouseName: '',
    age: '',
    dob: '',
    gender: '',
    whatsapp: '',
    email: '',
    occupation: '',
    location: '',
    govtId: '',
    address: '',
    role: '',
    language: ''
};

const ParticipantRegistration = () => {
    const [formData, setFormData] = useState(EMPTY_FORM);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const createOrder = async () => {
        const res = await fetch(`${FUNCTIONS_URL}/create-razorpay-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: REGISTRATION_FEE_PAISE }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to create order');
        return data;
    };

    const verifyPayment = async (payment) => {
        const res = await fetch(`${FUNCTIONS_URL}/verify-razorpay-payment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                order_id: payment.razorpay_order_id,
                payment_id: payment.razorpay_payment_id,
                signature: payment.razorpay_signature,
                participant: formData,
            }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Payment verification failed');
        return data;
    };

    const openRazorpay = (order, onSuccess, onError) => {
        if (typeof window.Razorpay === 'undefined') {
            onError(new Error('Razorpay is not loaded. Please refresh the page and try again.'));
            return;
        }
        const options = {
            key: RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'God Cares Ministries',
            description: 'Participant Registration Fee (₹1,000)',
            order_id: order.order_id,
            handler: function (response) {
                onSuccess(response);
            },
            prefill: {
                name: formData.fullName,
                email: formData.email,
                contact: formData.whatsapp,
            },
            theme: { color: '#528FF0' },
            modal: {
                ondismiss: function () {
                    onError(new Error('Payment cancelled. Registration was not completed.'));
                },
            },
        };
        let rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
            onError(new Error('Payment failed. Please try again.'));
        });
        rzp.open();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const order = await createOrder();

            openRazorpay(
                order,
                async (payment) => {
                    try {
                        await verifyPayment(payment);
                        alert("Payment successful! Registration completed successfully.");
                        setFormData(EMPTY_FORM);
                    } catch (err) {
                        console.error("Error verifying payment:", err);
                        alert(err.message || "Payment was received but registration could not be completed. Please contact support.");
                    } finally {
                        setLoading(false);
                    }
                },
                (err) => {
                    console.error("Payment error:", err);
                    alert(err.message || "Something went wrong with the payment.");
                    setLoading(false);
                }
            );
        } catch (error) {
            console.error("Error creating order:", error);
            alert(error.message || "Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black p-8">

            <Backdrop title="Participant Registration" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: '"Century Gothic", sans-serif' }}>
                {/* Heading */}
                <h2 style={{ fontSize: '26px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '30px', textAlign: 'center' }}>
                    Participant Registration
                </h2>

                {/* Content Paragraphs Container */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '850px', margin: '0 auto 50px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151', textAlign: 'center' }}>
                    <p>
                        We invite you to be part of this global mission. Please complete the registration process carefully and submit your details as instructed.
                    </p>
                    <p>
                        The registration and participation donation is just ₹1,000 (INR).
                    </p>
                    <p>
                        You are also welcome to make an additional voluntary donation in support of "The Universal Royal Law Of Love" Project, "The Holy Sabbath" Project, their charitable mission, and the family faithfully serving behind these initiatives.
                    </p>
                    <p>
                        If you believe you have talents and abilities that can contribute to this mission, we warmly invite you to apply. We welcome as many participants as possible and are committed to encouraging, supporting, and providing a platform for you to showcase and develop your God-given talents for the benefit of humanity.
                    </p>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>
                        Don't miss this special opportunity to be part of a meaningful mission.
                    </p>
                    <p style={{ fontWeight: 'bold' }}>
                        Register today, participate with your talents, and join us before this golden opportunity passes by!
                    </p>
                </div>


                <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '50px 40px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', color: '#1f2937' }}>

                    {/* Row 1: Full Name */}
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name as per Govt. ID*"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                        />
                    </div>

                    {/* Row 2: Father / Spouse's Name */}
                    <div style={{ marginBottom: '20px' }}>
                        <input
                            type="text"
                            name="spouseName"
                            placeholder="Father / Spouse's Name*"
                            value={formData.spouseName}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                        />
                    </div>

                    {/* Row 3: Age & Date of Birth */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <input
                                type="text"
                                name="age"
                                placeholder="Age*"
                                value={formData.age}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <input
                                type="text"
                                name="dob"
                                placeholder="Date of Birth*"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                            />
                        </div>
                    </div>

                    {/* Row 4: Gender & WhatsApp Number */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4b5563', marginBottom: '8px' }}>Gender*</label>
                            <div style={{ display: 'flex', gap: '30px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="MALE"
                                        checked={formData.gender === 'MALE'}
                                        onChange={handleChange}
                                        required
                                    /> MALE
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="FEMALE"
                                        checked={formData.gender === 'FEMALE'}
                                        onChange={handleChange}
                                        required
                                    /> FEMALE
                                </label>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <input
                                type="text"
                                name="whatsapp"
                                placeholder="WhatsApp Number*"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                            />
                        </div>
                    </div>

                    {/* Row 5: Email Address & Present Occupation */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address*"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <input
                                type="text"
                                name="occupation"
                                placeholder="Present Occupation*"
                                value={formData.occupation}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                            />
                        </div>
                    </div>

                    {/* Row 6: State & Country Residing & Govt. ID Details */}
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 300px' }}>
                            <input
                                type="text"
                                name="location"
                                placeholder="State & Country Residing*"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 300px' }}>
                            <input
                                type="text"
                                name="govtId"
                                placeholder="Govt. ID Details(Aadhaar No)*"
                                value={formData.govtId}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                            />
                        </div>
                    </div>

                    {/* Row 7: Full Address in Detail */}
                    <div style={{ marginBottom: '25px' }}>
                        <input
                            type="text"
                            name="address"
                            placeholder="Full Address in Detail*"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '13px', outline: 'none' }}
                        />
                    </div>

                    {/* Row 8: Mention the ROLE you wish to take part */}
                    <div style={{ marginBottom: '25px' }}>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4b5563', marginBottom: '10px' }}>Mention the ROLE you wish to take part *</label>
                        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                            {['Sing', 'Instrument', 'Act'].map((roleOpt, idx) => (
                                <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="role"
                                        value={roleOpt}
                                        checked={formData.role === roleOpt}
                                        onChange={handleChange}
                                        required
                                    /> {roleOpt}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Row 9: Wish to take part in (Production) */}
                    <div style={{ marginBottom: '35px' }}>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4b5563', marginBottom: '10px' }}>Wish to take part in (Production) *</label>
                        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                            {['Tamil', 'English', 'Kannada', 'Hindi', 'Malayalam'].map((lang, idx) => (
                                <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="language"
                                        value={lang}
                                        checked={formData.language === lang}
                                        onChange={handleChange}
                                        required
                                    /> {lang}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{ backgroundColor: '#facc15', color: '#1f2937', fontWeight: 'bold', padding: '12px 30px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '13px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', opacity: loading ? 0.7 : 1 }}
                        >
                            {loading ? 'PROCESSING...' : 'REGISTER NOW (₹1,000)'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ParticipantRegistration;


