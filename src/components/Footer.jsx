import React from 'react'

const Footer = () => {
    return (
        <div class='bgdmg'>
            <div class='col-11 m-auto row'>
                <div class='col-md-4'>
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
                <div class='col-md-4 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg'>
                        <p class='fs-5'><b>Menu</b></p>
                        <p class='mt-1'>Home</p>
                        <p class='mt-1'>About</p>
                        <p class='mt-1'>Service</p>
                        <p class='mt-1'>Contact</p>
                    </div>
                </div>

                <div class='col-md-4 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg'>
                        <p class='fs-5'><b>Address </b></p>
                        <p class=''>Arera colony bhopal 462016</p>

                        <p class='fs-5 mt-2'><b>Mobile </b></p>
                        <p class=''>7000632088</p>

                        <p class='fs-5 mt-2'><b>Mail </b></p>
                        <p class=''>mayiservices@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer