import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/s1.jpg')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Serv<span class='text-danger'>i</span>ces</p>
                </div>
            </div>

            <div class='col-sm-11 col-10 m-auto mt-3'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Our Services</p>
                <p class='fs-5 tjustify' data-aos="fade-up">At <b>May I Services</b>, we are dedicated to providing a wide range of high-quality services that cater to your diverse needs. With a commitment to excellence and customer satisfaction, we bring you specialized solutions in <b>real estate, economical clothing</b>, and <b>healthy food</b>. Our services are designed to simplify your life and offer you convenience, affordability, and value.</p>

                <div class='mt-4 bgdmg rounded-4 row flex-column-reverse flex-md-row align-items-center' data-aos="fade-up">
                    <div class='col-md-6 '>
                        <div class='col-11 m-auto lmg text-start'>
                            <br />
                            <p class='fs-2 fw-bold '>Real Estate </p>
                            <p class='fs-5 mt-2'>We offer comprehensive services in the real estate sector, including assistance with plots, duplex flats, and land purchases. Our offerings are designed to fit your budget, accompanied by architectural plans and designs, as well as all necessary permissions and approvals.</p>
                            <button class='btn btn-outline-light rounded-5 my-3' onClick={()=>navigate('/real-estate')}>Know More</button> 
                            <br />
                        </div>
                    </div>
                    <div class='col-md-6'>
                        <div class='p-3'>
                            <img src={require('../image/realState.png')} style={{ width: '100%' }} class='rounded-4' alt="" />
                        </div> 
                    </div>
                </div>

                <div class='mt-4 bgdmg rounded-4 row flex-column-reverse flex-md-row align-items-center' data-aos="fade-up">
                    <div class='col-md-6 '>
                        <div class='col-11 m-auto lmg text-start'>
                            <br />
                            <p class='fs-2 fw-bold '>Economical Clothing</p>
                            <p class='fs-5 mt-2'>In the clothing section, we provide affordable and economical clothing options that align with the latest fashion trends, ensuring quality and style for all.</p>
                            <button class='btn btn-outline-light rounded-5 my-3'  onClick={()=>navigate('/clothing')}>Know More</button> 
                            <br />
                        </div>
                    </div>
                    <div class='col-md-6'>
                        <div class='p-3'>
                            <img src={require('../image/cloth.png')} style={{ width: '100%' }} class='rounded-4' alt="" />
                        </div> 
                    </div>
                </div>

                <div class='mt-4 bgdmg rounded-4 row flex-column-reverse flex-md-row align-items-center' data-aos="fade-up">
                    <div class='col-md-6 '>
                        <div class='col-11 m-auto lmg text-start'> 
                            <p class='fs-2 fw-bold '>Food </p>
                            <p class='fs-5 mt-2'>In our food section, you can enjoy fresh, healthy, organic, and hygienic food. We ensure that all items meet the highest standards of quality and taste.</p>
                            <button class='btn btn-outline-light rounded-5 my-3'  onClick={()=>navigate('/food')}>Know More</button> 
                         
                        </div>
                    </div>
                    <div class='col-md-6'>
                        <div class='p-3'>
                            <img src={require('../image/food3.png')} style={{ width: '100%' }} class='rounded-4' alt="" />
                        </div> 
                    </div>
                </div>
            </div>
            <SubContact/>
        </div>
    )
}

export default Services