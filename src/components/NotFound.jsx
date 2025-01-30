import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();


    return (
        <div className='d-flex col-11 m-auto align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className='col-lg-6 col-md-8 col-11 m-auto'>
                <div className='col-sm-11 m-auto'>
                    <div>
                        <img src={require('../image/404.webp')} alt="404 Not Found" width='100%' />
                    </div>
                </div>
                <div>
                    <button className='btn btn-dark rounded-5' onClick={() => navigate('/')}>
                        Go to Home page
                        <span><i className="bi bi-arrow-right"></i></span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default NotFound;
