import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';

const RealState = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/realState.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Real<span class='text-danger'> E</span>state</p>
                </div>
            </div>

            <div class='col-sm-11 col-10 m-auto mt-3'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Your Trusted Real Estate Partner</p>
                <p class='fs-5 tjustify' data-aos="fade-up">At <b>May I Services</b>, we bring you comprehensive real estate solutions tailored to meet your needs. Whether you're searching for a dream home, an investment property, or a piece of land, our expert team is here to guide you every step of the way</p>
                <p class='fs-5 tjustify mt-2' data-aos="fade-up">We specialize in offering a diverse range of property options, including <b>plots , duplex flats</b>, and <b>land parcels</b>. Our focus is not just on helping you find the right property but also ensuring that the process is smooth, transparent, and stress-free.</p>
            </div>


            <div class='col-11 m-auto'>
                <p class='fs-1 fw-bold ' data-aos="fade-up">Our Services</p>

                <div class='row'>
                    <div class='col-md-6 p-3' data-aos="fade-up">
                        <div class='rounded-4' style={{ width: '100%', height: "300px", backgroundImage: `url(${require('../image/builder.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div class='lmg d-flex   justify-content-center rounded-4' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                                <div class='col-11 text-start '>
                                    <br />
                                    <p class='fs-2 fw-bold mt-2'>Builder Services</p>
                                    <p class='fs-5'>Providing reliable construction solutions for residential and commercial projects, delivering quality and durability you can trust.</p>
                                    <button class='btn btn-outline-light rounded-5 mt-3 '>Know More</button>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div class='col-md-6 p-3' data-aos="fade-up">
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
                    </div>  
                </div>
            </div>

            <div  class='col-11 m-auto rounded-4 mt-4 ' style={{border:"5px solid #082b31"}} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto'>
                    <p class='fs-2 fw-bold'>What We Offers</p>
                        <ul class='fs-5 text-start mt-3'>
                            <li><b>Property Listings:</b> Choose from a variety of options, including residential and commercial properties, designed to fit your preferences and budget.</li>
                            <li><b>Architectural Services:</b> We provide professional architectural design and planning, ensuring that your property aligns with your vision.                            </li>
                            <li><b>Legal Assistance:</b>From permissions and approvals to document verification, we take care of all the formalities for you.</li>
                            <li><b>Real Estate Consultancy:</b>Get expert advice on property investments, market trends, and future growth opportunities</li>

                        </ul>
                  
                </div>
                <br />
            </div>

            <div  class='col-11 m-auto rounded-4 mt-4 bgdmg' style={{border:"5px solid #082b31"}} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto lmg text-start'>
                    <p class='fs-2 fw-bold'>Why Choose May I Services for Real Estate? </p>
                        <ul class='fs-5 text-start my-2'>
                            <li><b>Transparency : </b> We ensure honest dealings and provide all the necessary information upfront.                            </li>
                            <li><b>Expertise :</b> With years of experience, we bring you the best options in the market.                            </li>
                            <li><b>Convenience :</b> From property search to final paperwork, we handle it all so you can relax.                            </li>

                        </ul> 
                </div>
       
            </div>


            <SubContact />
        </div>
    )
}

export default RealState