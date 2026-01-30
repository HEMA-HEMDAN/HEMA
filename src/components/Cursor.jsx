import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    const handleHover = () => {
      gsap.to(cursor, { scale: 0.5 });
      gsap.to(follower, { scale: 3, backgroundColor: "rgba(255, 255, 255, 0.1)" });
    };

    const handleLeave = () => {
      gsap.to(cursor, { scale: 1 });
      gsap.to(follower, { scale: 1, backgroundColor: "transparent" });
    };

    window.addEventListener("mousemove", moveCursor);

    // Add hover effects to all links and buttons
    const links = document.querySelectorAll("a, button, .cursor-pointer");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleHover);
        link.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // Hide on touch devices
  if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-blue-400 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
      />
    </>
  );
};

export default Cursor;
