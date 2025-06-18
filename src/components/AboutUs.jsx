import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { Helmet } from 'react-helmet';

const expertiseData = {
    "title": "Our Expertise",
    "sections": [
        {
            "heading": "Real Estate Services",
            "description": "We provide end-to-end guidance for real estate needs, including buying and selling plots, duplex flats, and lands. Our team handles all architectural planning and legal formalities, ensuring you get the perfect property with all necessary approvals."
        },
        {
            "heading": "Economical Clothing",
            "description": "We believe that style should be accessible to everyone. Our mission is simple: to bring you premium-quality clothing at prices that fit every budget. We carefully design and curate collections that blend luxury, comfort, and affordability, so you can look your best without breaking the bank. Whether you're dressing for work, play, or special moments, we’re here to make top-class fashion easy and affordable. Step into style. Save without compromise."
        },
        {
            "heading": "Healthy Food Options",
            "description": "We are passionate about bringing you hygienic, fresh, healthy, and organic food straight from nature’s best sources. We believe that good health starts with good food, and we are committed to offering products that are pure, chemical-free, and full of natural goodness. Every item we deliver is carefully selected to ensure quality, freshness, and nutrition — so you and your family can enjoy food the way nature intended. Eat Fresh. Live Healthy. Choose Organic."
        }
    ]
}

const AboutUs = () => {

    const [expertise, setExpertise] = useState(expertiseData?.sections[0]?.heading)
    const [expertiseDescription, setExpertiseDescription] = useState(expertiseData?.sections[0]?.description)

    useEffect(() => {
        const found = expertiseData?.sections?.find((item) => item?.heading === expertise);
        setExpertiseDescription(found);
    }, [expertise]);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us - May i Services</title>
                <meta name="description" content="'May I Services' provides guidance and services in three key areas: real estate, economical clothing, and healthy food." />
                <meta name="keywords" content="real estate, economical clothing, healthy food, Services" />
            </Helmet>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/about2.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Abou<span class='text-danger'>t</span> Us</p>
                </div>
            </div>

            {/* <div class='col-11 m-auto row align-items-center mt-3'>
                <div class='col-md-6'>
                    <div class='col-sm-11 m-auto'>
                        <p class='fs-5 tjustify mt-5' data-aos="fade-up"><b>May I Services</b>, your trusted partner in providing premium-quality services tailored to meet your everyday needs. We are committed to delivering excellence through our expertise in real estate consultancy, economical clothing solutions, and healthy food options. Our mission is to simplify your lifestyle by offering innovative and cost-effective solutions that blend convenience, quality, and affordability. </p>
                    </div>
                </div>
                <div class='col-md-6'>
                    <div class='p-3'>
                        <img class='rounded-4' data-aos="zoom-in" src={require('../image/about.png')} style={{ width: '100%' }} alt="" />
                    </div>
                </div>
            </div>

            <div class='col-11 m-auto'>
                <div class='col-11 m-auto'>
                    <p class='fs-5 tjustify mt-2' data-aos="fade-up">At May I Services, we take pride in our ability to understand and address the unique requirements of our clients. Whether you are looking for assistance in finding your dream property, seeking budget-friendly yet trendy clothing, or prioritizing healthy food choices, we ensure a seamless experience through our professional and personalized approach.</p>
                </div>
            </div> */}

            <div class='col-11 m-auto row align-items-center mt-4 text-center bgdmg rounded-4 lmg  p-3' data-aos="fade-up">
                <p class='fs-5 mt-4 ' ><b>May I Services</b>, your trusted partner in providing premium-quality services tailored to meet your everyday needs. We are committed to delivering excellence through our expertise in real estate consultancy, economical clothing solutions, and healthy food options. Our mission is to simplify your lifestyle by offering innovative and cost-effective solutions that blend convenience, quality, and affordability. </p>
            </div>

            <div class='col-11 row gap-md-0 gap-4 m-auto mt-5'>
                <div class=''>
                    <div class=' m-auto  rounded-4 h-100' data-aos="fade-up" style={{ background: '#1A3E1A' }}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1  fw-bold'>Mission</p>
                            <p class='fs-5'>Our mission is to deliver exceptional, customer-focused solutions across real estate, fashion, and food services. We strive to enhance lifestyles with quality, affordability, and innovation while building lasting relationships based on trust and excellence.</p>
                            <br />
                        </div>
                    </div>
                </div>

                <div class='mt-4'>
                    <div class=' m-auto  rounded-4 h-100' data-aos="fade-up" style={{ background: '#430606' }}>
                        <div class='col-11 m-auto text-start lmg'>
                            <br />
                            <p class='fs-1 fw-bold'>Vision</p>
                            <p class='fs-5'>We envision becoming a leading multi-services provider known for excellence, sustainability, and customer satisfaction. By embracing innovation and setting new standards, we aim to make high-quality services accessible, empowering individuals and communities to thrive.</p>
                            <br />
                        </div>
                    </div>
                </div>

            </div>

            <div className='col-11 m-auto mt-5'>
                <p className='fs-1 fw-bold'>{expertiseData?.title}</p>
                <div className='d-flex align-items-center justify-content-center gap-3'>
                    {
                        expertiseData?.sections?.map((item, index) => (
                            <button
                                key={index}
                                className={`btn rounded-5 mt-3 ${expertise === item?.heading ? 'btn-dark' : 'btn-outline-dark'}`}
                                onClick={() => setExpertise(item?.heading)}
                            >
                                {item?.heading}
                            </button>
                        ))
                    }
                </div>

                {/* Animated section with unique key */}
                <div key={expertise} data-aos="fade-up">
                    <p className='fs-3 tjustify mt-2 fw-semibold'>{expertiseDescription?.heading}</p>
                    <p className='fs-5 tjustify mt-2'>{expertiseDescription?.description}</p>
                </div>
            </div>


            {/* <div class='col-10 m-auto mt-5'>
                <p class='fs-5 tjustify fw-semibold' >At May I Services, customer satisfaction is at the heart of everything we do. Our vision is to establish ourselves as a reliable, trustworthy, and innovative services provider, helping you make informed decisions for a better future. Join us in experiencing a blend of expertise, affordability, and quality like never before.
                </p>
            </div> */}


            <SubContact />
        </div >
    )
}

export default AboutUs