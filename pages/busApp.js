import React from "react";
import propertyImg from "public/assets/projects/property.jpg";
import busAppImg from "/public/assets/projects/bus_app.jpg";
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
        <Image
          alt="BusApp"
          src={busAppImg}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Bus Admin Panel</h2>
          <h3>Angular / Bootstrap / Node.js</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using Angular 10 and is hosted on namecheap
            server. Users (Bus Provider) can add new buses with all the details
            like start and end point, add intermediate stations. Users can also
            add new cities by going into city management section if the cities
            are not available. There is an functionality where user can book the
            ticket for the passengers, Please make a note this product is in
            development stage.
          </p>
          <button
            className="px-8 py-2 mt-4 mr-8"
            onClick={() =>
              handleWindowOpen("https://bus-app-frontend.agrawalservices.in")
            }
          >
            Demo
          </button>
          <button
            className="px-8 py-2 mt-4"
            onClick={() => handleWindowOpen("https://github.com/smeetagrawal")}
          >
            Code
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Angular-10
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sequelize
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                SQL Database
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
