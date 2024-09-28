import React from "react";

const Who = () => {
  return (
    <div>
      <div className="who-container pt-8">
        <div className="flex flex-col md:flex-row md:space-x-4 md:px-20 px-4 md:pt-16">
          <div className=" flex-1 p-4">
            <img className="hero-img" src="./img/Right-removebg-preview.png" />
          </div>
          <div className="right-who flex-1 p-4 mt-4 md:mt-0">
            <h1 className="text-xl text-center md:text-4xl text-lime-100 font-bold p-2 pb-3">
            <span className="text-blue-200"> Full Stack Web Developer </span>
            <br/>
               <span className="text-blue-200"> Frontend</span> +
              <span className="text-blue-200"> Backend</span>
            </h1>
            <hr />
            <h1 className="text-xl md:text-3xl font-semibold p-2 pt-3">

            </h1>
            <p className="text-sm md:text-xl p-2 pb-4">
              I am Full-time Job Seeker With{" "}
              <span className="text-yellow-300">
                Bachelor's Degree in Engineering{" "}
              </span>
              Available for Full Stack Web Devloper Flexible Working With
              Frontend As well As Backend ( MERN Stack )
            </p>
            <p className="text-sm md:text-2xl p-2 pb-4">
            
              <span className="text-green-400  md:text-2xl">
                MongoDB
              </span> + <span className=" md:text-2xl">Exprees</span><span className="text-yellow-300  md:text-2xl">Js
              </span> + <span className="text-blue-300  md:text-2xl">
                React Js
              </span> + <span className="text-green-700  md:text-2xl">
                Node Js
              </span>
              
            </p>
            <button className="text-sm mt-4 shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-3 rounded-full tracking-widest uppercase font-bold bg-lime-200 hover:bg-lime-500 hover:text-black dark:text-black transition duration-200">
              See My Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
