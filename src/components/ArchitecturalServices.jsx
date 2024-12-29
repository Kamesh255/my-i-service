import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact'

const ArchitecturalServices = () => {
       useEffect(() => {
              AOS.init({ duration: 2000 });
          }, [])
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/builder.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white'  data-aos="fade-up">Turning  <span class='text-danger'>Vision</span>  into Reality  <br />with Innovative Design</p>
                </div>
            </div>

            <div class='col-11 m-auto mt-3'>
                <p class='fs-5 tjustify' data-aos="fade-up">At <b> May I Services</b>, we offer exceptional architectural and designing services that transform ideas into breathtaking structures. Our expertise lies in creating spaces that are not only visually stunning but also highly functional and sustainable. Whether you’re planning a residential home, commercial property, or unique custom project, our team of skilled architects and designers is here to bring your vision to life.</p>
            </div>

            <div class='mt-4 col-11 m-auto'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Our Services Include</p>

                <ul class='text-start'>
                    <li class='fs-3 fw-semibold' data-aos="fade-up">Architectural Design:
                        <ul class='fs-5 fw-normal'>
                            <li>Crafting innovative and personalized architectural plans that align with your vision. </li>
                            <li>Offering modern, traditional, and bespoke designs tailored to your requirements. </li>
                            <li>Balancing aesthetics and practicality to create spaces that are both beautiful and functional. </li> 
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Interior Designing:
                        <ul class='fs-5 fw-normal'>
                            <li>Designing interiors that enhance the comfort and appeal of your space. </li>
                            <li>Choosing the perfect blend of colors, textures, and furniture to match your style. </li>
                            <li>Focused on creating harmonious spaces that inspire and uplift. </li> 
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Landscape Design:
                        <ul class='fs-5 fw-normal'>
                            <li>Planning and designing outdoor spaces that blend seamlessly with your property. </li>
                            <li>Incorporating greenery, pathways, lighting, and water features for a serene environment. </li>
                            <li>Creating sustainable landscapes that are both eco-friendly and visually appealing. </li> 
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Renovation and Redesign:
                        <ul class='fs-5 fw-normal'>
                            <li>Reimagining existing spaces to enhance functionality and style. </li>
                            <li>Providing expert consultation on structural modifications and aesthetic improvements. </li>
                            <li>Turning outdated spaces into modern masterpieces. </li> 
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Project Visualization:
                        <ul class='fs-5 fw-normal'>
                            <li>Using advanced 3D modeling and rendering tools to provide a realistic preview of the project. </li>
                            <li>Allowing clients to visualize every detail before construction begins. </li>
                            <li>Ensuring complete alignment between the client’s expectations and the final design. </li> 
                        </ul>
                    </li>
                </ul>

            </div>

            <div class='col-11 m-auto rounded-4 mt-4 bgdmg' style={{ border: "5px solid #082b31" }} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto lmg text-start'>
                    <p class='fs-2 fw-bold' >Our Process </p>
                    <ul class='fs-5 text-start my-2'>
                        <li><b>Initial Consultation: </b> Discussing your project requirements, vision, and budget.</li>
                        <li><b>Conceptual Design:</b> Developing design concepts that capture your ideas.</li>
                        <li><b>Detailed Planning: </b> Creating technical drawings, blueprints, and 3D renderings.</li>
                        <li><b>Execution Support:</b>Collaborating with contractors and builders for seamless project execution.</li>
                    </ul>
                </div>

            </div>

            <div class='col-11 m-auto mt-4 text-start'>
         
                    <p class='fs-2 fw-bold' data-aos="fade-up"> Transforming Spaces, One Design at a Time</p>
                    <p class='fs-5' data-aos="fade-up">At May I Services, we believe that great design has the power to inspire and uplift. Our architectural and designing services are crafted to turn your dream spaces into reality, with attention to every detail and a commitment to quality.</p>
            </div>

            <SubContact/>

        </div>
    )
}

export default ArchitecturalServices