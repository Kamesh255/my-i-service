import React, { useEffect } from 'react'
import Svg from './MisSvg'
import MisSvg from './MisSvg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const slider = [
  {
    image: `${require('../image/b1.jpg')}`,
    title: "Welcome to May i Service",
    text: " lorem ipsum dolor sit amet, consectetur adip inc commodo consequ velit vel aug commodo aug commod"
  },
  {
    image: `${require('../image/b2.jpg')}`,
    title: "Welcome to May i Service",
    text: " lorem ipsum dolor sit amet, consectetur adip inc commodo consequ velit vel aug commodo aug commod"
  }, {
    image: `${require('../image/b3.jpg')}`,
    title: "Welcome to May i Service",
    text: " lorem ipsum dolor sit amet, consectetur adip inc commodo consequ velit vel aug commodo aug commod"
  },
]

const ourPartner = [
  `${require('../image/ap1.png')}`,
  `${require('../image/ap2.png')}`,
  `${require('../image/ap3.png')}`,
  `${require('../image/ap1.png')}`,
  `${require('../image/ap2.png')}`,
  `${require('../image/ap3.png')}`,
]

const Home = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div>
      <div class='bgdmg d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
        <div>
          <br />
          <br /><br />
          <MisSvg  />
          <p class='lmg fs-1' >May <span style={{ color: 'red' }}>i</span>  Service</p>
        </div>
      </div>

      <div class='col-11 m-auto row align-items-center mt-5 gap-md-0 gap-4'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <p class='fw-semibold fs-1 ' data-aos="fade-up">Welcome to May i Service</p>
            <p data-aos="fade-up">At <b>May i Service</b>, we are committed to making your real estate journey smooth and rewarding. Whether you’re buying, selling, or investing, our team of experts is here to guide you with personalized solutions tailored to your needs. With years of experience and a deep understanding of the market, we’ve built a reputation for delivering results that exceed expectations.</p>
            <button class='btn btn-outline-dark rounded-5 mt-3'data-aos="fade-up">Know More</button>

          </div>
        </div>
        <div class='col-md-6'>
          <img class='rounded-4' data-aos="fade-in" src={require('../image/homeAbout.jpg')} style={{ width: '100%' }} alt="" />
        </div>
      </div>

      <div id="homeSlider" class="carousel slide mt-5" data-aos="zoom-in-up">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#homeSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          {
            slider?.map((el, i) => {
              return (
                <div style={{ height: '100vh', backgroundImage: `url(${el?.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} class={i == [0] ? `carousel-item active` : 'carousel-item'}>
                  <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <div class='col-lg-6 col-11 m-auto'>
                      <p class='fs-1 lmg fw-bold'>{el?.title}</p>
                      <p class='fs-5 lmg'>{el?.text}</p>
                      <button class='btn btn-outline-light mt-4 fw-bold rounded-5'>Know More</button>

                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        {/* <button class="carousel-control-prev" type="button" data-bs-target="#homeSlider" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#homeSlider" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>

      <div class='col-11 m-auto bgdmg rounded-4 row  mt-5  flex-column-reverse flex-md-row'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <br />
            <p class='lmg fs-1 fw-semibold' data-aos="fade-up">
              Why May <span style={{ color: 'red' }}>i</span> Service
            </p>
            <ul class='lmg fs-5'>
              <li class='mt-2' data-aos="fade-up"><b>Expert Guidance:</b> Unmatched knowledge of local and national markets.</li>
              <li class='mt-2' data-aos="fade-up"><b>Tailored Solutions:</b> Customized services for every client’s unique needs.</li>
              <li class='mt-2' data-aos="fade-up"><b>Proven Track Record:</b> Over [X years] of successful transactions and happy clients.</li>
              <li class='mt-2' data-aos="fade-up"><b>Innovative Marketing:</b> Advanced tools and strategies to showcase your property.</li>
              <li class='mt-2' data-aos="fade-up"><b>Client First Approach:</b> Your satisfaction is always our top priority.</li>
            </ul>
            <button data-aos="fade-up" class='btn  btn-outline-light rounded-5'>Know More</button>
            <br /><br />
          </div>
        </div>
        <div class='col-md-6 p-0'>
          <img class='rounded-4' data-aos="fade-in" src={require('../image/why.jpg')} style={{ width: '100%', height: '100%' , objectFit:'cover'}} alt="" />
        </div>
      </div>

      <div class='mt-3'>
        <p class=' display-4 fw-bold' data-aos="fade-down">Our Partner</p>

        <div class="ourPartner-container mt-4">
          <div class='ourPartner-marquee'>
            {ourPartner?.map((el) => {
              return (
                <>
                  <span style={{ marginLeft: "80px", marginRight: "10px" }}>
                    <img class='ourPartner' src={el} style={{ height: '50px' }} alt="" />
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <br />
    </div>

  )
}

export default Home