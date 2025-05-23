import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/pages/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Scheduling from './components/Scheduling';
import BlogPage from "./components/pages/BlogPage";
import AboutPage from "./components/pages/AboutPage";
import TeamPage from './components/pages/TeamPage';


import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#F0F0F2]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0066B3] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-[#0066B3]">SocialMídia</h2>
          <p className="text-gray-600">Carregando experiência...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <FeaturedProjects />
                <Testimonials />
                <CallToAction />
              </>
            } />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        <Scheduling />
      </div>
    </Router>
  );
}

export default App;
