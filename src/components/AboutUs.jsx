import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/about2.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">About <span class='text-danger'>Us</span></p>
                </div>
            </div>

            <div class='col-11 m-auto row align-items-center mt-3'>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto'>
                        <p class='fs-5 tjustify mt-5' data-aos="fade-up"><b>May I Services</b>, your trusted partner in providing premium-quality services tailored to meet your everyday needs. We are committed to delivering excellence through our expertise in real estate consultancy, economical clothing solutions, and healthy food options. Our mission is to simplify your lifestyle by offering innovative and cost-effective solutions that blend convenience, quality, and affordability. </p>
                    </div>
                </div>
                <div class='col-md-6'>
                    <div class='p-3'>
                        <img class='rounded-4' data-aos="zoom-in" src={require('../image/about.jpg')} style={{ width: '100%' }} alt="" />
                    </div>
                </div>
            </div>

            <div class='col-11 m-auto'>
                <div class='col-11 m-auto'>
                    <p class='fs-5 tjustify mt-2' data-aos="fade-up">At May I Services, we take pride in our ability to understand and address the unique requirements of our clients. Whether you are looking for assistance in finding your dream property, seeking budget-friendly yet trendy clothing, or prioritizing healthy food choices, we ensure a seamless experience through our professional and personalized approach.</p>
                </div>
            </div>

            <div class='col-11 row gap-md-0 gap-4 m-auto mt-5'>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto  rounded-4 h-100'data-aos="fade-up" style={{background:'#1A3E1A'}}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Mission</p>
                            <p class='fs-5'>Our mission is to deliver exceptional, customer-focused solutions across real estate, fashion, and food services. We strive to enhance lifestyles with quality, affordability, and innovation while building lasting relationships based on trust and excellence.</p>
                            <br />
                        </div>
                    </div>
                </div>

                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto  rounded-4 h-100' data-aos="fade-up" style={{background:'#430606'}}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Vision</p>
                            <p class='fs-5'>We envision becoming a leading multi-service provider known for excellence, sustainability, and customer satisfaction. By embracing innovation and setting new standards, we aim to make high-quality services accessible, empowering individuals and communities to thrive.</p>
                            <br />
                        </div>
                    </div>
                </div>

            </div>

            <div class='col-10 m-auto mt-5'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Our Expertise</p>
                <div>
                    <p class='fs-3 tjustify mt-2 fw-semibold ' data-aos="fade-up">Real Estate Services</p>
                    <p class='fs-5 tjustify mt-2' data-aos="fade-up">We provide end-to-end guidance for real estate needs, including buying and selling plots, duplex flats, and lands. Our team handles all architectural planning and legal formalities, ensuring you get the perfect property with all necessary approvals.</p>
                </div>
                <div>
                    <p class='fs-3 tjustify mt-2 fw-semibold' data-aos="fade-up">Economical Clothing</p>
                    <p class='fs-5 tjustify mt-2' data-aos="fade-up">In the clothing sector, we offer fashionable and affordable apparel that aligns with the latest trends. Our collections cater to diverse tastes and preferences while ensuring exceptional quality within your budget.                    </p>
                </div>

                <div>
                    <p class='fs-3 tjustify mt-2 fw-semibold' data-aos="fade-up">Healthy Food Options                    </p>
                    <p class='fs-5 tjustify mt-2' data-aos="fade-up">We are committed to promoting a healthier lifestyle by offering hygienic, organic, and nutritious food products. From fresh produce to ready-to-eat options, every item is carefully curated to meet the highest standards of health and taste.</p>
                </div>
            </div>

            <div class='col-10 m-auto mt-5'>
                <p class='fs-5 tjustify fw-semibold' data-aos="fade-up">At May I Services, customer satisfaction is at the heart of everything we do. Our vision is to establish ourselves as a reliable, trustworthy, and innovative service provider, helping you make informed decisions for a better future. Join us in experiencing a blend of expertise, affordability, and quality like never before.
                </p>
            </div>


            <SubContact/>
        </div >
    )
}

export default AboutUs