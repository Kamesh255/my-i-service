import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './DaynamicPage.css';

const Plans = () => {
    const [plansData, setPlansData] = useState([])


    const getPlanData = () => {
        axios.get("https://backend.mayiservicespvtltd.com/api/plans.php?slug=getPlans")
            .then((res) => {
                if (res.data.status) {
                    setPlansData(res.data.data)
                } else {
                    setPlansData([])
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getPlanData()
    }, [])
    console.log(plansData);
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);


    const navigate = useNavigate()
    return (
        <div>
            {
                plansData &&
                <div className='col-11 m-auto row' >
                    {plansData.map((el, index) => (
                        <div className='col-lg-4 col-md-6 mt-4' key={index} data-aos="fade-up">
                            <div className='col-11 m-auto bgdmg rounded-4'>
                                <div className='p-3'>
                                    <img src={el?.image || el?.video_url} style={{ width: '100%' }} className='rounded-4' alt="" />
                                </div>
                                <div className='col-11 m-auto mt-4'>
                                    {el?.title && <p className='fs-2 fw-bold lmg ' >{el?.title}</p>}
                                    {el?.content && <p className='lmg'  dangerouslySetInnerHTML={{ __html: el?.content }}></p>}
                                    {el?.amount && <p className='fs-5 lmg fw-bold' >{el?.amount} ₹</p>}
                                    {el?.button_text  && (
                                        <div className="d-flex m-auto gap-3 align-items-center justify-content-center" >
                                            {el?.button_text && (
                                                <button className="btn btn-outline-light rounded-5 mt-2" > {el.button_text} </button>
                                            )}
                                        </div>
                                    )}
                                    <br />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
            <br />
        </div>
    )
}

export default Plans