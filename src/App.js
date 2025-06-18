import './App.css';
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
import NotFound from './components/NotFound';
import Navbar from './components/navbar/Navbar';
import DaynamicPage from './components/daynamicPages/DaynamicPage';

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path={'/'} element={<DaynamicPage />} />
        <Route path={'/:url/:id'} element={<DaynamicPage />} />


        {/* <Route path='/' element={<Home />} />
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
        <Route path='/contact-us' element={<Contact />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
