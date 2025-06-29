import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
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

        try {
            const response = await axios.post('https://backend.mayiservicespvtltd.com/api/webUser.php?action=login', formData);

            if (response.data.status) {
                setSuccess('Login successful!');
                // You can save token or user info in localStorage/sessionStorage if needed
                localStorage.setItem('mayiservice_user', JSON.stringify(response.data.data));
                setTimeout(() => {
                    navigate('/'); // Change to your actual logged-in route
                }, 1500);
            } else {
                setError(response.data.message || 'Login failed');
            }
        } catch (err) {
            setError('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="col-lg-6 col-md-8 col-11 m-auto rounded-2 bgdmg lmg mt-4">
                <br />
                <p className="fs-3 fw-bold">Log-in</p>
                <form className="col-11 m-auto text-start" onSubmit={handleSubmit}>
                    <label htmlFor="username" className="mt-2">User Name / Email</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control rounded-1"
                        placeholder="user@gmail.com"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password" className="mt-2">Password</label>
                    <input
                        type="text"
                        id="password"
                        className="form-control rounded-1"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="form-control mt-3 btn btn-outline-light" disabled={loading}>
                        {loading ? 'Logging in...' : 'Log-in'}
                    </button>

                    {error && <p className="text-danger mt-2">{error}</p>}
                    {success && <p className="text-success mt-2">{success}</p>}

                    <p className="mt-3">
                        Don't have an account?{' '}
                        <span
                            onClick={() => navigate('/sign-up')}
                            style={{ cursor: 'pointer' }}
                            className="text-primary"
                        >
                            Sign Up
                        </span>
                    </p>
                    <br />
                </form>
            </div>
            <br />
        </div>
    );
};

export default Login;
