import React from "react";
import { testimonials } from "../assets";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      className="overflow-hidden container max-w-full h-auto bg-gradient-to-br from-purple-50 from-10% via-purple-100 via-[percentage:50%_10%] to-blue-200 py-6 lg:px-12 px-4"
      id="Testimonial"
    >
      <div className="flex items-center justify-center flex-col py-4 px-3">
        <h2 className="text-4xl font-bold text-blue-900 sm:text-5xl">
          What my {""}
          <span className="border-b-2 font-extrabold border-purple-800 text-purple-800">
            Clients {""}
          </span>
          Says
        </h2>
      </div>
      <div className="flex items-center justify-start gap-4 flex-col md:flex-row">
        <div className="py-8 px-4 w-full flex flex-row items-center justify-center">
          <BsChevronCompactLeft
            size={30}
            onClick={prevSlide}
            className="cursor-pointer"
          />
          <div className=" h-full border-gray-300 border overflow-x-hidden rounded-xl flex items-center w-[600px]   ease-in duration-500 py-12 px-5 bg-slate-50">
            {testimonials.map(
              (item, index) =>
                index === currentIndex && (
                  <div
                    key={index}
                    className="flex  ease-in duration-300. overflow-x-hidden flex-row items-center "
                  >
                    <div>
                      <div className="flex items-center justify-between flex-col-reverse md:flex-row ">
                        <div>
                          <p
                            width={35}
                            className="mb-2 text-center md:text-left"
                          >
                            ⭐⭐⭐⭐⭐
                          </p>
                          <h3 className="font-semibold  text-center md:text-left text-2xl ">
                            {item.name}
                          </h3>
                          <h5 className="leading-tight text-center md:text-left text-[14px] text-gray-400">
                            {item.position}
                          </h5>
                        </div>
                        <div>
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            width={90}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <p className="py-2 mt-2 font-light leading-normal md:text-[18px] text-center mr-4 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
          <BsChevronCompactRight
            onClick={nextSlide}
            className="cursor-pointer"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
