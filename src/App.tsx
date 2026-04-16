import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import { Popup } from './components/Popup';
import { BannerPopup } from './components/Bannerpopup';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DietPlan from './pages/DietPlan';
import { useEffect, useState } from 'react';
import OnlineClasses from './pages/OnlineClasses';
import ContactForm from './components/ContactForm';
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/diet-plan" element={<DietPlan />} />
            <Route path="/online-classes" element={<OnlineClasses />} /> 
            <Route path="/contact" element={<ContactForm />} />                       
          </Routes>
        </main>
        <Footer />
        <FloatingButton />
        <BannerPopup />
        <Popup />
      </div>
    </Router>
  );
}
