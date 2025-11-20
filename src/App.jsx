import React, { useEffect, useState } from "react";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  const [loading, setLoading] = useState(true); // for loading screen
  const [visible, setVisible] = useState(true); // for fade effect
  // const [started, setStarted] = useState(false);  // for start screen

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setVisible(false), 1000); // fade out
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Phase 1: Loading screen
  // if(loading || visible){
  //   return(
  //       <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-700">
  //       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" />
  //     </div>
  //   );
  // }
  // if (!started) {

  //     const handleStart = () => {
  //   const sound = new Audio("/audios/audio2.mp3");
  //       setStarted(true);
  //   setTimeout(()=>{
  //         sound.play()

  //     .catch((err) => {
  //       console.warn("Sound blocked, continuing anyway",err);
  //     });
  //   },3500)

  // };

  // return (
  //   <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white text-xl">
  //     <button
  //       onClick={handleStart}
  //       className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold text-2xl transition"
  //     >
  //       Click to Start
  //     </button>
  //     <p className="mt-4 text-sm opacity-50">Sound will play after clicking</p>
  //   </div>
  // );
  // }

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-700 z-50${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${visible ? "" : "hidden"}`}
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50" />
      </div>

      {/* Main App */}
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        {/* <ShowcaseSection /> */}
        <LogoShowcase />
        <FeatureCards />
        {/* <Experience /> */}
        <TechStack />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
