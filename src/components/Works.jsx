import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <div className="work-container p-32">
        <Slider {...settings} className="">
          <div className="p-3">
            <div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
              
              <div className="p-2 flex justify-center">
                <a href="https://pet-selling-ecommerce-platform.vercel.app/" >
                  <img
                    className="rounded-md"
                    src="./img/project/Project-1.png"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="px-4 pb-3">
                <div>
                  <a href="https://pet-selling-ecommerce-platform.vercel.app/" >
                    <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                      E-commerce Website
                    </h5>
                  </a>
                  <center>
                  <div className="p-4">
                    <button className="btn btn-success me-3">
                    <a href="https://pet-selling-ecommerce-platform.vercel.app/" >Live Demo</a>
                    </button>
                    <button className="btn btn-success">
                    <a href="https://github.com/abhishekkank47/CodeClauseInternship_Pet-selling-system">GitHub Code</a>
                    </button>
                  </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
              
              <div className="p-2 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-md"
                    src="./img/project/ReactMusicPlayer.png"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="px-4 pb-3">
                <div>
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                      Project Name
                    </h5>
                  </a>
                  <center>
                  <div className="p-4">
                    <button className="btn btn-success me-3">Live Demo</button>
                    <button className="btn btn-success">GitHub Code</button>
                  </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
              
              <div className="p-2 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-md"
                    src="./img/project/ReactImgGallery.png"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="px-4 pb-3">
                <div>
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                      Project Name
                    </h5>
                  </a>
                  <center>
                  <div className="p-4">
                    <button className="btn btn-success me-3">Live Demo</button>
                    <button className="btn btn-success">GitHub Code</button>
                  </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
              
              <div className="p-2 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-md"
                    src="./img/project/ConstructionBootsrap.png"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="px-4 pb-3">
                <div>
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                      Project Name
                    </h5>
                  </a>
                  <center>
                  <div className="p-4">
                    <button className="btn btn-success me-3">Live Demo</button>
                    <button className="btn btn-success">GitHub Code</button>
                  </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
              
              <div className="p-2 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-md"
                    src="./img/project/WeatherConverter.png"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="px-4 pb-3">
                <div>
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                      Project Name
                    </h5>
                  </a>
                  <center>
                  <div className="p-4">
                    <button className="btn btn-success me-3">Live Demo</button>
                    <button className="btn btn-success">GitHub Code</button>
                  </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
              
              <div className="p-2 flex justify-center">
                <a href="#">
                  <img
                    className="rounded-md"
                    src="./img/project/Calculator.png"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="px-4 pb-3">
                <div>
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                      Project Name
                    </h5>
                  </a>
                  <center>
                  <div className="p-4">
                    <button className="btn btn-success me-3">Live Demo</button>
                    <button className="btn btn-success">GitHub Code</button>
                  </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Works;
