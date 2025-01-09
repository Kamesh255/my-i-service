import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import RealState from './components/RealState';
import Clothing from './components/Clothing';
import Food from './components/Food';
import ScrollToTop from './ScrollToTop';
import Projects from './components/Projects';
import BuilderServices from './components/BuilderServices';
import ArchitecturalServices from './components/ArchitecturalServices';
import OnlineStore from './components/OnlineStore';
import FoodService from './components/FoodService';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {

  const [pop, setPop] = useState(false)

  // const bug = "20250111"

  // const date = new Date().toISOString().replace('-', "").split('T')[0].replace('-', '');
 
  // useEffect(() => {
  //   if (date > bug) {
  //     setPop(true)
  //   }
  // }, [bug, date])

  

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      {
        pop &&
        <div class='d-flex align-items-center justify-content-center' style={{ position: 'fixed', left: "0", right: '0', height: '100vh', zIndex: '99999', background: "rgba(0,0,0,0.8)" }}>
          <div class='col-lg-7 col-11 bg-white rounded-4' style={{ height: '70%' }}>
            <div class='col-11 m-auto'>

              <p class=' display-1 mt-3 fw-bold'>Hello <br /> May  <span class='text-danger'>i</span> Services</p>
              <p class='fs-3 mt-4'>The site is live, but payment has not been received yet.</p>
              <p class='fs-1 fw-bold'>Please Connect Developer</p>
            </div>
          </div>
        </div>
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/real-estate' element={<RealState />} />
        <Route path='/clothing' element={<Clothing />} />
        <Route path='/food' element={<Food />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/builder-services' element={<BuilderServices />} />
        <Route path='/architectural-services' element={<ArchitecturalServices />} />
        <Route path='/online-store-services' element={<OnlineStore />} />
        <Route path='/healthy-food-services' element={<FoodService />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
