import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import WhoThisIsFor from '@/components/WhoThisIsFor';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import WhyUs from '@/components/WhyUs';
// import AIFeatures from '@/components/AIFeatures';
import Portfolio from '@/components/Portfolio';
// import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
// import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  return (
    <>
      <SplashScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      {/* <WhoThisIsFor /> */}
      <Stats />
      <About />
      <Solutions />
      <WhyUs />
      {/* <AIFeatures /> */}
      <Portfolio />
      {/* <Pricing /> */}
      <Process />
      <FAQ />
      {/* <FinalCTA /> */}
      <Contact />
      <Footer />
      <WhatsAppFAB />
      <ScrollToTop />
    </>
  );
};

export default Index;
