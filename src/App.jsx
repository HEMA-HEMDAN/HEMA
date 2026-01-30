import { Suspense, lazy } from "react";
import Hero from "./sections/Hero.jsx";
import Navbar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import TechStack from "./sections/TechStack.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import AppShowcase from "./sections/ShowcaseSection.jsx";
import WhatsAppButton from "./components/WhatsAppButton";

// New Components
import SmoothScroll from "./components/SmoothScroll.jsx";
import Cursor from "./components/Cursor.jsx";
import Preloader from "./components/Preloader.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <SmoothScroll>
      <Preloader />
      <Cursor />
      <ScrollToTop />
      
      <main id="main-content" role="main">
        <Navbar />
        <Hero />
        <AppShowcase />
        <FeatureCards />
        <TechStack />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </SmoothScroll>
  );
};

export default App;

