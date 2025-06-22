import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';

const testimonials = [
  {
    name: "Mr. R. Dixit",
    role: "Service User",
    message: "May I Services has made my projects smoother than ever. From legal opinion and guidance to finding reliable vendors, everything is at my fingertips. A must-have tool for any builder who values time and quality!"
  },
  {
    name: "Mr. Dixit",
    role: "Architect",
    message: "As a developer, I needed fast, trustworthy service connections — and May I Services delivered beyond expectations. Real estate solutions, food, clothing — all managed beautifully through one app!"
  },
  {
    name: "Mr. Patidar",
    role: "Stakeholder",
    message: "May I Services has added incredible value to our projects. Their seamless integration of services saves us time and boosts efficiency. It's a game-changer for all stakeholders involved in real estate and lifestyle management."
  },
  {
    name: "Mr. Singh",
    role: "Architect",
    message: "Designing dreams requires reliable partners. Thanks to May I Services, I can focus more on my creative work, knowing the rest — from real estate needs to lifestyle essentials — is handled with care."
  },
  {
    name: "Mrs. Meena",
    role: "Architect",
    message: "May I Services is a brilliant support system for professionals like me. Whether it's coordinating with service providers or handling last-minute client needs, the app simplifies everything with just a few taps."
  },
  {
    name: "Mr. Dixit",
    role: "Service User",
    message: "Using May I Services has truly simplified my busy life. Finding a new apartment, ordering a meal, or upgrading my wardrobe — it's all easy, quick, and reliable. Highly recommended for anyone looking to save time!"
  },
  {
    name: "Mr. Shakya",
    role: "Service User",
    message: "What impressed me most about May I Services is the personalized touch. Their recommendations are spot-on, and the process is seamless. It’s my go-to app for anything real estate, food, and fashion!"
  },
  {
    name: "Mr. Ansari",
    role: "Contractor",
    message: "Managing multiple projects used to be stressful, but May I Services made it so much easier. From finding reliable suppliers to organizing services on-site, everything is now streamlined. It's an essential tool for any contractor who values speed, quality, and organization."
  },
  {
    name: "Mr. Bagga",
    role: "Investor",
    message: "Investing is all about smart decisions, and choosing May I Services was one of them. Their wide range of trusted service providers and easy navigation make them a reliable partner in today's fast-paced market."
  },
  {
    name: "Mr. Ansari",
    role: "Service User",
    message: "May I Services has completely changed the way I manage my daily needs. From finding the perfect home to ordering my favorite meals, everything is now just a tap away. The convenience and reliability are unmatched!"
  },
  {
    name: "Mr. Sharma",
    role: "Developer",
    message: "Managing different vendors was always a hassle — until I started using May I Services. Now, everything I need for my projects, plus personal essentials, is accessible in one efficient platform. Brilliant!"
  }
];

const whyMayI = {
  "heading": "At May I Services, we believe your time is valuable — that's why we bring the best of real estate, food, and clothing services together in one easy-to-use platform.",
  "subheading": "Here’s why thousands trust us every day:",
  "features": [
    {
      "title": "All-in-One Convenience",
      "description": "Find your dream home, enjoy your favorite meals, and upgrade your wardrobe — all from a single Tap."
    },
    {
      "title": "Trusted Service Providers",
      "description": "We partner only with verified, top-rated professionals and businesses, ensuring quality and reliability every time."
    },
    {
      "title": "Personalized Recommendations",
      "description": "No more endless scrolling — our smart suggestions bring you exactly what you need, when you need it."
    },
    {
      "title": "Fast and Seamless Experience",
      "description": "From browsing to booking, our platform is designed for speed, simplicity, and satisfaction."
    },
    {
      "title": "Save Time, Live Better",
      "description": "We take the hassle out of daily tasks, so you can focus on what truly matters in your life."
    },
    {
      "title": "Support You Can Rely On",
      "description": "Got a question or need help? Our friendly support team is just a tap away, ready to assist you anytime."
    }
  ]
}

