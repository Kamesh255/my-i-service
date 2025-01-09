import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Clothing = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Clothing - May i Services</title>
                <meta name="description" content="'May I Services' provides guidance and services in three key areas: real estate, economical clothing, and healthy food." />
                <meta name="keywords" content="clothing , services" />
            </Helmet>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/cloth.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Economical  <span class='text-danger'> C</span>lothing </p>
                </div>
            </div>

            <div class='col-sm-11 col-10 m-auto mt-3'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Affordable Fashion for Everyone</p>
                <p class='fs-5 tjustify' data-aos="fade-up">At <b>May I Services</b>, we redefine the way you shop for clothes by combining style, quality, and affordability. Our <b>economical clothing solutions</b> are designed to keep you in sync with the latest fashion trends without stretching your budget.</p>
                <p class='fs-5 tjustify mt-2' data-aos="fade-up">Explore a wide variety of options that cater to all age groups and occasions. Whether you’re looking for casual wear, formal attire, or seasonal collections, we have something for everyone.</p>
            </div>


            <div class='col-11 m-auto'>
                <p class='fs-1 fw-bold ' data-aos="fade-up">Our Services</p>

                <div class='row'>
                    <div class='col-md-6 p-3' data-aos="fade-up">
                        <div class='rounded-4' style={{ width: '100%', height: "300px", backgroundImage: `url(${require('../image/onlineCloth.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div class='lmg d-flex   justify-content-center rounded-4' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                                <div class='col-11 text-start '>
                                    <br />
                                    <p class='fs-2 fw-bold mt-2'> Online fashion store                                    </p>
                                    <p class='fs-5'>Discover trendy, affordable clothing for all occasions. Shop the latest styles with ease and elevate your wardrobe effortlessly.</p>
                                    <button class='btn btn-outline-light rounded-5 mt-3 ' onClick={() => navigate('/online-store-services')}>Know More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div class='col-md-6 p-3' data-aos="fade-up">
                        <div class='rounded-4' style={{ width: '100%', height: "300px", backgroundImage: `url(${require('../image/architecture.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div class='lmg d-flex   justify-content-center rounded-4' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                                <div class='col-11 text-start '>
                                    <br />
                                    <p class='fs-2 fw-bold mt-2'>Architectural & Designing</p>
                                    <p class='fs-5'>Creating innovative, functional, and aesthetically pleasing designs tailored to meet your unique needs and vision.</p>
                                    <button class='btn btn-outline-light rounded-5 mt-3 '>Know More</button>
                                </div>
                            </div>
                        </div> 
                    </div>   */}
                </div>
            </div>

            <div class='col-11 m-auto rounded-4 mt-4 ' style={{ border: "5px solid #082b31" }} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto'>
                    <p class='fs-2 fw-bold'>What We Offers</p>
                    <ul class='fs-5 text-start mt-3'>
                        <li><b>Online Fashion Store:</b>  Browse a curated collection of stylish and trendy clothing that fits your taste and budget.</li>
                        <li><b>Latest Designs:</b> Stay ahead of the fashion curve with our regularly updated collections inspired by the newest trends </li>
                        <li><b>Quality Assurance: </b> We ensure that every piece of clothing is crafted with attention to detail, offering you comfort, durability, and elegance</li>
                        <li><b>Personalized Choices:</b>Our team helps you select outfits that suit your preferences and enhance your wardrobe</li>

                    </ul>

                </div>
                <br />
            </div>

            <div class='col-11 m-auto rounded-4 mt-4 bgdmg' style={{ border: "5px solid #082b31" }} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto lmg text-start'>
                    <p class='fs-2 fw-bold'>Why Choose May I Services for   Clothing? </p>
                    <ul class='fs-5 text-start my-2'>
                        <li><b>Affordability : </b>  Fashion that doesn’t break the bank. </li>
                        <li><b>Variety :</b>A diverse range of options to meet all your style needs. </li>
                        <li><b>Convenience :</b> Shop from the comfort of your home through our user-friendly online store. </li>

                    </ul>
                </div>

            </div>


            <SubContact />
        </div>
    )
}

export default Clothing