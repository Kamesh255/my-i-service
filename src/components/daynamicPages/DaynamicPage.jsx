import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './DaynamicPage.css';
import ReactPlayer from 'react-player';
import NotFound from '../NotFound';
import ComingSoon from './ComingSoon';
import Plans from './Plans';
import InstagramEmbed from './InstagramEmbed';
import Form from './Form';
import { Helmet } from 'react-helmet';

const DaynamicPage = () => {
      const { state } = useLocation();
    const { url, id } = useParams();
    const location = useLocation();
    const value = location?.state;
    const [getApiData, setGetApiData] = useState();
    const [homeData, setHomeData] = useState([]); // Initialize as an empty array
    const [imageCart, setImageCart] = useState([]);
    const [backgroundImageCart, setBackgroundImageCart] = useState([]);
    const [imageSlider, setImageSlider] = useState([]);
    const [videoSlider, setVideoSlider] = useState([]);
    const [testimonial, setTestimonial] = useState([]);
    const navigate = useNavigate();

    
  const param1 = state?.param1 || ''; // Fallback if not present
  const param2 = state?.param2 || '';
  const param3 = state?.param3 || '';


    const getData = (id) => {
        axios.post(`https://backend.mayiservicespvtltd.com/api/page.php?slug=getSections&menu_id=${id}`)
            .then((res) => {
                if (res.data.status) {
                    setGetApiData(res?.data?.data);
                } else {
                    setGetApiData([]); // Set to empty array on error
                }
            })
            .catch((err) => {
                setGetApiData([]); // Set to empty array on error
            });
    };

    useEffect(() => {
        getData(id);
    }, [id]);

    useEffect(() => {
        if (getApiData) {
            setHomeData(getApiData);

            // Filter and set the unique sections
            const imageCarts = Array.isArray(getApiData) ? getApiData.filter((item) => item?.section_type === "imageCart") : [];
            const backgroundImageCarts = Array.isArray(getApiData) ? getApiData.filter((item) => item?.section_type === "backgroundImageCart") : [];
            const imageSliders = Array.isArray(getApiData) ? getApiData.filter((item) => item?.section_type === "imageSlider") : [];
            const videoSliders = Array.isArray(getApiData) ? getApiData.filter((item) => item?.section_type === "videoSlider") : [];
            const testimonials = Array.isArray(getApiData) ? getApiData.filter((item) => item?.section_type === "testimonial") : [];

            setImageCart(imageCarts);
            setBackgroundImageCart(backgroundImageCarts);
            setImageSlider(imageSliders);
            setVideoSlider(videoSliders);
            setTestimonial(testimonials);

        }
    }, [getApiData]);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);



    const pageinterFace = () => {
        let arr = [];
        const renderedSectionTypes = new Set(); // To keep track of rendered unique sections

        for (let i = 0; i < homeData?.length; i++) {
            let sectionType = homeData?.[i]?.section_type;
            let pageSection = homeData?.[i];

            // Check if this section type should be rendered only once
            const isUniqueSection = ["imageCart", "backgroundImageCart", "imageSlider", "videoSlider", "testimonial"].includes(sectionType);

            if (isUniqueSection) {
                // If it's a unique section and hasn't been rendered yet, add it
                if (!renderedSectionTypes.has(sectionType)) {
                    // Use the respective state array for these sections
                    if (sectionType === "imageCart" && imageCart.length > 0) {
                        arr.push(
                            <div className='col-md-11  m-auto row justify-content-center' key="imageCartSection">
                                {imageCart.map((el, index) => (
                                    <div className='col-lg-4 col-md-6 mt-4' key={index} data-aos="fade-up">
                                        <div className='col-11 m-auto bgdmg rounded-4 h-100'>
                                            <div className='p-3'>
                                                <img src={el?.image || el?.video_url} style={{ width: '100%', height: '250px', objectFit: 'cover' }} className='rounded-4' alt="" />
                                            </div>
                                            <div className='col-11 m-auto mt-4'>
                                                {el?.title && <p className='display-5 fw-bold lmg ' data-aos="fade-up">{el?.title}</p>}
                                                {el?.subtitle && <p className='fs-5 lmg' data-aos="fade-up">{el?.subtitle}</p>}
                                                {el?.content && <p className='lmg' data-aos="fade-up" dangerouslySetInnerHTML={{ __html: el?.content }}></p>}
                                                {(el?.button_text1 || el?.button_text2) && (
                                                    <div className="d-flex m-auto gap-3 align-items-center justify-content-center" data-aos="fade-up">
                                                        {el?.button_text1 && (
                                                            <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(el?.button_link1, "_blank")}> {el.button_text1} </button>
                                                        )}
                                                        {el?.button_text2 && (
                                                            <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(el?.button_link2, "_blank")}> {el.button_text2} </button>
                                                        )}
                                                    </div>
                                                )}
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    } else if (sectionType === "backgroundImageCart" && backgroundImageCart.length > 0) {
                        arr.push(
                            <div className='col-11 m-auto row justify-content-center' key="backgroundImageCartSection">
                                {backgroundImageCart.map((el, index) => (
                                    <div className='col-md-6 p-3' key={index} data-aos="fade-up">
                                        <div className='rounded-4' style={{ width: '100%', height: "300px", backgroundImage: `url(${el?.image || el?.video_url})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                            <div className='lmg d-flex align-items-center justify-content-center rounded-4' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}>
                                                <div className='col-11 mt-4'>
                                                    {el?.title && <p className='display-5 fw-bold lmg ' data-aos="fade-up">{el?.title}</p>}
                                                    {el?.subtitle && <p className='fs-5 lmg' data-aos="fade-up">{el?.subtitle}</p>}
                                                    {el?.content && <p className='lmg' data-aos="fade-up" dangerouslySetInnerHTML={{ __html: el?.content }}></p>}
                                                    {(el?.button_text1 || el?.button_text2) && (
                                                        <div className="d-flex m-auto gap-3 align-items-center justify-content-center" data-aos="fade-up">
                                                            {el?.button_text1 && (
                                                                <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(el?.button_link1, "_blank")}> {el.button_text1} </button>
                                                            )}
                                                            {el?.button_text2 && (
                                                                <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(el?.button_link2, "_blank")}> {el.button_text2} </button>
                                                            )}
                                                        </div>
                                                    )}
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    } else if (sectionType === "testimonial" && testimonial.length > 0) {
                        arr.push(
                            <div className="marquee mt-4" key="testimonialSection">
                                <div className="marquee-content">
                                    {testimonial.map((el, idx) => (
                                        <div className="card shadow-lg rounded-4 bglmg " style={{ width: "300px", flex: "0 0 auto" }} key={idx}>
                                            <div className="card-body">
                                                <div className='col-11 m-auto mt-4'>
                                                    {el?.title && <p className='fs-4 fw-bold bgdmg lmg px-3 rounded-3 text-center m-auto' style={{ width: "fit-content" }}>{el?.title}</p>}
                                                    {el?.subtitle && <p className='fs-5 dmg'>{el?.subtitle}</p>}
                                                    {el?.content && <p className='lmg' dangerouslySetInnerHTML={{ __html: el?.content }}></p>}
                                                    {(el?.button_text1 || el?.button_text2) && (
                                                        <div className="d-flex m-auto gap-3 align-items-center justify-content-center">
                                                            {el?.button_text1 && (
                                                                <button className="btn btn-outline-dark rounded-5 mt-2" onClick={() => window.open(el?.button_link1, "_blank")}> {el.button_text1} </button>
                                                            )}
                                                            {el?.button_text2 && (
                                                                <button className="btn btn-outline-dark rounded-5 mt-2" onClick={() => window.open(el?.button_link2, "_blank")}> {el.button_text2} </button>
                                                            )}
                                                        </div>
                                                    )}
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    } else if (sectionType === "imageSlider" && imageSlider.length > 0) {
                        arr.push(
                            <div id="imageCarousel" className="carousel slide mt-5" data-aos="zoom-in-up" data-bs-ride="carousel" key="imageSliderSection">
                                <div className="carousel-inner">
                                    {imageSlider.map((el, idx) => (
                                        <div id='imageGallery' className={idx === 0 ? `carousel-item active` : 'carousel-item'} key={idx}>
                                            <img src={el?.image || el?.video_url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon btn btn-warning" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon btn btn-warning" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        );
                    } else if (sectionType === "videoSlider" && videoSlider.length > 0) {
                        arr.push(
                            <div id="videoCarousel" className="carousel slide mt-5" data-aos="zoom-in-up" key="videoSliderSection">
                                <div className="carousel-inner">
                                    {videoSlider.map((el, idx) => (
                                        <div className={idx === 0 ? 'carousel-item active' : 'carousel-item'} key={idx}>
                                            <ReactPlayer
                                                width="100%"
                                                height="450px"
                                                controls={true} // Changed from "false" to true to allow user controls
                                                url={el?.video_url}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon btn btn-warning" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon btn btn-warning" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        );
                    }
                    renderedSectionTypes.add(sectionType); // Mark this unique section type as rendered
                }
            } else {
                // Render other sections normally
                if (sectionType === "topHero") {
                    arr.push(
                        <div style={{ height: '100vh', backgroundImage: `url(${pageSection?.image || pageSection?.video_url})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} key={`topHero-${i}`}>
                            <div className='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', zIndex: '1' }}>
                                <div data-aos="zoom-in">
                                    {pageSection?.title && <p className='display-1 fw-bold text-white'>{pageSection?.title}</p>}
                                    {pageSection?.subtitle && <p className='text-white'>{pageSection?.subtitle}</p>}
                                    {pageSection?.content && <p className='text-white' style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: pageSection?.content }}></p>}
                                    {(pageSection?.button_text1 || pageSection?.button_text2) && (
                                        <div className="d-flex m-auto gap-3 align-items-center justify-content-center">
                                            {pageSection?.button_text1 && (
                                                <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link1, "_blank")}> {pageSection.button_text1} </button>
                                            )}
                                            {pageSection?.button_text2 && (
                                                <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link2, "_blank")}> {pageSection.button_text2} </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                } else if (sectionType === "paragraphDescription") {
                    arr.push(
                        <div className='col-11 m-auto mt-4' key={`paragraphDescription-${i}`}>
                            {pageSection?.title && <p className='display-5 fw-bold dmg ' data-aos="fade-up">{pageSection?.title}</p>}
                            {pageSection?.subtitle && <p className='fs-5 dmg' data-aos="fade-up">{pageSection?.subtitle}</p>}
                            {pageSection?.content && <p className='dmg' data-aos="fade-up" dangerouslySetInnerHTML={{ __html: pageSection?.content }}></p>}
                            {(pageSection?.button_text1 || pageSection?.button_text2) && (
                                <div className="d-flex m-auto gap-3 align-items-center justify-content-center" data-aos="fade-up">
                                    {pageSection?.button_text1 && (
                                        <button className="btn btn-outline-dark rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link1, "_blank")}> {pageSection.button_text1} </button>
                                    )}
                                    {pageSection?.button_text2 && (
                                        <button className="btn btn-outline-dark rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link2, "_blank")}> {pageSection.button_text2} </button>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                } else if (sectionType === "subscriptionCart") {
                    arr.push(
                        <Plans />
                    )
                }
                else if (sectionType === "whyUse") {
                    arr.push(
                        <div className='col-11 m-auto bgdmg rounded-4 row mt-4 flex-column-reverse flex-md-row' key={`whyUse-${i}`}>
                            <div className='col-md-6'>
                                <div class='d-flex align-items-center justify-content-center h-100'>
                                    <div class='m-2 text-start '>
                                    {pageSection?.title && <p className='display-5 fw-bold lmg ' data-aos="fade-up">{pageSection?.title}</p>}
                                    {pageSection?.subtitle && <p className='fs-5 lmg' data-aos="fade-up">{pageSection?.subtitle}</p>}
                                    {pageSection?.content && <p className='lmg' data-aos="fade-up" style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: pageSection?.content }}></p>}
                                    {(pageSection?.button_text1 || pageSection?.button_text2) && (
                                        <div className="d-flex gap-3 align-items-center " data-aos="fade-up">
                                            {pageSection?.button_text1 && (
                                                <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link1, "_blank")}> {pageSection.button_text1} </button>
                                            )}
                                            {pageSection?.button_text2 && (
                                                <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link2, "_blank")}> {pageSection.button_text2} </button>
                                            )}
                                        </div>
                                    )}
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 p-0'>
                                <div className='p-sm-5 p-3'>
                                    <img className='rounded-4' data-aos="fade-in" src={pageSection?.image || pageSection?.video_url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                                </div>
                            </div>
                        </div>
                    );
                } else if (sectionType === "buleCartInfo") {
                    arr.push(
                        <div className='col-11 m-auto bgdmg rounded-4 mt-4' data-aos="fade-up" key={`buleCartInfo-${i}`}>
                            <div className='col-11 m-auto lmg '>
                                <br />
                                {pageSection?.title && <p className='display-5 fw-bold '>{pageSection?.title}</p>}
                                {pageSection?.subtitle && <p className='fs-5 '>{pageSection?.subtitle}</p>}
                                {pageSection?.content && <p style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: pageSection?.content }}></p>}
                                {(pageSection?.button_text1 || pageSection?.button_text2) && (
                                    <div className="d-flex m-auto gap-3 align-items-center justify-content-center">
                                        {pageSection?.button_text1 && (
                                            <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link1, "_blank")}> {pageSection.button_text1} </button>
                                        )}
                                        {pageSection?.button_text2 && (
                                            <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link2, "_blank")}> {pageSection.button_text2} </button>
                                        )}
                                    </div>
                                )}
                                <br />
                            </div>
                        </div>
                    );
                } else if (sectionType === "greenCartInfo") {
                    arr.push(
                        <div className='col-11 m-auto rounded-4 mt-4' data-aos="fade-up" style={{ background: "#1A3E1A" }} key={`greenCartInfo-${i}`}>
                            <div className='col-11 m-auto lmg '>
                                <br />
                                {pageSection?.title && <p className='display-5 fw-bold '>{pageSection?.title}</p>}
                                {pageSection?.subtitle && <p className='fs-5 '>{pageSection?.subtitle}</p>}
                                {pageSection?.content && <p   style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: pageSection?.content }}></p>}
                                {(pageSection?.button_text1 || pageSection?.button_text2) && (
                                    <div className="d-flex m-auto gap-3 align-items-center justify-content-center">
                                        {pageSection?.button_text1 && (
                                            <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link1, "_blank")}> {pageSection.button_text1} </button>
                                        )}
                                        {pageSection?.button_text2 && (
                                            <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link2, "_blank")}> {pageSection.button_text2} </button>
                                        )}
                                    </div>
                                )}
                                <br />
                            </div>
                        </div>
                    );
                } else if (sectionType === "mahroonCartInfo") {
                    arr.push(
                        <div className='col-11 m-auto rounded-4 mt-4' data-aos="zoom-in-up" style={{ background: "#430606" }} key={`mahroonCartInfo-${i}`}>
                            <div className='col-11 m-auto lmg '>
                                <br />
                                {pageSection?.title && <p className='display-5 fw-bold '>{pageSection?.title}</p>}
                                {pageSection?.subtitle && <p className='fs-5'>{pageSection?.subtitle}</p>}
                                {pageSection?.content && <p   style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: pageSection?.content }}></p>}
                                {(pageSection?.button_text1 || pageSection?.button_text2) && (
                                    <div className="d-flex m-auto gap-3 align-items-center justify-content-center">
                                        {pageSection?.button_text1 && (
                                            <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link1, "_blank")}> {pageSection.button_text1} </button>
                                        )}
                                        {pageSection?.button_text2 && (
                                            <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link2, "_blank")}> {pageSection.button_text2} </button>
                                        )}
                                    </div>
                                )}
                                <br />
                            </div>
                        </div>
                    );
                } else if (sectionType === "borderCartInfo") {
                    arr.push(
                        <div className='col-11 m-auto rounded-4 mt-4 ' style={{ border: "5px solid #082b31" }} data-aos="fade-up" key={`borderCartInfo-${i}`}>
                            <br />
                            <div className='col-11 m-auto '>
                                {pageSection?.title && <p className='display-5 fw-bold text-center '>{pageSection?.title}</p>}
                                {pageSection?.subtitle && <p className='fs-5'>{pageSection?.subtitle}</p>}
                                {pageSection?.content && <p className='dmg' dangerouslySetInnerHTML={{ __html: pageSection?.content }}></p>}
                                {(pageSection?.button_text1 || pageSection?.button_text2) && (
                                    <div className="d-flex mt-0 gap-3">
                                        {pageSection?.button_text1 && (
                                            <button className="btn btn-outline-dark rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link1, "_blank")}> {pageSection.button_text1} </button>
                                        )}
                                        {pageSection?.button_text2 && (
                                            <button className="btn btn-outline-dark rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link2, "_blank")}> {pageSection.button_text2} </button>
                                        )}
                                    </div>
                                )}
                                <br />
                            </div>
                        </div>
                    );
                } else if (sectionType === "contactUs") {
                    arr.push(
                        <div data-aos="zoom-up-in" className='col-11 m-auto row justify-content-center align-items-center flex-column-reverse flex-md-row rounded-4 my-5 bgdmg lmg' style={{ border: '3px solid #082b31' }} key={`contactUs-${i}`}>
                            <div className='col-md-6'>
                                <div className='col-11 m-auto text-start lmg' style={{ height: '350px', overflowY: 'auto' }}>
                                    <br />
                                    {pageSection?.title && <p className='display-5 fw-bold '>{pageSection?.title}</p>}
                                    {pageSection?.subtitle && <p className='fs-5'>{pageSection?.subtitle}</p>}
                                    {pageSection?.content && <p className='' style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: pageSection?.content }}></p>}
                                    {(pageSection?.button_text1 || pageSection?.button_text2) && (
                                        <div className="d-flex gap-3 align-items-center ">
                                            {pageSection?.button_text1 && (
                                                <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link1, "_blank")}> {pageSection.button_text1} </button>
                                            )}
                                            {pageSection?.button_text2 && (
                                                <button className="btn btn-outline-light rounded-5 mt-2" onClick={() => window.open(pageSection?.button_link2, "_blank")}> {pageSection.button_text2} </button>
                                            )}
                                        </div>
                                    )}
                                    <br />
                                </div>
                            </div>
                            <div className='col-md-6 p-0 m-0'>
                                <iframe src={pageSection?.image || pageSection?.video_url} className='rounded-4' style={{ border: '0', width: '100%', height: '350px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    );
                }
            }
        }
        return arr;
    };

    return (
        <div style={{ minHeight: '100vh' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{param1 ? `${param1} - May I Services` : 'May I Services'}</title>
                <meta
                    name="description"
                    content={
                        param2
                            ? `'May I Services' offers specialized services related to ${param2}.`
                            : `'May I Services' provides guidance and services in three key areas: real estate, economical clothing, and healthy food.`
                    }
                />
                <meta
                    name="keywords"
                    content={
                        param3
                            ? `${param3}, services`
                            : 'real estate, economical clothing, healthy food, Services'
                    }
                />
            </Helmet>
            {homeData && homeData.length > 0 ?
                <>
                    {url == "home" &&
                        <div class='bgdmg d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
                            <div>
                                <br />
                                <br /><br />
                                <div class='col-sm-4 col-7 m-auto position-relative'>
                                    <img style={{ position: 'absolute', top: '0', left: '0', width: '100%' }} data-aos="fade-down" src={require('../../image/may.png')} alt="" />
                                    <img style={{ width: '100%' }} src={require('../../image/i.png')} data-aos="zoom-in" alt="" />
                                    <img style={{ position: 'absolute', top: '0', left: '0', width: '100%' }} data-aos="fade-up" src={require('../../image/services.png')} alt="" />

                                </div>
                                {/* <MisSvg  /> */}
                                <h class='lmg fs-1 fw-semibold' >May <span class='fw-bold' style={{ color: 'red' }}>i</span>  Services</h>
                            </div>
                        </div>}
                    {pageinterFace()}
                    <div className="col-md-11 m-auto row gap-md-0 gap-4 align-items-start mt-5">
                        <div className="col-md-6 d-flex justify-content-center">
                            <div style={{ width: '100%', maxWidth: '340px', height: '400px', overflow: 'hidden' }}>
                                <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmayiservices.in%2F&tabs=timeline%2C%20events%2C%20messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    title="Facebook Page Plugin"
                                />
                            </div>
                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                            <div style={{ width: '100%', maxWidth: '340px', height: '400px', overflow: 'hidden' }}>
                                <InstagramEmbed />
                            </div>
                        </div>
                    </div>
                    <Form />

                </>
                :
                <>  <ComingSoon /></>
            }

            <br />
        </div>
    );
};

export default DaynamicPage;