const projects = [
  {
    img: `${require('../image/realState.png')}`,
    title: "Real Estate",
    btn1: 'Know More',
    btn1Url: '/real-estate-project',
    btn2: 'Subscribe Now',
    btn2Url: '/real-estate-project'
  },

  {
    img: `${require('../image/cloth.png')}`,
    title: "Clothing ",
    btn1: 'Know More',
    btn1Url: '/clothing-project',
    btn2: 'Subscribe Now',
    btn2Url: '/clothing-project'
  }
  ,
  {
    img: `${require('../image/food2.png')}`,
    title: "Food",
    btn1: 'Know More',
    btn1Url: '/Food-project',
    btn2: 'Subscribe Now',
    btn2Url: '/Food-project',
  }
]



const slider = [
  {
    image: `${require('../image/realState.png')}`,
  },
  {
    image: `${require('../image/cloth.png')}`,
  }, {
    image: `${require('../image/food2.png')}`,
  },
]


const videoSlider = [
  { videoUrl: "https://youtu.be/dJyWM9mLtY4?si=5EFpi3IGaOyligj_" },
  { videoUrl: "https://youtu.be/pPl3ZZdTP3g?si=TK0rCbSbqv2xAG_V" },
  { videoUrl: "https://youtu.be/8bQbv00BZlI?si=m6DZT9q5P3tO5aah" },
];

