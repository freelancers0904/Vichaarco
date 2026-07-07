import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CustomCursor from '@/components/CustomCursor';
import SplashScreen from '@/components/SplashScreen';

const Stats = lazy(() => import('@/components/Stats'));
const About = lazy(() => import('@/components/About'));
const Solutions = lazy(() => import('@/components/Solutions'));
const WhyUs = lazy(() => import('@/components/WhyUs'));
const Portfolio = lazy(() => import('@/components/Portfolio'));
const Process = lazy(() => import('@/components/Process'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));
const WhatsAppFAB = lazy(() => import('@/components/WhatsAppFAB'));
const ScrollToTop = lazy(() => import('@/components/ScrollToTop'));
const ScrollProgress = lazy(() => import('@/components/ScrollProgress'));

const Index = () => {
  return (
    <>
      <SplashScreen />
      <CustomCursor />
      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Stats />
        <About />
        <Solutions />
        <WhyUs />
        <Portfolio />
        <Process />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppFAB />
        <ScrollToTop />
      </Suspense>
    </>
  );
};

export default Index;
