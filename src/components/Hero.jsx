import React from "react";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import LaptopCopy from "./LaptopCopy.jsx";

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="flex flex-col md:flex-row md:space-x-4 md:px-5 px-4 pt-20 md:pt-16 md:mt-10 md:mx-14">
        <div className="left flex-1 text-center">
          <h1 className="text-2xl md:text-4xl text-lime-100 font-bold p-2 pb-3">
            Abhishek Vijay Kank
          </h1>
          <hr />
          <h3 className="text-sm md:text-xl font-semibold p-2 pt-3">
            <ul className="md:ps-10">
              <li className="text-blue-200 text-start">✔️ Full Stack Web Developer</li>
              <li className="text-blue-200 text-start">✔️ MERN Web Developer</li>
              <li className="text-blue-200 text-start">✔️ Node.js Developer</li>
              <li className="text-blue-200 text-start">✔️ React.js Developer</li>
            </ul>
          </h3>
          <button className="text-sm mt-4 shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-3 rounded-full tracking-widest uppercase font-bold bg-lime-200 hover:bg-lime-500 hover:text-black dark:text-black transition duration-200">
            More About Me
          </button>
        </div>
        <div className="flex-1 mt-4 md:mt-0 md:h-[50vh]">
          <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 5, 5], fov: 75 }}>
            <Stage environment="city" intensity={0.6}>
              <LaptopCopy scale={[0.4, 0.4, 0.4]} />
            </Stage>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
