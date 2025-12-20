import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutPreview from './components/AboutPreview';
import Schedule from './components/Schedule';
import Instructors from './components/Instructors';
import DJs from './components/DJs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import UpcomingEvents from './components/UpcomingEvents';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import ClassDetailPage from './pages/ClassDetailPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import PastEventsPage from './pages/PastEventsPage';
import CodeOfConductPage from './pages/CodeOfConductPage';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [classSlug, setClassSlug] = useState<string>('');
  const [eventSlug, setEventSlug] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about-page') {
        setCurrentPage('about');
        setClassSlug('');
        setEventSlug('');
      } else if (hash === 'classes-page') {
        setCurrentPage('classes');
        setClassSlug('');
        setEventSlug('');
      } else if (hash.startsWith('class-')) {
        setCurrentPage('class-detail');
        setClassSlug(hash.replace('class-', ''));
        setEventSlug('');
      } else if (hash === 'events-page') {
        setCurrentPage('events');
        setClassSlug('');
        setEventSlug('');
      } else if (hash === 'past-events-page') {
        setCurrentPage('past-events');
        setClassSlug('');
        setEventSlug('');
      } else if (hash.startsWith('event-')) {
        setCurrentPage('event-detail');
        setClassSlug('');
        setEventSlug(hash.replace('event-', ''));
      } else if (hash === 'code-of-conduct') {
        setCurrentPage('code-of-conduct');
        setClassSlug('');
        setEventSlug('');
      } else {
        setCurrentPage('home');
        setClassSlug('');
        setEventSlug('');
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render About Page
  if (currentPage === 'about') {
    return <AboutPage />;
  }

  // Render Classes Page
  if (currentPage === 'classes') {
    return <ClassesPage />;
  }

  // Render Class Detail Page
  if (currentPage === 'class-detail') {
    return <ClassDetailPage classSlug={classSlug} />;
  }

  // Render Events Page
  if (currentPage === 'events') {
    return <EventsPage />;
  }

  // Render Past Events Page
  if (currentPage === 'past-events') {
    return <PastEventsPage />;
  }

  // Render Event Detail Page
  if (currentPage === 'event-detail') {
    return <EventDetailPage eventSlug={eventSlug} />;
  }

  // Render Code of Conduct Page
  if (currentPage === 'code-of-conduct') {
    return <CodeOfConductPage />;
  }

  // Render Home Page
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-logo-purple-2 selection:text-white">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <AboutPreview />
        </div>
        
        <div id="classes">
          <Schedule />
        </div>
        
        <div id="events">
          <UpcomingEvents />
        </div>
        
        <div id="instructors">
          <Instructors />
        </div>
        
        <div id="djs">
          <DJs />
        </div>
        
        <div id="gallery">
          <Gallery />
        </div>
        
        <CTA />
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-white text-black rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-logo-purple-2 hover:text-white ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;