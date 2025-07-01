import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to install axios

const Form = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        city: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

 

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async () => {
        setError('');
        setSuccess('');

        // Simple validation
        const { name, email, mobile, city, message } = formData;
        if (!name || !email || !mobile || !city || !message) {
            setError("All fields are required.");
            return;
        }

        setLoading(true);
        try {
            // Make your API call
            const response = await axios.post('https://backend.mayiservicespvtltd.com/api/contactus.php?action=saveContactUs', {
                ...formData,
                userId: user?._id // if needed
            });

            setSuccess("Your message has been sent successfully!");
            setFormData({
                name: '',
                email: '',
                mobile: '',
                city: '',
                message: ''
            });
            setTimeout(() => {
                setSuccess('')
            }, 3000); // Clear success message after 3 seconds
        } catch (err) {
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='bgdmg mt-5 p-5 rounded-4 col-11 m-auto lmg'>
                <p className='fs-1'>Connect Now</p>
                <div className='col-11 m-auto'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-6 col-12 mt-3'>
                            <input type="text" className='form-control' placeholder='Enter Your Name'
                                name='name' value={formData.name} onChange={handleChange} />
                        </div>
                        <div className='col-md-6 col-12 mt-3 '>
                            <input type="email" className='form-control' placeholder='Enter Your Email'
                                name='email' value={formData.email} onChange={handleChange} />
                        </div>
                        <div className='col-md-6 col-12 mt-3'>
                            <input type="text" className='form-control' placeholder='Enter Your Mobile No.'
                                name='mobile' value={formData.mobile} onChange={handleChange} />
                        </div>
                        <div className='col-md-6 col-12 mt-3 '>
                            <input type="text" className='form-control' placeholder='Enter Your City'
                                name='city' value={formData.city} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <textarea className='form-control' rows={3} placeholder='Enter Your Message'
                        name='message' value={formData.message} onChange={handleChange}></textarea>
                    <br />
                    {error && <div className="text-danger">{error}</div>}
                    {success && <div className="text-success">{success}</div>}
                    <button className='btn btn-outline-light rounded-5' onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
