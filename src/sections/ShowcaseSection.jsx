import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    projectRefs.current.forEach((card, index) => {
      if (!card) return;
      
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
          delay: 0.2 * index, // Stagger effect
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Trigger when top of card hits 85% viewport height
            toggleActions: "play none none reverse"
          },
        }
      );
    });
  }, [projects]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-20 px-5 max-w-7xl mx-auto"
      aria-label="Featured client projects"
    >
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-400 text-lg">A selection of my recent work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="group relative bg-[#1c1c2e] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/5 hover:-translate-y-2"
          >
            {/* Image Container */}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-52 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img
                src={project.texture}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Overlay with potential 3D hint or simple shine */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c2e] to-transparent opacity-60" />
            </a>

            {/* Content Container */}
            <div className="p-6 relative z-20">
              <div className="flex justify-between items-start mb-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <h3 className="text-xl font-bold leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                </a>
                
               
              </div>

              <p className="text-gray-400 text-sm mb-6 line-clamp-3 min-h-[60px]">
                {project.desc}
              </p>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;
