import { useState, useEffect } from "react";
import React from "react";
import { assets, services } from "../assets";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setcardsToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setcardsToShow(services.length);
      } else {
        setcardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);
  return (
    <div
      className="overflow-hidden container max-w-full h-auto bg-gradient-to-br from-white from-10% via-blue-100 via-[percentage:50%_10%] to-white py-6 lg:px-12 px-4"
      id="Services"
    >
      <div className="flex items-center justify-center flex-col py-4 px-3">
        <h2 className="text-4xl font-bold text-blue-900 sm:text-5xl">
          My Expert {""}
          <span className="border-b-2 border-purple-800 text-purple-800">
            Areas
          </span>
        </h2>
      </div>

      <div className="overflow-hidden ">
        <div className="flex justify-end items-center mt-6">
          <button
            onClick={prevProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Previous Project"
          >
            <img src={assets.arrowLeft} width={35} alt="" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Next Project"
          >
            <img src={assets.arrowRight} width={45} alt="" />
          </button>
        </div>
        <div
          className="flex py-6 gap-8  transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {services.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0  w-full py-6 sm:w-1/4"
            >
              <div className=" bg-gray-300 rounded-t-2xl py-5 px-3 flex items-center justify-center">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-[80px] rounded-full bg-white object-center px-3 py-3 "
                />
              </div>
              <div className=" h-[230px] flex justify-center">
                <div className="inline-block bg-white w-4/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl  font-bold text-blue-900">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 pt-3 mb-6 text-sm">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
