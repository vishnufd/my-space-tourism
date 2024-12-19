import React from "react";
import Header from "./Header";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <main className="home w-full bg-cover lg:h-screen">
        <Header />
        <section className="mx-5 mt-10 block h-dvh flex-col items-center justify-between sm:mx-20 sm:mt-32 sm:flex sm:h-auto lg:flex-row">
          <section className="w-full text-center text-blue-200 min-[725px]:w-[540px] lg:text-left">
            <h4 className="py-5 text-[18px] font-light tracking-[3px] sm:text-3xl">
              SO, YOU WANT TO TRAVEL TO
            </h4>
            <h1 className="py-5 font-['Bellefair'] text-6xl text-white sm:text-9xl">
              SPACE
            </h1>
            <p className="py-3 text-[16px] font-light sm:text-[20px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </section>
          <div className="my-16 flex items-center justify-center sm:my-0 min-[725px]:w-[540px]">
            <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-opacity-20 transition hover:bg-[#ffffff24] sm:h-[400px] sm:w-[400px]">
              <NavLink to="/destination">
                <button
                  aria-label="Explore Destination"
                  className="h-[150px] w-[150px] rounded-full bg-white font-['Bellefair'] text-2xl hover:text-[#9ea3bf] sm:h-[272px] sm:w-[272px] sm:text-4xl"
                >
                  EXPLORE
                </button>
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
