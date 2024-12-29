import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact'

const BuilderServices = () => {
       useEffect(() => {
              AOS.init({ duration: 2000 });
          }, [])
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/builder.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white'  data-aos="fade-up">Building Your  <span class='text-danger'>Dreams</span> <br />with Expertise and Precision</p>
                </div>
            </div>

            <div class='col-11 m-auto mt-3'>
                <p class='fs-5 tjustify' data-aos="fade-up">At <b> May I Services</b>, we specialize in delivering comprehensive builder services tailored to meet the diverse needs of our clients. From residential homes to commercial spaces, we are committed to providing high-quality construction solutions that combine durability, functionality, and aesthetic appeal.</p>
            </div>

            <div class='mt-4 col-11 m-auto'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Our Services Include</p>

                <ul class='text-start'>
                    <li class='fs-3 fw-semibold' data-aos="fade-up">Residential Construction:
                        <ul class='fs-5 fw-normal'>
                            <li>Building dream homes that reflect your personality and meet your lifestyle needs.</li>
                            <li>Expertise in modern, traditional, and custom architectural styles to suit all preferences.</li>
                            <li>Focus on structural integrity, premium materials, and timely delivery.</li>
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Commercial Construction:
                        <ul class='fs-5 fw-normal'  >
                            <li> Developing efficient, functional spaces for offices, retail, and industrial use.</li>
                            <li> Specialized designs to enhance productivity and meet business requirements.</li>
                            <li> Incorporating sustainable building practices to align with modern standards.</li>
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Renovations and Remodeling:
                        <ul class='fs-5 fw-normal'>
                            <li> Transforming existing spaces with innovative remodeling solutions.</li>
                            <li> Enhancing the functionality and aesthetic of kitchens, bathrooms, and living areas.</li>
                            <li>Providing cost-effective renovation plans without compromising on quality.</li>
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Project Management:
                        <ul class='fs-5 fw-normal'>
                            <li> Managing construction projects from planning to completion with precision.</li>
                            <li> Ensuring seamless coordination between architects, engineers, and contractors. </li>
                            <li>Delivering projects on time and within budget while maintaining quality standards. </li>
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Custom Designs and Build Solutions:
                        <ul class='fs-5 fw-normal'>
                            <li> Tailoring each project to match the specific needs and vision of our clients.</li>
                            <li> Offering design consultation and creating unique layouts for your property. </li>
                            <li>Utilizing the latest tools and technologies to ensure excellence in execution. </li>
                        </ul>
                    </li>
                </ul>

            </div>

            <div class='col-11 m-auto rounded-4 mt-4 bgdmg' style={{ border: "5px solid #082b31" }} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto lmg text-start'>
                    <p class='fs-2 fw-bold' >Our Process </p>
                    <ul class='fs-5 text-start my-2'>
                        <li><b>Consultation: </b> Understanding your needs, budget, and vision for the project. </li>
                        <li><b>Design & Planning:</b> Developing detailed architectural designs and project plans.</li>
                        <li><b>Construction: </b> Executing the project with precision, adhering to timelines and safety standards.</li>
                        <li><b>Handover: </b>Delivering a completed project that exceeds expectations, ready for use.</li>
                    </ul>
                </div>

            </div>

            <div class='col-11 m-auto mt-4 text-start'>
         
                    <p class='fs-2 fw-bold' data-aos="fade-up"> Our Commitment to Excellence</p>
                    <p class='fs-5' data-aos="fade-up">At May I Services, we aim to make the construction process smooth and stress-free for our clients. Whether it’s building a new home, renovating an existing space, or creating a commercial property, our dedication to quality and customer satisfaction is unwavering.</p>
            </div>

            <SubContact/>

        </div>
    )
}

export default BuilderServices