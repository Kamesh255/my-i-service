import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
const SubContact = () => {
    useEffect(() => {
          AOS.init({ duration: 2000 });
      }, [])
      const navigate = useNavigate()
  return (
    <div class='col-11 m-auto bgdmg rounded-4 my-4' data-aos="fade-up">
        <br />
        <div class='col-11 m-auto text-start   lmg '>
            <p class='fs-2 fw-bold'>Ready to get started? </p>
            <p class='fs-4'>  Reach out to us today to explore how <b> May <span class='text-danger'>i</span>  Services</b> can simplify and enhance your life.</p>
            <button class='btn btn-outline-light rounded-5 mt-2' onClick={()=>navigate('/contact-us')}>Contact Us</button>

        </div>
        <br />
    </div>
  )
}

export default SubContact