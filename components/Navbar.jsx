import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import navLogo from "../public/assets/navLogo.png";
import { useRouter } from "next/router";

function Navbar() {
  const [sidebar, setSideBar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleSideBar = () => {
    setSideBar(!sidebar);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/twitch" ||
      router.asPath === "/netflix" ||
      router.asPath === "/crypto" ||
      router.asPath === "/busApp"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  return (
    <div
      style={{ backgroundColor: navBg }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      {/* Header */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          {/* <Image
            src={navLogo}
            alt="user-name-logo"
            width="125"
            height="50"
            className="h-[50px]"
          /> */}
          Smeet Agrawal
        </Link>
        <div>
          {/* list of sections visible only on desktop version */}
          <ul className="hidden md:flex" style={{ color: linkColor }}>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          {/* Menu button visible only on mobile version */}
          <div className="md:hidden cursor-pointer" onClick={handleSideBar}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Side bar for mobile version (when click on menu button) */}
      <div
        className={
          sidebar
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden"
            : ""
        }
      >
        <div
          className={
            sidebar
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 overflow-y-auto"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full">
              <Link href="/">
                {/* <Image
                  src={navLogo}
                  alt="user-name-logo"
                  width="87"
                  height="50"
                  className="h-[35px]"
                /> */}
                Smeet Agrawal
              </Link>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleSideBar}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-3">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something awesome
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase" onClick={handleSideBar}>
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