const Home = () => {


  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])

  const navigate = useNavigate()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSlider.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoSlider.length - 1 : prevIndex - 1
    );
  };
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
          <h class='lmg fs-1 fw-semibold' >May <span class='fw-bold' style={{ color: 'red' }}>i</span>  Services</h>
        </div>
      </div>

      {/* <div class='col-11 m-auto row align-items-center mt-5 gap-md-0 gap-4'>
        <div class=''>
          <div class='col-11 m-auto text-center'>
            <p class='fw-semibold display-5 ' data-aos="fade-up">Welcome to May i Services</p>
            <p data-aos="fade-up" class='fs-5'>Discover convenience at your fingertips with  <b>May i Services -</b>  your all-in-one solution for realestate, food, and clothing services. Whether you're searching for your dream home, craving a delicious meal, or looking to upgrade your wardrobe, we've got you covered. Our platform connects you with trusted  providers, personalized recommendations, and seamless ordering - all in one easy-to-use app. Save time, simplify your life, and experience the best of home, taste, and style in a single tap.  </p>
            <button class='btn btn-outline-dark rounded-5 mt-3' data-aos="fade-up" onClick={() => navigate('/about-us')} >Know More</button>

          </div>
        </div>

      </div> */}

      {/* <div class='col-11 m-auto row align-items-center mt-5 gap-md-0 gap-4'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <p class='fw-semibold fs-1 ' data-aos="fade-up">Welcome to May i Services</p>
            <p data-aos="fade-up" class='tjustify'>Discover convenience at your fingertips with  <b>May i Services -</b>  your all-in-one solution for realestate, food, and clothing services. Whether you're searching for your dream home, craving a delicious meal, or looking to upgrade your wardrobe, we've got you covered. Our platform connects you with trusted  providers, personalized recommendations, and seamless ordering - all in one easy-to-use app. Save time, simplify your life, and experience the best of home, taste, and style in a single tap.  </p>
            <button class='btn btn-outline-dark rounded-5 mt-3' data-aos="fade-up" onClick={() => navigate('/about-us')} >Know More</button>

          </div>
        </div>
        <div class='col-md-6'>
          <img class='rounded-4' data-aos="fade-in" src={require('../image/about.png')} style={{ width: '100%' }} alt="" />
        </div>
      </div> */}

      {/* <div class='col-sm-11 m-auto row align-items-center justify-content-center mt-5 gap-sm-0 gap-4'>
        {projects?.map?.((el) => {
          return (
            <div class='col-lg-4 col-md-6 col-11'>
              <div class='col-11 m-auto bgdmg rounded-4'>
                <div class='p-3'>
                  <img src={el?.img} style={{ width: '100%' }} class='rounded-4' alt="" />
                </div>
                <div class='text-center lmg col-11 m-auto'>
                  <p class='fs-3 fw-bold'>{el?.title}</p>
                  <div class='d-flex gap-2 justify-content-center align-items-center'>
                    <button class='btn btn-outline-light rounded-5 my-3'>{el?.btn1}</button>
                    <button class='btn btn-outline-light rounded-5 my-3'>{el?.btn2}</button>
                  </div>

                </div>

              </div>

            </div>
          )
        })}
      </div> */}

      {/* <div id="imageCarousel" class="carousel slide mt-5" data-aos="zoom-in-up" data-bs-ride="carousel">

        <div class="carousel-inner">
          {
            slider?.map((el, i) => {
              return (
                <div id='imageGallery' class={i == [0] ? `carousel-item active` : 'carousel-item'}>
                  <img src={el?.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                </div>
              )
            })
          }

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}

      {/* <div id="videoCarousel" className="carousel slide mt-5" data-aos="zoom-in-up" >
        <div className="carousel-inner">
          {
            videoSlider?.map((el, i) => {
              return (
                <div className={i === 0 ? 'carousel-item active' : 'carousel-item'} key={i}>
                   <ReactPlayer
                    width="100%"
                    height="450px"
                    controls="false"
                    url={el?.videoUrl}
                  />
                </div>
              );
            })
          }
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

   

      {/* <div class='col-11 m-auto bgdmg rounded-4 row  mt-5  flex-column-reverse flex-md-row'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <br />
            <p class='lmg fs-1 fw-semibold' data-aos="fade-up">
              Why May <span style={{ color: 'red' }}>i</span> Services
            </p>
            <ul class='lmg fs-5'>
              {whyMayI?.features?.map?.((el, i) => {
                return(
                  <li class='mt-2' data-aos="fade-up"><b>{el?.title}:</b> {el?.description}</li>
                )
              })}
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
      </div> */}
{/* 
      <div class='col-11 m-auto bgdmg rounded-4 row  mt-5  flex-column-reverse flex-md-row'>
        <div class='col-md-6'>
          <div class='col-11 m-auto text-start'>
            <br />
            <p class='lmg fs-1 fw-semibold' data-aos="fade-up">
              Why May <span style={{ color: 'red' }}>i</span> Services
            </p>
            <p class='lmg fs-4' data-aos="fade-up">{whyMayI?.heading}</p>
            <p class='lmg fs-4' data-aos="fade-up">{whyMayI?.subheading}</p>
            <ul class='lmg'>
              {whyMayI?.features?.map?.((el, i) => {
                return (
                  <li class='mt-2 fs-5' data-aos="fade-up"><b>{el?.title}:</b> {el?.description}</li>
                )
              })}
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

      </div> */}



      {/* <div class=" mt-5 overflow-hidden">
        <p class=" fs-1 fw-semibold" data-aos="fade-up">Testimonials</p>

        <div class="marquee">
          <div class="marquee-content">
            {
              testimonials?.map((el, i) => {
                return (
                  <div class="card shadow-lg rounded-4 bglmg  m-2" style={{ width: "300px", flex: "0 0 auto" }} key={i}>
                    <div class="card-body">
                      <p class="testt m-auto fs-5 bgdmg lmg p-1 px-3 rounded-3 text-center" >{el?.name}</p>
                      <p class="dmg ">{el?.role}</p>
                      <p class="dmg mt-2 " style={{ fontSize: '' }}>{el?.message}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div> */}

      {/* <br />
      <SubContact /> */}
    </div>

  )
}

export default Home