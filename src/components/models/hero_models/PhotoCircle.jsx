import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const PhotoCircle = ({ backImageUrl = "/me.jpeg" }) => {
  const backTexture = useLoader(TextureLoader, backImageUrl);
  const backRef = useRef();

  const [radius, setRadius] = useState(1.2);
  const [segments, setSegments] = useState(64);
  const [rotationSpeed, setRotationSpeed] = useState(1);

  useEffect(() => {
    const updateSettings = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setRadius(1);
        setSegments(32);
        setRotationSpeed(0.8);
      } else {
        setRadius(1.2);
        setSegments(64);
        setRotationSpeed(1);
      }
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  useFrame((_, delta) => {
    backRef.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <mesh ref={backRef} rotation={[0, Math.PI, 0]} position={[0, 0, -0.001]}>
      <circleGeometry args={[radius, segments]} />
      <meshStandardMaterial map={backTexture} side={2} />
    </mesh>
  );
};

export default PhotoCircle;
