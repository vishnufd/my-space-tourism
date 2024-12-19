import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
import hamburgerMenu from "../assets/shared/icon-hamburger.svg";
import "../index.css";
import { NavLink } from "react-router";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-5 min-[725px]:py-0 lg:top-10">
      <section className="flex items-center justify-center px-5 sm:px-[30px] md:px-[64px]">
        <img
          className="h-[35px] w-[35px] sm:h-[38px] sm:w-[38px] md:h-[48px] md:w-[48px]"
          src={logo}
          alt="logo"
        />
        <hr className="absolute left-[175px] z-10 hidden w-[600px] border-[1px] border-[#3b3b3b] 2xl:block" />
      </section>

      {/* Desktop  Navigation Links */}
      <section className="font-['Barlow Condensed'] hidden w-fit bg-white/5 pl-10 pr-10 uppercase text-white backdrop-blur-lg min-[725px]:block lg:w-[800px] lg:pl-[160px] lg:pr-0">
        <ul className="flex items-center justify-center gap-x-5 text-[16px] tracking-[3px] lg:gap-x-10">
          <li className="hover:border-b-[#D0D6F9]lg:py-8 cursor-pointer border-b-[0.2rem] border-transparent py-6">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-[0.2rem] border-white py-[1.6rem] lg:py-[2.1rem]"
                  : ""
              }
            >
              <b className="font-semibold tracking-[2px]">00</b>&nbsp;&nbsp;Home
            </NavLink>
          </li>
          <li className="cursor-pointer border-b-[0.2rem] border-transparent py-6 hover:border-b-[#D0D6F9] lg:py-8">
            <NavLink
              to={"/destination"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-[0.2rem] border-white py-[1.6rem] lg:py-[2.1rem]"
                  : ""
              }
            >
              <b className="font-semibold tracking-[2px]">01</b>
              &nbsp;&nbsp; Destination
            </NavLink>
          </li>
          <li className="cursor-pointer border-b-[0.2rem] border-transparent py-6 hover:border-b-[#D0D6F9] lg:py-8">
            <NavLink
              to={"/crew"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-[0.2rem] border-white py-[1.6rem] lg:py-[2.1rem]"
                  : ""
              }
            >
              <b className="font-semibold tracking-[2px]">02</b>
              &nbsp;&nbsp; Crew
            </NavLink>
          </li>
          <li className="cursor-pointer border-b-[0.2rem] border-transparent py-6 hover:border-b-[#D0D6F9] lg:py-8">
            <NavLink
              to={"/technology"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-[0.2rem] border-white py-[1.6rem] lg:py-[2.1rem]"
                  : ""
              }
            >
              <b className="font-semibold tracking-[2px]">03</b>
              &nbsp;&nbsp; Technology
            </NavLink>
          </li>
        </ul>
      </section>

      {/* Mobile Navigation Links */}
      <section
        className={`absolute right-0 top-0 z-50 h-dvh w-[250px] transform bg-white/5 backdrop-blur-xl min-[725px]:hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out`}
      >
        <div className="absolute right-5 top-6">
          <img
            className="cursor-pointer"
            src={close}
            alt="closeIcon"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
        <ul className="my-20 ml-10 font-extralight uppercase tracking-[2px] text-white">
          <li className="my-5 cursor-pointer border-r-[3px] border-transparent hover:border-[#D0D6F9]">
            <NavLink to={"/"}>
              <b className="font-semibold tracking-[2px]">00</b>
              &nbsp;&nbsp;Home
            </NavLink>
          </li>
          <li className="my-5 cursor-pointer border-r-[3px] border-transparent hover:border-[#D0D6F9]">
            <NavLink to={"/destination"}>
              <b className="font-semibold tracking-[2px]">01</b>
              &nbsp;&nbsp;Destination
            </NavLink>
          </li>
          <li className="my-5 cursor-pointer border-r-[3px] border-transparent hover:border-[#D0D6F9]">
            <NavLink to={"/crew"}>
              <b className="font-semibold tracking-[2px]">02</b>
              &nbsp;&nbsp;Crew
            </NavLink>
          </li>
          <li className="my-5 cursor-pointer border-r-[3px] border-transparent hover:border-[#D0D6F9]">
            <NavLink to={"/technology"}>
              <b className="font-semibold tracking-[2px]">03</b>
              &nbsp;&nbsp;Technology
            </NavLink>
          </li>
        </ul>
      </section>
      <div className="block px-5 min-[725px]:hidden">
        <img
          className="cursor-pointer"
          src={hamburgerMenu}
          alt="mobile menu"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
    </nav>
  );
};

export default Header;
