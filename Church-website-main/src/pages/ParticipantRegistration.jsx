import React, { useState } from 'react';
import Backdrop from '../components/Backdrop';

const ParticipantRegistration = () => {
    const [formData, setFormData] = useState({
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
    });

    const [loading, setLoading] = useState(false);

    // Replace this with your actual Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw00JjJnhyVr3H4NQL_let-0Qjum25C9mdqSueWXOFkATxDB1-IVgIJEnzHfbfPTY6e/exec';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Using no-cors mode if handling standard simple requests or standard fetch
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Bypasses browser CORS restrictions with Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            alert("Registration submitted successfully!");

            // Clear form after successful submission
            setFormData({
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
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">

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
                            {loading ? 'SUBMITTING...' : 'REGISTER NOW'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ParticipantRegistration;


