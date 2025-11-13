import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
    ].filter(Boolean);

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100px",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="app-showcase"
      aria-label="Featured client projects"
    >
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a
                href="https://masr.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/projects/masr.png"
                  alt="Athar Masr project screenshot"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="text-content">
              <h2>Athar Masr - Egyptian Heritage App</h2>
              <p className="text-white-50 md:text-xl">
                React Native, Expo, and TailwindCSS power an accessible heritage
                guide with multilingual stories, offline support, and smooth
                performance on mid-range devices.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <a
                href="https://overdosemath.com"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper "
              >
                <img
                  src="/images/projects/mo.png"
                  alt="Overdose Math web app screenshot"
                  loading="lazy"
                />
              </a>
              <h2>Overdose Math - React Learning Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <a
                href="https://dr-ahmed-gad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper"
              >
                <img
                  src="/images/projects/ahmed.png"
                  alt="Dr Ahmed Gad website screenshot"
                  loading="lazy"
                />
              </a>

              <h2>Dr Ahmed Gad - Medical Clinic Website</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
