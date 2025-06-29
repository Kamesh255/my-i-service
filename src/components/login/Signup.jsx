import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        mobile: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        axios.post('https://backend.mayiservicespvtltd.com/api/webUser.php?action=signup', formData)
        .then((response) => {
            if (response.data.status) {       
                setSuccess('Signup successful!');
                setTimeout(() => {
                    navigate('/log-in');
                }, 1500);
            } else {
                setError(response.data.message || 'Signup failed');
            }
        })
        .catch((err) => {
            setError('Network error. Please try again later.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div>
            <div className="col-lg-6 col-md-8 col-11 m-auto rounded-2 bgdmg lmg mt-4">
                <br />
                <p className="fs-3 fw-bold">Sign-up</p>
                <form className="col-11 m-auto text-start" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="mt-2">Full Name</label>
                    <input type="text" id="name" className="form-control rounded-1" placeholder="Full Name"
                        value={formData.name} onChange={handleChange} required />

                    <label htmlFor="username" className="mt-2">User Name / Email</label>
                    <input type="email" id="username" className="form-control rounded-1" placeholder="user@gmail.com"
                        value={formData.email} onChange={handleChange} required />

                    <label htmlFor="mobile" className="mt-2">Phone</label>
                    <input type="number" id="mobile" className="form-control rounded-1" placeholder="9876543210"
                        value={formData.phone} onChange={handleChange} required />

                    <label htmlFor="password" className="mt-2">Password</label>
                    <input type="text" id="password" className="form-control rounded-1" placeholder="Password"
                        value={formData.password} onChange={handleChange} required />

                    <button type="submit" className="form-control mt-3 btn btn-outline-light" disabled={loading}>
                        {loading ? 'Signing up...' : 'Continue'}
                    </button>

                    {error && <p className="text-danger mt-2">{error}</p>}
                    {success && <p className="text-success mt-2">{success}</p>}

                    <p className="mt-3">
                        I have an account{' '}
                        <span onClick={() => navigate('/log-in')} style={{ cursor: 'pointer' }} className="text-primary">
                            Log in
                        </span>
                    </p>
                    <br />
                </form>
            </div>
            <br />
        </div>
    );
};

export default Signup;
