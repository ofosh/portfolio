import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "70571834-6a2c-43c4-9401-3e3c5cf64e71");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className="overflow-hidden max-w-full container mx-auto py-12 bg-white lg:px-16 px-8"
      id="Contact"
    >
      <div className="flex items-center justify-between flex-col md:flex-row">
        <div className="flex items-start justify-center flex-col py-4 px-3">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 sm:text-5xl">
              Contact {""}
              <span className="border-b-2 font-extrabold border-purple-800 text-purple-800">
                Me {""}
              </span>
            </h2>
            <p className="mt-4 text-xl w-[300px]">
              Contact me today let me help you with my services!
            </p>
          </div>
          {/* contact-details */}
          <div className="py-6 mt-2">
            <div className="flex items-center gap-4 my-4">
              <FaLocationDot className="text-5xl text-purple-800" />
              <div className="flex items-start flex-col">
                <span className="text-xl font-normal text-gray-500">
                  Address
                </span>
                <p className="text-2xl font-semibold text-purple-800">
                  Guzape, Abuja Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-4">
              <FaPhoneVolume className="text-5xl text-purple-800" />
              <div className="flex items-start flex-col">
                <span className="text-xl font-normal text-gray-500">
                  Phone Number
                </span>
                <p className="text-2xl font-semibold text-purple-800">
                  +234 7040 267 439
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-4">
              <MdEmail className="text-5xl text-purple-800" />
              <div className="flex items-start flex-col">
                <span className="text-xl font-normal text-gray-500">
                  Email Address
                </span>
                <p className="text-2xl font-semibold text-purple-800">
                  bodeolapade@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="py-4">
            <h3 className="text-blue-950 text-2xl font-bold mb-3">
              Share Social Media
            </h3>
            <div className="flex items-center justify-start gap-4">
              <FaGithub className="cursor-pointer text-blue-950 text-3xl" />
              <FaLinkedinIn className=" cursor-pointer text-blue-950 text-3xl" />
              <FaCodepen className="cursor-pointer text-blue-950 text-3xl" />
            </div>
          </div>
        </div>
        <div className="bg-purple-700 rounded-2xl py-10 px-8 w-full md:w-1/2">
          <h3 className="text-3xl pb-4 font-bold text-white">Add Details</h3>
          <form onSubmit={onSubmit} className="mt-4">
            <label className="text-white pb-5">Your Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="block w-full focus:outline-none bg-transparent p-[15px] rounded-2xl border-2 text-white mt-[5px] resize-none"
            />
            <label className="text-white pb-5">Phone Number*</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="block w-full focus:outline-none bg-transparent p-[15px] rounded-2xl border-2 text-white mt-[5px] resize-none"
            />
            <label className="text-white pb-5">Email Address*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              className="block w-full focus:outline-none bg-transparent p-[15px] rounded-2xl border-2 text-white mt-[5px] resize-none"
            />
            <label className="text-white pb-5">Enter Comment*</label>
            <textarea
              name="message"
              rows="6"
              placeholder="What will you like to discuss"
              required
              className="block w-full focus:outline-none bg-transparent p-[15px] rounded-2xl border-2 text-white mt-[8px] resize-none"
            />
            <button className="bg-white flex items-center text-[#000f38] rounded-xl mt-[20px] font-semibold text-xl p-[20px]">
              Submit Now{" "}
              <IoSend className="text-2xl text-[#000f38] ml-[10px]" />
            </button>
          </form>
          <span className="my-[20px]">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
