import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillFilePersonFill, BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]"> Smeet</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a front-end web developer specializing in building
            exceptional digital experiences. Currently, I&apos;m focused on
            building responsive front-end web application and also have an
            experience in backend technology like node.js and have some
            experience in CI/CD for automating task like deploying frontend
            builds with AWS
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-6 shadow-lg shadow-gray-400 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="p-6 shadow-lg shadow-gray-400 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="p-6 shadow-lg shadow-gray-400 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="p-6 shadow-lg shadow-gray-400 rounded-full cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
