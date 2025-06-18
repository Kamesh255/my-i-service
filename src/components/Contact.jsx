import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us - May i Services</title>
                <meta name="description" content="'May I Services' provides guidance and services in three key areas: real estate, economical clothing, and healthy food." />
                <meta name="keywords" content="contact , services" />
            </Helmet>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/contact.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white' data-aos="fade-up">Contac<span class='text-danger'>t</span> Us</p>
                </div>
            </div>

            <div data-aos="zoom-up-in" class='col-11 m-auto row justify-content-center align-items-center flex-column-reverse flex-md-row rounded-4 my-5 bgdmg lmg' style={{ border: '3px solid #082b31' }}>
                <div class='col-md-6'>
                    <div class='col-11 m-auto text-start'>
                        <p class='fs-4 fw-semibold'>Address :</p>
                        <p class='fs-5'>Ground Floor E-3/12 Sr. MIG Arera Colony, Bhopal, 462016</p>
                        <p class='fs-4 fw-semibold mt-2'>Mobile :</p>
                        <p class='fs-5'><a href='tel:+919407508822' style={{ textDecoration: 'none' }}>+91 94075 08822</a></p>
                        <p class='fs-4 fw-semibold mt-2'>Mail :</p>
                        <p class='fs-5'><a href='mailto:mayiservices@gmail.com' style={{ textDecoration: 'none' }}>mayiservices@gmail.com</a> </p>

                    </div>
                </div>
                <div class='col-md-6 p-0 m-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.158771957515!2d77.42738923698816!3d23.214333733763237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c431ae546e701%3A0x35086dba3e4dce98!2sMay%20I%20Services!5e0!3m2!1sen!2sin!4v1735704111733!5m2!1sen!2sin" class='rounded-4' height="500" style={{ border: '0', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div data-aos="zoom-up-in" class='col-11 m-auto row justify-content-center align-items-center flex-column-reverse flex-md-row rounded-4 my-5 bgdmg lmg' style={{ border: '3px solid #082b31' }}>
                <div class='col-md-6'>
                    <div class='col-11 m-auto text-start'>
                        <p class='fs-4 fw-semibold'>Address :</p>
                        <p class='fs-5'>Ground Floor E-3/12 Sr. MIG Arera Colony, Bhopal, 462016</p>
                        <p class='fs-4 fw-semibold mt-2'>Mobile :</p>
                        <p class='fs-5'><a href='tel:+919407508822' style={{ textDecoration: 'none' }}>+91 94075 08822</a></p>
                        <p class='fs-4 fw-semibold mt-2'>Mail :</p>
                        <p class='fs-5'><a href='mailto:mayiservices@gmail.com' style={{ textDecoration: 'none' }}>mayiservices@gmail.com</a> </p>

                    </div>
                </div>
                <div class='col-md-6 p-0 m-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.158771957515!2d77.42738923698816!3d23.214333733763237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c431ae546e701%3A0x35086dba3e4dce98!2sMay%20I%20Services!5e0!3m2!1sen!2sin!4v1735704111733!5m2!1sen!2sin" class='rounded-4' height="500" style={{ border: '0', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div data-aos="zoom-up-in" class='col-11 m-auto row justify-content-center align-items-center flex-column-reverse flex-md-row rounded-4 my-5 bgdmg lmg' style={{ border: '3px solid #082b31' }}>
                <div class='col-md-6'>
                    <div class='col-11 m-auto text-start'>
                        <p class='fs-4 fw-semibold'>Address :</p>
                        <p class='fs-5'>Ground Floor E-3/12 Sr. MIG Arera Colony, Bhopal, 462016</p>
                        <p class='fs-4 fw-semibold mt-2'>Mobile :</p>
                        <p class='fs-5'><a href='tel:+919407508822' style={{ textDecoration: 'none' }}>+91 94075 08822</a></p>
                        <p class='fs-4 fw-semibold mt-2'>Mail :</p>
                        <p class='fs-5'><a href='mailto:mayiservices@gmail.com' style={{ textDecoration: 'none' }}>mayiservices@gmail.com</a> </p>

                    </div>
                </div>
                <div class='col-md-6 p-0 m-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.158771957515!2d77.42738923698816!3d23.214333733763237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c431ae546e701%3A0x35086dba3e4dce98!2sMay%20I%20Services!5e0!3m2!1sen!2sin!4v1735704111733!5m2!1sen!2sin" class='rounded-4' height="500" style={{ border: '0', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div data-aos="zoom-up-in" class='col-11 m-auto row justify-content-center align-items-center flex-column-reverse flex-md-row rounded-4 my-5 bgdmg lmg' style={{ border: '3px solid #082b31' }}>
                <div class='col-md-6'>
                    <div class='col-11 m-auto text-start'>
                        <p class='fs-4 fw-semibold'>Address :</p>
                        <p class='fs-5'>Ground Floor E-3/12 Sr. MIG Arera Colony, Bhopal, 462016</p>
                        <p class='fs-4 fw-semibold mt-2'>Mobile :</p>
                        <p class='fs-5'><a href='tel:+919407508822' style={{ textDecoration: 'none' }}>+91 94075 08822</a></p>
                        <p class='fs-4 fw-semibold mt-2'>Mail :</p>
                        <p class='fs-5'><a href='mailto:mayiservices@gmail.com' style={{ textDecoration: 'none' }}>mayiservices@gmail.com</a> </p>

                    </div>
                </div>
                <div class='col-md-6 p-0 m-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.158771957515!2d77.42738923698816!3d23.214333733763237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c431ae546e701%3A0x35086dba3e4dce98!2sMay%20I%20Services!5e0!3m2!1sen!2sin!4v1735704111733!5m2!1sen!2sin" class='rounded-4' height="500" style={{ border: '0', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div data-aos="zoom-up-in" class='col-11 m-auto row justify-content-center align-items-center flex-column-reverse flex-md-row rounded-4 my-5 bgdmg lmg' style={{ border: '3px solid #082b31' }}>
                <div class='col-md-6'>
                    <div class='col-11 m-auto text-start'>
                        <p class='fs-4 fw-semibold'>Address :</p>
                        <p class='fs-5'>Ground Floor E-3/12 Sr. MIG Arera Colony, Bhopal, 462016</p>
                        <p class='fs-4 fw-semibold mt-2'>Mobile :</p>
                        <p class='fs-5'><a href='tel:+919407508822' style={{ textDecoration: 'none' }}>+91 94075 08822</a></p>
                        <p class='fs-4 fw-semibold mt-2'>Mail :</p>
                        <p class='fs-5'><a href='mailto:mayiservices@gmail.com' style={{ textDecoration: 'none' }}>mayiservices@gmail.com</a> </p>

                    </div>
                </div>
                <div class='col-md-6 p-0 m-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.158771957515!2d77.42738923698816!3d23.214333733763237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c431ae546e701%3A0x35086dba3e4dce98!2sMay%20I%20Services!5e0!3m2!1sen!2sin!4v1735704111733!5m2!1sen!2sin" class='rounded-4' height="500" style={{ border: '0', width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact