import React, { useState } from "react";
import planetDetails from "../public/data.json";
import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";
import Header from "./Header";
import "../index.css";

const Destination = () => {
  const planetImageMap = {
    Moon: moonImg,
    Mars: marsImg,
    Europa: europaImg,
    Titan: titanImg,
  };
  const initialPlanet = planetDetails.destinations[0];
  const [planetData, setPlanetData] = useState(initialPlanet);
  const [planetImage, setPlanetImages] = useState(
    () => planetImageMap[initialPlanet.name],
  );
  const [activePlanet, setActivePlanet] = useState(initialPlanet.name);

  const handleChange = (e) => {
    let planet = e.target.textContent;
    const singlePlanet = planetDetails.destinations.find(
      (planetData) => planetData.name === planet,
    );
    if (singlePlanet) {
      setPlanetImages(planetImageMap[planet] || null);
    }
    setPlanetData(singlePlanet);
    setActivePlanet(planet);
  };

  return (
    <main className="destination h-screen w-full overflow-x-hidden">
      <Header />
      <section className="mx-5 mt-10 sm:mx-20 lg:mx-24">
        <h4 className="pt-5 text-center text-[14px] font-extralight uppercase tracking-[3px] text-white sm:text-left sm:text-3xl">
          <span className="font-semibold text-gray-500">01</span>&nbsp;&nbsp;
          Pick your destination
        </h4>
        <section className="mt-[30px] flex flex-col items-center justify-between gap-x-[42px] text-center lg:flex-row">
          <div className="flex-shrink-1 my-10 flex w-[539px] justify-center lg:my-0">
            <img
              className="w-[250px] lg:w-[445px]"
              src={planetImage}
              alt="planets"
            />
          </div>
          <div className="max-w-[539px] self-center uppercase text-white lg:self-start">
            <div className="mx-5 flex max-w-[445px] flex-col justify-center sm:mx-[47px]">
              <ul className="flex items-center justify-center gap-x-5 font-light tracking-[3px] text-blue-200 lg:justify-start">
                <li>
                  <a
                    onClick={handleChange}
                    className={`cursor-pointer border-b-[3px] py-2 hover:border-b-[#D0D6F9] ${activePlanet == "Moon" ? "border-white" : "border-transparent"}`}
                  >
                    Moon
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleChange}
                    className={`cursor-pointer border-b-[3px] py-2 hover:border-b-[#D0D6F9] ${activePlanet == "Mars" ? "border-white" : "border-transparent"}`}
                  >
                    Mars
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleChange}
                    className={`cursor-pointer border-b-[3px] py-2 hover:border-b-[#D0D6F9] ${activePlanet == "Europa" ? "border-white" : "border-transparent"}`}
                  >
                    Europa
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleChange}
                    className={`cursor-pointer border-b-[3px] py-2 hover:border-b-[#D0D6F9] ${activePlanet == "Titan" ? "border-white" : "border-transparent"}`}
                  >
                    Titan
                  </a>
                </li>
              </ul>
              <h2 className="my-8 text-center font-['Bellefair'] text-7xl tracking-[2px] lg:text-left">
                {planetData.name}
              </h2>
              <p className="my-8 text-center text-[16px] font-light lowercase leading-8 text-blue-200 sm:text-[20px] lg:text-left">
                {planetData.description}
              </p>
              <hr style={{ borderColor: "#3e3f41" }} />
              <div className="my-10 flex flex-col justify-center gap-x-20 text-[13px] font-light tracking-[2px] text-blue-200 sm:flex-row lg:justify-normal">
                <div className="lg:text-left">
                  <p>avg. distance</p>
                  <p className="pt-3 font-['Bellefair'] text-3xl font-light text-white">
                    {planetData.distance}
                  </p>
                </div>
                <div>
                  <p>est. travel time</p>
                  <p className="pt-3 font-['Bellefair'] text-3xl font-light text-white">
                    {planetData.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Destination;
