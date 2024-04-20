import React from "react";
import propertyImg from "public/assets/projects/property.jpg";
import appImg from "/public/assets/projects/skulish/image1.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function BusApp() {
  const handleWindowOpen = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image alt="BusApp" src={appImg} fill style={{ objectFit: "cover" }} />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Skulish</h2>
          <h3>React.js / Tailwind / Node.js / Vercel for deployment</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React.js and is deployed on Vercel. Skulish
            is committed to providing all the essential resources for your
            educational journey. Our mission is to equip students with the tools
            they need for success. From notebooks to capture thoughts, to pens
            for clear expression, we foster a spirit of curiosity essential for
            academic achievement. Our belief is that school bags should carry
            more than just books; they should hold the promise of possibilities,
            the potential for growth, and all the essentials needed for the
            adventure of each school day
          </p>
          <button
            className="px-8 py-2 mt-4 mr-8"
            onClick={() => handleWindowOpen("https://www.skulish.com/")}
          >
            Demo
          </button>
          <button
            className="px-8 py-2 mt-4"
            onClick={() => handleWindowOpen("https://github.com/smeetagrawal")}
          >
            Code (Private Repo)
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel for deployment
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Nodemailer
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                GoDaddy for domain name
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default BusApp;
