import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
    return (
        <div class='bgdmg'>
            <div class='col-11 m-auto row'>
                <div class='col-lg-3 col-md-6'>
                    <br />
                    <div class='col-11  text-start '>
                        <img src={require('../image/logo2.png')} style={{ width: '100px' }} alt="" />
                        <div class='d-flex align-items-center gap-4 lmg mt-4 fs-2'>

                            <a href="https://www.instagram.com/mayiservices.in" target='_blanck'>
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61568218448512&mibextid=ZbWKwL" target='_blanck'>
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="https://x.com/mayiservices" target='_blanck'>
                            <i class="bi bi-twitter-x"></i>
                            </a>
                            <a href="https://youtube.com/@mayiservices" target='_blanck'>
                            <i class="bi bi-youtube"></i>
                            </a>


                           
                            <br />

                        </div>
                    </div>
                </div>
                <div class='col-lg-5 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg row'>
                        <p class='fs-5 col-12'><b>Menu</b></p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Home</p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/about-us')}>About</p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/services')}>Service</p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/projects')}>Projects</p> 
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/contact-us')}>Contact Us</p> 
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/real-estate')}>Real Estate </p>
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/clothing')}>Clothing</p> 
                        <p class='mt-1 col-6' style={{cursor:'pointer'}} onClick={()=>navigate('/food')}>Food</p> 
                        <p class='mt-1 ' style={{cursor:'pointer'}} onClick={()=>navigate('/builder-services')}>Builder Services</p> 
                        <p class='mt-1 ' style={{cursor:'pointer'}} onClick={()=>navigate('/architectural-services')}>Architectural Services</p> 
                        <p class='mt-1 ' style={{cursor:'pointer'}} onClick={()=>navigate('/online-store-services')}>Online Store Services</p> 
                        <p class='mt-1 ' style={{cursor:'pointer'}} onClick={()=>navigate('/healthy-food-services')}>Food Healthy and hygienic</p> 
                    </div>
                </div>

                <div class='col-lg-3 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg'>
                        <p class='fs-5'><b>Address </b></p>
                        <p class=''>Ground Floor SR. MIG 12 E - 3 Arera Colony Bhopal 462016</p>

                        <p class='fs-5 mt-2'><b>Mobile </b></p>
                        <p class=''><a href='tel:+9194075 08822' style={{textDecoration:'none'}}>+91 94075 08822</a></p>

          

                        <p class='fs-5 mt-2'><b>Mail </b></p>
                        <p class=''><a href='mailto:mayiservices@gmail.com' style={{textDecoration:'none'}}>mayiservices@gmail.com</a> </p>
                    </div>
                </div>

            </div>
            <br />
        </div>
    )
}

export default Footer