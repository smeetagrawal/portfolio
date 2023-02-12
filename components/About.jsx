import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImg from "/public/assets/about.jpg";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I had completed my graduation in 2018 from Gandhinagar Institute Of
            Technology. After that I had started my journey as a Javscript
            Developer and worked on technologies like Angular.js, Angular 10,
            React, React Native, Node.js, creating and integrating api's,
            scraping data from website and storing that in database.
          </p>
          <p className="py-2 text-gray-600">
            I had worked with AWS for uploading files to S3 bucket. Also worked
            on api integration on frontend using axios and graphql and managing
            complex state management with all validation to be done on frontend
            before sending data to backend. Also I am involved in discussing
            with backend team for any feature development so that both frontend
            and backend are aligned what data to be expected.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Checkout some of my latest projects
            </p>
          </Link>
          {/* <p className="py-2 text-gray-600 underline cursor-pointer"></p> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="About-developer-image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
