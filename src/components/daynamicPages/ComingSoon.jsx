import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './DaynamicPage.css';
const ComingSoon = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className='d-flex col-11 m-auto align-items-center justify-content-center' data-aos="fade-up" style={{ height: '100vh' }}>
            <div className='col-lg-6 col-md-8 col-11 m-auto'>
                <div className='col-sm-11 m-auto'>
                    <div>
                        <p className='display-1'>Coming Soon....</p>
                        <br /><br />
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
    )
}

export default ComingSoon