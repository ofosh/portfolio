import React from "react";
import { assets } from "../assets";
import curve from "../assets/curve.png";
import Resume from "../assets/Majeed_Resume.pdf";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-white overflow-hidden container min-h-screen max-w-full">
      <div className="relative isolate px-4 lg:px-6">
        <div className="mx-auto flex items-center flex-col md:flex-row justify-between gap-x-6 max-w-5xl py-32 sm:py-48 lg:py-56">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Hello, I'm 👋
              <br />
              <span className="text-blue-900">Majeed</span>
            </h1>
            <img src={curve} alt="curve" width={280} />
            <p className="mt-8 text-lg font-medium lg:w-5/6 text-pretty text-gray-500 sm:text-xl/8">
              I'm a software engineer that specializes in building tools that
              people would actually want to use.
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
              <button className="flex">
                <a
                  href={Resume}
                  download="Resume"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex "
                >
                  Download Resume{" "}
                  <FaDownload className="text-2xl text-white ml-4" />
                </a>
              </button>

              <a
                href="#Contact"
                className="text-sm/6 font-semibold text-gray-900"
              >
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="md:absolute right-0 botttom-0 top-35 rounded-br-3xl max-w-full rounded-tl-full bg-gray-200 bg-cover bg-center">
            <img
              src={assets.hero}
              width={450}
              className=" max-w-full lg:ml-auto lg:-mt-10 mx-auto"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
