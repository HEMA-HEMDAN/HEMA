import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words, heroContent } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import PhotoCircle from "../components/models/hero_models/PhotoCircle.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Particles from "../components/models/hero_models/Particles.jsx";

const Hero = () => {
  const [enableControls, setEnableControls] = useState(true);

  // GSAP Animation
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  // Check screen size
  useEffect(() => {
    const updateControls = () => {
      setEnableControls(window.innerWidth >= 640); // disable OrbitControls on small screens
    };

    updateControls();
    window.addEventListener("resize", updateControls);
    return () => window.removeEventListener("resize", updateControls);
  }, [enableControls]);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background pattern" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={`${word.text} icon`}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              {heroContent.description}
            </p>

            <div className="flex  gap-4 mt-6 justify-center md:justify-start flex-row md:flex-col">
              <Button
                text={heroContent.buttonText}
                className="md:w-60 w-48 h-12"
                id="counter"
              />

              <a
                href="/my.pdf"
                download="my.pdf"
                className="md:w-60 w-48 h-13 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2 group transition-all duration-300 backdrop-blur-sm"
              >
                <span className="text-sm md:text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                  Download Resume
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout flex-center mt-10 md:mt-0">
            {enableControls ? (
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 1.5]}
                shadows={false}
              >
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 2, 2]} />
                <OrbitControls enableZoom={false} />
                <Particles count={500} />
                <PhotoCircle />
              </Canvas>
            ) : (
              <img
                src="/me.jpeg"
                alt="me"
                className="w-[50vw] lg:w-[20vw] md:w-[30vw] rounded-full md:mt-0 mt-35 shadow-lg ring-30 ring-[#1a001f] shadow-[0_0_20px_8px_rgba(80,0,110,0.7)] "
              />
            )}
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
