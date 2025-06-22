import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';
import NotFound from './components/NotFound';
import Navbar from './components/navbar/Navbar';
import DaynamicPage from './components/daynamicPages/DaynamicPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Plans from './components/daynamicPages/Plans';
import Home from './components/Home';

function App() {

    const [homePage, setHomePage] = useState(null);

  useEffect(() => {
    axios.get('https://backend.mayiservicespvtltd.com/api/menu.php?slug=getAllMenuList') // replace with actual API
      .then((res) => {
        const data = res.data.data;
        const home = data.find(item => item.name.toLowerCase() === 'home' || item.url === 'home');
        if (home) setHomePage(home);
      });
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {homePage && (
          <Route path="/" element={<Navigate to={`/${homePage.url}/${homePage.id}`} replace />} />
        )}
        <Route path={'/:url/:id'} element={<DaynamicPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/plans' element={<Plans />} />


      </Routes>
      <Footer />

    </div>
  );
}

export default App;
