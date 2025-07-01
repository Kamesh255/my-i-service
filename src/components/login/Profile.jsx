import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
    const [user, setUser] = useState(null);

    const data = JSON.parse(localStorage.getItem('mayiservice_user'));
    const navigate = useNavigate()
    useEffect(() => {
        if (!data) {
           navigate('/log-in')
        } else {
            setUser(data?.user);
        }
    }, [data]);

    const handleLogout = () => {
        localStorage.removeItem('mayiservice_user');
        navigate('/')
    };

    return (
        <div>
            <div className="col-lg-6 col-md-8 col-11 m-auto">
                <div className="bgdmg lmg rounded-2 p-3 mt-4">
                    <h2 className="text-center">Profile</h2>
                    <hr />
                    <div className="text-start">
                        <p>Name: <i className="mx-1">{user?.name}</i></p>
                        <p>Email: <i className="mx-1">{user?.username}</i></p>
                        <p>Mobile: <i className="mx-1">{user?.mobile}</i></p>
                        <button
                            className="btn btn-outline-light rounded-5 mt-3"
                            onClick={handleLogout}
                        >
                            Log-out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
