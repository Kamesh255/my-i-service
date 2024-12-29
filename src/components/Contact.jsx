import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
       useEffect(() => {
              AOS.init({ duration: 2000 });
          }, [])
  return (
    <div>
         <div style={{ height: '100vh', backgroundImage: `url(${require('../image/contact.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white'  data-aos="fade-up">Contact <span class='text-danger'>Us </span></p>
                </div>
            </div>

            <div data-aos="zoom-up-in" class='col-11 m-auto row justify-content-center align-items-center flex-column-reverse flex-md-row rounded-4 my-5 bgdmg lmg' style={{border:'3px solid #082b31'}}>
                    <div class='col-md-6'>
                        <div class='col-11 m-auto text-start'>
                            <p class='fs-4 fw-semibold'>Address :</p>
                            <p class='fs-5'>Arera colony bhopal 462016</p>
                            <p class='fs-4 fw-semibold mt-2'>Mobile :</p>
                            <p class='fs-5'><a href='tel:9826155407' style={{textDecoration:'none'}}>9826155407</a></p>
                            <p class='fs-4 fw-semibold mt-2'>Mail :</p>
                            <p class='fs-5'><a href='mailto:mayiservices@gmail.com' style={{textDecoration:'none'}}>mayiservices@gmail.com</a> </p>

                        </div>
                    </div>
                    <div class='col-md-6 p-0 m-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.472823020635!2d77.42454883698679!3d23.21147318421748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42528bfdb253%3A0xa8042e11f260131d!2sArera%20Colony%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1735461916191!5m2!1sen!2sin"  class='rounded-4' height="320" style={{border:'0', width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>
    </div>
  )
}

export default Contact