import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import SubContact from './SubContact';

const projects = [
    {
        img: `${require('../image/realState.png')}`,
        title: "Real Estate",
        url: '/real-estate-project'
    },

    {
        img: `${require('../image/cloth.png')}`,
        title: "Clothing ",
        url: '/clothing-project'
    }
    ,
    {
        img: `${require('../image/food2.png')}`,
        title: "Food",
        url: '/Food-project'
    }
]
const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const navigate = useNavigate()
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/projects.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="zoom-in">Project<span class='text-danger'>s</span></p>
                </div>
            </div>

            <div class='col-sm-11 col-10 m-auto mt-3'>
                <p class='fs-1 fw-bold' data-aos="fade-up">Our Journey of Excellence</p>
                <p class='fs-5 tjustify' data-aos="fade-up">At <b>May I Services</b>, our projects are a testament to our commitment to delivering value, innovation, and quality. Each project we undertake reflects our dedication to meeting client needs and exceeding expectations. From real estate developments to lifestyle-enhancing services, we work tirelessly to bring your vision to life. </p>
            </div>

            <div class='col-sm-11 m-auto row align-items-center justify-content-center mt-5 gap-sm-0 gap-4'>
                {projects?.map?.((el)=>{
                    return(
                        <div class='col-lg-4 col-md-6 col-11'>
                            <div class='col-11 m-auto bgdmg rounded-4'>
                                <div class='p-3'>
                                    <img src={el?.img} style={{width:'100%'}} class='rounded-4' alt="" />
                                </div>
                                <div class='text-start lmg col-11 m-auto'>
                                    <p class='fs-3 fw-bold'>{el?.title}</p>
                                    <button class='btn btn-outline-light rounded-5 my-3'>View Projects</button>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
            <br />
        <SubContact/>



        </div>
    )
}

export default Projects