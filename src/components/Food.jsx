import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';

const Food = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/food3.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in"><span class='text-danger'> F</span>ood</p>
                </div>
            </div>

            <div class='col-sm-11 col-10 m-auto mt-3'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Healthy and Hygienic Food for a Better Lifestyle                </p>
                <p class='fs-5 tjustify' data-aos="fade-up">At <b>May I Services</b>,  we believe that good health begins with what you eat. That’s why we are dedicated to providing <b>nutritious, organic, and hygienic food</b> options to suit your lifestyle. Whether you’re looking for fresh ingredients or wholesome ready-to-eat meals, we’ve got you covered.                </p>
                {/* <p class='fs-5 tjustify mt-2' data-aos="fade-up">We specialize in offering a diverse range of property options, including <b>plots , duplex flats</b>, and <b>land parcels</b>. Our focus is not just on helping you find the right property but also ensuring that the process is smooth, transparent, and stress-free.</p> */}
            </div>


            <div class='col-11 m-auto'>
                <p class='fs-1 fw-bold ' data-aos="fade-up">Our Services</p>

                <div class='row'>
                    <div class='col-md-6 p-3' data-aos="fade-up">
                        <div class='rounded-4' style={{ width: '100%', height: "300px", backgroundImage: `url(${require('../image/food2.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div class='lmg d-flex   justify-content-center rounded-4' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                                <div class='col-11 text-start '>
                                    <br />
                                    <p class='fs-2 fw-bold mt-2'>Healthy and hygienic</p>
                                    <p class='fs-5'>Experience fresh, nutritious, and safely prepared food options designed to support your well-being and lifestyle.</p>
                                    <button class='btn btn-outline-light rounded-5 mt-3 ' onClick={()=>navigate('/healthy-food-services')}>Know More</button>
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

            <div  class='col-11 m-auto rounded-4 mt-4 ' style={{border:"5px solid #082b31"}} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto'>
                    <p class='fs-2 fw-bold'>What We Offers</p>
                        <ul class='fs-5 text-start mt-3'>
                            <li><b>Healthy Ingredients:</b>Enjoy farm-fresh, organic produce sourced directly from trusted suppliers.</li>
                            <li><b>Hygienic Meals:</b> All our food is prepared in clean and safe environments to ensure the highest quality.</li>
                            <li><b>Nutritious Choices:</b> From balanced meals to snacks, we focus on providing food that’s as healthy as it is delicious.</li>
                            <li><b>Convenient Dining: </b>Whether at home or on the go, our food solutions are designed to fit your busy schedule.</li> 
                        </ul>
                  
                </div>
                <br />
            </div>

            <div  class='col-11 m-auto rounded-4 mt-4 bgdmg' style={{border:"5px solid #082b31"}} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto lmg text-start'>
                    <p class='fs-2 fw-bold'>Why Choose May I Services for Food? </p>
                        <ul class='fs-5 text-start my-2'>
                            <li><b>Health Focus : </b> We prioritize your well-being by offering only the best-quality food options.</li>
                            <li><b>Freshness Guaranteed :</b>  All our products are fresh, natural, and preservative-free</li>
                            <li><b>Affordable Pricing :</b>  Healthy eating shouldn’t come at a high cost.</li>

                        </ul> 
                </div>
       
            </div>


            <SubContact />
        </div>
    )
}

export default Food