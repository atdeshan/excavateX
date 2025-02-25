import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "../styles/home.css";
import TypingText from "../components/typing";

function Model({ url, rotationY, scale }) {
  const modelRef = useRef();
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      setModel(gltf.scene);
    });
  }, [url]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationY;
    }
  });

  if (!model) {
    return null;
  }

  return <primitive object={model} ref={modelRef} position={[30, -11, 10]} scale={scale} />;
}

function My3DModel() {
  const modelURL = `${process.env.PUBLIC_URL}/images/gg.glb`;

  const [rotationY, setRotationY] = useState(0);
  const [cameraPosition, setCameraPosition] = useState([20, 10, 30]);
  const [modelScale, setModelScale] = useState(1);

  useEffect(() => {
    const updateResponsiveSettings = () => {
      if (window.innerWidth < 768) {
        setCameraPosition([30, 0, 40]); // Closer camera for small screens
        setModelScale(0.5); // Scale down model for mobile
      } else {
        setCameraPosition([60,0,30]); // Default for larger screens
        setModelScale(1);
      }
    };

    updateResponsiveSettings();
    window.addEventListener("resize", updateResponsiveSettings);
    return () => window.removeEventListener("resize", updateResponsiveSettings);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotation = (scrollY / window.innerHeight) * Math.PI * 0.1;
      setRotationY(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize",()=>{
      window.location.reload();
    })
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="title">
        <h1>
          Reliable,<br/> Affordable,<br /> and Ready to <br />Dig!
          <TypingText texts={["!!!"]} speed={500} delay={2500} />
        </h1>
      </div>

      <div className="home_main">
        
        <div className="description">
          <h1>Excavator Hire</h1>
          <p>
            Experience reliable and efficient construction support with our
            Excavator 30, perfect for small-scale works. Whether you need
            digging, trenching, or site preparation, our machine is ideal for
            compact spaces and smaller projects. Available for hire with
            flexible plans to suit your construction needs.
          </p>
        </div>
        <div className="canvas-container">
          <Canvas camera={{ position: cameraPosition }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={0.8} />
            <Suspense fallback={null}>
              <Model url={modelURL} rotationY={rotationY} scale={modelScale} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="services">
        <h1>Services We Offer</h1>
        <div className="service-item">
          <b>Small-Scale Construction Work</b>
          <p>Perfect for tasks like digging, trenching, and grading.</p>
        </div>
        <div className="service-item">
          <b>Site Preparation</b>
          <p>Efficient land leveling and clearing for small projects.</p>
        </div>
        <div className="service-item">
          <b>Trenching</b>
          <p>Ideal for laying pipes, cables, or foundation works.</p>
        </div>
        <div className="service-item">
          <b>Compact-Space Excavation</b>
          <p>Designed for projects in tight or limited spaces.</p>
        </div>
      </div>
    </div>
  );
}

export default My3DModel;
