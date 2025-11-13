import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackImgs, techStackIcons } from "../constants";
import { useEffect, useState } from "react";

const TechStack = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useGSAP(() => {
    if (prefersReducedMotion) {
      gsap.set(".flow", { y: 0 });
      return;
    }

    gsap.fromTo(
      ".flow",
      {
        y: -20,
      },
      {
        y: 20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, [prefersReducedMotion]);

  useEffect(() => {
    const updateControls = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateControls();
    window.addEventListener("resize", updateControls);
    return () => window.removeEventListener("resize", updateControls);
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handlePreference = (event) => setPrefersReducedMotion(event.matches);

    setPrefersReducedMotion(motionQuery.matches);
    motionQuery.addEventListener("change", handlePreference);

    return () => motionQuery.removeEventListener("change", handlePreference);
  }, []);

  return (
    <section
      id="skills"
      className="flex-center section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
          headingId="skills-heading"
        />
        <div className="tech-grid">
          {isMobile
            ? techStackImgs.map((techStackIcon, index) => (
                <div
                  key={index}
                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                >
                  <div className="" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <img
                        src={techStackIcon.imgPath}
                        alt={`${techStackIcon.name} technology icon`}
                        className="w-32 flow"
                        loading="lazy"
                      />
                    </div>
                    <div className="padding-x w-full">
                      <p>{techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ))
            : techStackIcons.map((techStackIcon) => (
                <div
                  key={techStackIcon.name}
                  className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                >
                  <div className="" />
                  <div className="tech-card-content">
                    <div className="tech-icon-wrapper">
                      <TechIconCardExperience model={techStackIcon} />
                    </div>
                    <div className="padding-x w-full">
                      <p>{techStackIcon.name}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
