import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact'

const FoodService= () => {
       useEffect(() => {
              AOS.init({ duration: 2000 });
          }, [])
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/food2.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white'  data-aos="fade-up">Prioritizing Your  <span class='text-danger'>Health </span> <br /> with Delicious and Hygienic Food </p>
                </div>
            </div>

            <div class='col-11 m-auto mt-3'>
                <p class='fs-5 tjustify' data-aos="fade-up">Welcome to the Food Services by May I Services, where health and hygiene come first. We are committed to providing you with nutritious, delicious, and wholesome meals crafted with the utmost care. Our focus on high-quality ingredients and safe preparation practices ensures every bite you take is good for both your body and your taste buds.</p>
            </div>

            <div class='mt-4 col-11 m-auto'>
                <p class='fs-1 fw-bold' data-aos="fade-up">What We Offer</p>

                <ul class='text-start'>
                    <li class='fs-3 fw-semibold' data-aos="fade-up">Healthy Meal Plans:   
                        <ul class='fs-5 fw-normal'>
                            <li>Customizable meal options for individuals, families, and groups.</li>
                            <li> Balanced diets that include the right mix of proteins, carbs, and fats. </li>
                            <li> Special plans for fitness enthusiasts, weight management, and dietary restrictions. </li>
                          
                           
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Fresh Ingredients:   
                        <ul class='fs-5 fw-normal'>
                            <li> Locally sourced produce, meats, and dairy to ensure freshness and quality. </li>
                            <li> No preservatives, artificial flavors, or harmful additives. </li>
                            <li> Seasonal ingredients to keep your meals exciting and diverse. </li>
                       
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Hygienic Preparation:   
                        <ul class='fs-5 fw-normal'>
                            <li> A state-of-the-art kitchen environment that follows strict hygiene protocols. </li>
                            <li>Highly trained chefs and staff equipped with modern food safety techniques.  </li>
                            <li> Regular quality checks and compliance with food safety standards. </li>
                       
                           
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Catering Services:   
                        <ul class='fs-5 fw-normal'>
                            <li> Tailored catering solutions for events, parties, and corporate gatherings. </li>
                            <li> A variety of menu options, from traditional to modern cuisines. </li>
                            <li>Personalized service to meet the unique needs of your event.  </li>
                         
                           
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Quick and Reliable Delivery:   
                        <ul class='fs-5 fw-normal'>
                            <li> Freshly prepared meals delivered straight to your doorstep. </li>
                            <li>Temperature-controlled packaging to preserve freshness and flavor.  </li>
                            <li>Timely service for both individual orders and bulk deliveries.  </li> 
                        </ul>
                    </li> 
                    
                </ul>

            </div>

            <div class='col-11 m-auto rounded-4 mt-4 bgdmg' style={{ border: "5px solid #082b31" }} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto lmg text-start'>
                    <p class='fs-2 fw-bold' >Our Process</p>
                    <ul class='fs-5 text-start my-2'>
                        <li><b>Sourcing:</b>Partnering with trusted local farmers and suppliers for the freshest ingredients.</li>
                        <li><b>Preparation:</b>Utilizing advanced cooking techniques to retain nutrients and enhance flavor.</li>
                        <li><b>Delivery: </b>Using insulated packaging to ensure your food reaches you in perfect condition.</li>
 
                    </ul>
                </div>

            </div>

            <div class='col-11 m-auto mt-4 text-start'>
         
                    <p class='fs-2 fw-bold' data-aos="fade-up">Join the Healthy Food Revolution </p>
                    <p class='fs-5' data-aos="fade-up">At May I Services, we’re on a mission to redefine how you experience food. Healthy and hygienic doesn’t have to mean boring—our diverse menu and commitment to quality make every meal a delight.</p>
            </div>

            <SubContact/>

        </div>
    )
}

export default FoodService
