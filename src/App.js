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

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/real-estate' element={<RealState/>}/>
    <Route path='/clothing' element={<Clothing/>}/>
    <Route path='/food' element={<Food/>}/>




   </Routes>
   <Footer/>
   
    </div>
  );
}

export default App;
