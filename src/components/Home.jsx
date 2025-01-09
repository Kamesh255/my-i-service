import React, { useEffect } from 'react'
 
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const slider = [
  {
    image: `${require('../image/realState.png')}`,
    title: "Real State Services",
    text: "Expert guidance for plots, flats, and legal approvals."
  },
  {
    image: `${require('../image/cloth.png')}`,
    title: "  Economical Clothing Service",
    text: "Trendy fashion at budget-friendly prices."
  }, {
    image: `${require('../image/food2.png')}`,
    title: "Food Service",
    text: "Organic, hygienic, and nutritious meals."
  },
]


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  const navigate = useNavigate()
  return (
    <div>
      <Helmet> 
      <meta charSet="utf-8" />
        <title>May i Services</title>
        <meta name="description" content="'May I Services' provides guidance and services in three key areas: real estate, economical clothing, and healthy food." />
        <meta name="keywords" content="real estate, economical clothing, healthy food, Services" />
      </Helmet>
      <div class='bgdmg d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
        <div>
          <br />
          <br /><br />
          <div class='col-sm-4 col-7 m-auto position-relative'>
            <img style={{ position: 'absolute', top: '0', left: '0', width: '100%' }} data-aos="fade-down" src={require('../image/may.png')} alt="" />
            <img style={{ width: '100%' }} src={require('../image/i.png')} data-aos="zoom-in" alt="" />
            <img style={{ position: 'absolute', top: '0', left: '0', width: '100%' }} data-aos="fade-up" src={require('../image/services.png')} alt="" />

          </div>
          {/* <MisSvg  /> */}
          <p class='lmg fs-1 fw-semibold' >May <span class='fw-bold' style={{ color: 'red' }}>i</span>  Services</p>
        </div>
      </div>

      <div class='col-11 m-auto row align-items-center mt-5 gap-md-0 gap-4'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <p class='fw-semibold fs-1 ' data-aos="fade-up">Welcome to May i Service</p>
            <p data-aos="fade-up">At <b>May i Service</b>, we are committed to making your real estate journey smooth and rewarding. Whether you’re buying, selling, or investing, our team of experts is here to guide you with personalized solutions tailored to your needs. With years of experience and a deep understanding of the market, we’ve built a reputation for delivering results that exceed expectations.</p>
            <button class='btn btn-outline-dark rounded-5 mt-3' data-aos="fade-up" onClick={()=>navigate('/about-us')} >Know More</button>

          </div>
        </div>
        <div class='col-md-6'>
          <img class='rounded-4' data-aos="fade-in" src={require('../image/about.png')} style={{ width: '100%' }} alt="" />
        </div>
      </div>

      <div id="carouselExampleAutoplaying" class="carousel slide mt-5" data-aos="zoom-in-up" data-bs-ride="carousel">

        <div class="carousel-inner">
          {
            slider?.map((el, i) => {
              return (
                <div style={{ height: '100vh', backgroundImage: `url(${el?.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} class={i == [0] ? `carousel-item active` : 'carousel-item'}>
                  <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                    <div class='col-lg-8 col-11 m-auto'>
                      <p class='display-1 lmg fw-bold'>{el?.title}</p>
                      <p class='fs-5 lmg'>{el?.text}</p>
                      <button class='btn btn-outline-light mt-4 fw-bold rounded-5' onClick={() => navigate('/services')}>Know More</button>

                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class='col-11 m-auto bgdmg rounded-4 row  mt-5  flex-column-reverse flex-md-row'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <br />
            <p class='lmg fs-1 fw-semibold' data-aos="fade-up">
              Why May <span style={{ color: 'red' }}>i</span> Service
            </p>
            <ul class='lmg fs-5'>
              <li class='mt-2' data-aos="fade-up"><b>Affordable Solutions:</b> We believe in delivering value without compromising quality.</li>
              <li class='mt-2' data-aos="fade-up"><b>Tailored Solutions:</b> Customized services for every client’s unique needs.</li>
              <li class='mt-2' data-aos="fade-up"><b>Customer-Centric Approach:</b> Your satisfaction is at the heart of everything we do.              </li>
              <li class='mt-2' data-aos="fade-up"><b>Trusted Expertise:</b> Backed by years of experience in real estate, fashion, and food services.</li>
              <li class='mt-2' data-aos="fade-up"><b>Client First Approach:</b> Your satisfaction is always our top priority.</li>
            </ul>
            <button data-aos="fade-up" class='btn  btn-outline-light rounded-5' onClick={() => navigate('/about-us')}>Know More</button>
            <br /><br />
          </div>
        </div>
        <div class='col-md-6 p-0'>
          <div class='p-sm-5 p-3'>
            <img class='rounded-4' data-aos="fade-in" src={require('../image/why.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
          </div>
        </div>
      </div>
      {/* 
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
      </div> */}
      <br />
      <SubContact />
    </div>

  )
}

export default Home