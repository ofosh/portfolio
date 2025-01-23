import React from "react";
import { aboutItem, assets } from "../assets";

const About = () => {
  return (
    <div
      className="overflow-hidden container max-w-full h-auto bg-gradient-to-br from-blue-900 from-10% via-blue-700 via-[percentage:50%_10%] to-blue-900 py-6 lg:px-12 px-4"
      id="About"
    >
      <div className="flex items-center justify-center flex-col py-4 px-3">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          About <span className="border-b-2  border-purple-200">Me</span>
        </h2>
      </div>
      <div className="flex items-start max-w-full flex-col md:flex-row py-8 px-2 lg:px-6 lg:py-8 lg:gap-x-20 gap-6">
        <div className="relative">
          <div className="bg-gray-400 relative px-5 rounded-3xl max-w-full">
            <img
              src={assets.about}
              alt="about"
              className="object-fill lg:w-[350px] "
            />
          </div>
          <div className="flex flex-col items-center bg-white text-center w-[100px] px-2 py-3 absolute rounded-br-3xl bottom-0 right-0 leading-none">
            <span className="text-4xl text-purple-600 font-bold">7+</span>
            <span>Years of Experience</span>
          </div>
        </div>
        <div className="full py-4 w-5/6">
          <h2 className="text-white lg:text-4xl text-2xl px-4 leading-normal font-bold mb-4 ">
            "Get in touch right now for your IT solutions."
          </h2>
          <p className="font-semibold text-xl text-gray-300 leading-normal py-4 lg:w-[550px] px-4 w-[380px] ">
            I'm a Full-Stack Developer with expertise in creating Webpages
            featuring intuitive UI/UX designs. I also have experience in
            Networking, Cybersecurity and DevOps. With years of experience, I
            have successfully delivered projects that have left many clients
            highly satisfied. Transforming Business ideas into enjoyable digital
            solutions.
          </p>
          {aboutItem.map((item, index) => (
            <div
              key={index}
              className=" text-white flex items-center px-4 mt-4 gap-8"
            >
              <div className="flex items-center justify-center ">
                <h4 className="text-2xl font-semibold text-purple-600 rounded-xl bg-white px-4 py-3">
                  {item.title}
                </h4>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-2xl font-light text-gray-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
