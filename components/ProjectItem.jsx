import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectItem({ title, backgroundImg, projectUrl, technology }) {
  return (
    <>
      <Link
        className="relative flex items-center justify-center h-auto w-full rounded-xl p-4"
        href={projectUrl}
      >
        {/* group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] */}
        <Image className="rounded-xl" src={backgroundImg} alt="project-image" />
        {/* <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{technology}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div> */}
      </Link>
    </>
  );
}

export default ProjectItem;
