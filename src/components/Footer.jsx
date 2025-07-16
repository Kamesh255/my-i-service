import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Footer = () => {

    const [footerData, setFooterData] = React.useState([])




    const getFooterData = () => {
        axios.get("https://backend.mayiservicespvtltd.com/api/footer.php?action=fetch")
            .then((res) => {
                if (res.data.status == "true" || "success") {
                    setFooterData(res.data.data)
                }

            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getFooterData()
    }, [])

    const navigate = useNavigate()

    const moveInternalPage = (url, id, param1, param2) => {
        if (url !== "#" && url !== 'null') {
            navigate(`${url}/${id}`, {
                state: { param1, param2 }
            });
        }
    };
    return (
        <div class='bgdmg'>
            <div class='col-11 m-auto row'>
                <div class='col-lg-3 col-md-6'>
                    <br />
                    <div class='col-11  text-start '>
                        <img src={footerData?.footerlogo} style={{ width: '100px' }} alt="" />
                        <div class='d-flex align-items-center gap-4 lmg mt-4 fs-2'>
                            {footerData?.socialmedia?.map((item, index) => {
                                return (
                                    <a href={item?.url} target='_blanck' key={index}>
                                        <i class={`bi-${item?.name?.toLowerCase()}`}></i>
                                    </a>
                                )
                            })}
                            <br />

                        </div>
                    </div>
                </div>
                {/* <div class='col-lg-5 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg row'>
                        <p class='fs-4 col-12'><b>Menu</b></p>
                        <p class='mt-1 col-6' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</p>
                        <p class='mt-1 col-6' style={{ cursor: 'pointer' }} onClick={() => navigate('/about-us')}>About</p>
                        <p class='mt-1 col-6' style={{ cursor: 'pointer' }} onClick={() => navigate('/services')}>Services</p>
                        <p class='mt-1 col-6' style={{ cursor: 'pointer' }} onClick={() => navigate('/projects')}>Projects</p>
                        <p class='mt-1 col-6' style={{ cursor: 'pointer' }} onClick={() => navigate('/contact-us')}>Contact Us</p>
                        <p class='mt-1 col-6' style={{ cursor: 'pointer' }} onClick={() => navigate('/real-estate')}>Real Estate </p>
                        <p class='mt-1 col-6' style={{ cursor: 'pointer' }} onClick={() => navigate('/clothing')}>Clothing</p>
                        <p class='mt-1 col-6' style={{ cursor: 'pointer' }} onClick={() => navigate('/food')}>Food</p>
                        <p class='mt-1 ' style={{ cursor: 'pointer' }} onClick={() => navigate('/builder-services')}>Builder Services</p>
                        <p class='mt-1 ' style={{ cursor: 'pointer' }} onClick={() => navigate('/architectural-services')}>Architectural Services</p>
                        <p class='mt-1 ' style={{ cursor: 'pointer' }} onClick={() => navigate('/online-store-services')}>Online Store Services</p>
                        <p class='mt-1 ' style={{ cursor: 'pointer' }} onClick={() => navigate('/healthy-food-services')}>Food Healthy and hygienic</p>
                    </div>
                </div> */}
                <div class='col-lg-3 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg row'>
                        <p class='fs-4 col-12'><b>Menu</b></p>
                        {
                            footerData?.menus?.map((item, index) => {
                                return (
                                    <p class='mt-1' style={{ cursor: 'pointer' }} onClick={() => moveInternalPage(item.url, item.id, item.meta_title, item.meta_description)}>{item?.name}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div class='col-lg-3 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg row'>
                        <p class='fs-4 col-12'><b>{footerData?.ourproducts?.title}</b></p>
                        {
                            footerData?.ourproducts?.items?.map((item, index) => {
                                return (
                                    <p class='mt-1' style={{ cursor: 'pointer' }} onClick={() => window.open(item.url,"_blank")}>{item?.name}</p>
                                )
                            })
                        }
                    </div>
                </div>

                <div class='col-lg-3 col-sm-6'>
                    <br />
                    <div class='col-11 m-auto text-start lmg'>
                        <p class='fs-4'><b>{footerData?.getintouch?.title} </b></p>
                        <div>
                            {footerData?.getintouch?.items?.map((item, index) => {
                                return (
                                    <div class='d-flex  gap-2 mt-2' key={index}>
                                        <p class='text-nowrap' ><b>{item?.name} </b></p>
                                        <p class=''>{item?.value}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
            <br />
        </div>
    )
}

export default Footer