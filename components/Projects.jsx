import React from "react";
import { ProjectItem } from ".";
// import propertyImg from "/public/assets/projects/property.jpg";
// import cryptoImg from "/public/assets/projects/crypto.jpg";
// import netflixImg from "/public/assets/projects/netflix.jpg";
// import twitchImg from "/public/assets/projects/twitch.jpg";
import busappImg from "/public/assets/projects/bus_app.jpg";
import skulishImg from "/public/assets/projects/skulish/image1.png";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* <ProjectItem
            title="Bus App"
            backgroundImg={busappImg}
            projectUrl="/busApp"
            technology="Angular-10"
          /> */}
          <ProjectItem
            title="Skulish"
            backgroundImg={skulishImg}
            projectUrl="/skulishApp"
            technology="React.js, Node.js, Tailwind, Vercel for deployment"
          />
          {/* <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            technology="ReactJs"
          /> */}
          {/* <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            technology="ReactJs"
          />
          <ProjectItem
            title="Twitch App"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            technology="ReactJs"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
