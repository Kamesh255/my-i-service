import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubContact from './SubContact'

const OnlineStore = () => {
       useEffect(() => {
              AOS.init({ duration: 2000 });
          }, [])
    return (
        <div>
            <div style={{ height: '100vh', backgroundImage: `url(${require('../image/onlineCloth.png')})`, backgroundPosition: "center", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div class='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)' }}>
                    <p class='display-1 fw-bold text-white'  data-aos="fade-up">Your One-Stop  <span class='text-danger'>Destination </span> for  <br />Trendy and Affordable Fashion</p>
                </div>
            </div>

            <div class='col-11 m-auto mt-3'>
                <p class='fs-5 tjustify' data-aos="fade-up">Welcome to the Online Fashion Store by May I Services, where style meets convenience. We bring you the latest trends in clothing and accessories, designed to cater to every occasion, mood, and personality. Our mission is to make fashion accessible to everyone, ensuring that you can express yourself confidently without breaking the bank.</p>
            </div>

            <div class='mt-4 col-11 m-auto'>
                <p class='fs-1 fw-bold' data-aos="fade-up">What We Offer</p>

                <ul class='text-start'>
                    <li class='fs-3 fw-semibold' data-aos="fade-up">Men’s Collection:  
                        <ul class='fs-5 fw-normal'>
                            <li>Discover a wide range of stylish apparel, from casual tees and jeans to formal suits and blazers. </li>
                            <li>Accessories like watches, belts, and footwear to complete your look. </li>
                            <li>Seasonal collections to keep you trendy all year round. </li>  
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Women’s Collection:  
                        <ul class='fs-5 fw-normal'>
                            <li>A stunning selection of dresses, tops, skirts, and ethnic wear for every occasion. </li>
                            <li>Elegant and functional activewear for the fitness enthusiast. </li>
                            <li>Statement accessories, including handbags, jewelry, and scarves. </li>  
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Kids’ Fashion:  
                        <ul class='fs-5 fw-normal'>
                            <li>Comfortable and trendy clothing for toddlers, kids, and teens. </li>
                            <li>Fun prints, vibrant colors, and durable fabrics perfect for daily wear or special events. </li>
                            <li>Shoes, backpacks, and other essentials for a complete outfit. </li>  
                        </ul>
                    </li>

                    <li class='fs-3 fw-semibold' data-aos="fade-up">Seasonal Trends and Offers:  
                        <ul class='fs-5 fw-normal'>
                            <li>Stay updated with our latest seasonal collections, from summer breezy outfits to cozy winter wear. </li>
                            <li>Enjoy exclusive discounts and deals during festive seasons and special promotions. </li>
                        </ul>
                    </li>

                    

                    
                </ul>

            </div>

            <div class='col-11 m-auto rounded-4 mt-4 bgdmg' style={{ border: "5px solid #082b31" }} data-aos="fade-up">
                <br />
                <div class='col-11 m-auto lmg text-start'>
                    <p class='fs-2 fw-bold' >Shop with Ease </p>
                    <ul class='fs-5 text-start my-2'>
                        <li><b>Seamless Browsing:</b>Use our advanced filters to find the perfect outfit based on size, color, style, and occasion.</li>
                        <li><b>Easy Payments:</b> Multiple payment options, including credit cards, debit cards, wallets, and cash on delivery.</li>
                        <li><b>Hassle-Free Returns: </b> Simplified return and exchange policies to ensure your satisfaction.</li>
 
                    </ul>
                </div>

            </div>

            <div class='col-11 m-auto mt-4 text-start'>
         
                    <p class='fs-2 fw-bold' data-aos="fade-up">Start Your Fashion Journey Today! </p>
                    <p class='fs-5' data-aos="fade-up">Explore the world of fashion with <b>May I Services’ Online Fashion Store</b>. Find the perfect outfit that resonates with your style and makes every moment special. Shop now and redefine your wardrobe with elegance and ease!</p>
            </div>

            <SubContact/>

        </div>
    )
}

export default OnlineStore
