import React, { useEffect, useState } from "react";
import Header from "./Header";
import planetDetails from "../public/data.json";
import rocketLaunching from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePort from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";

const Technology = () => {
  const technologyImageMap = {
    "Launch vehicle": rocketLaunching,
    Spaceport: spacePort,
    "Space capsule": spaceCapsule,
  };
  const technology = planetDetails?.technology;
  const [data, setData] = useState({});
  const [active, setActive] = useState("");
  const [rocketImages, setRocketImages] = useState(null);

  useEffect(() => {
    if (technology.length > 0) {
      setData(technology[0]);
      setActive(technology[0].name);
      setRocketImages(rocketLaunching);
    }
  }, [technology]);

  const handleClick = (e) => {
    const selectedTechnology = technology.find(
      (data) => data.name === e.target.name,
    );
    if (selectedTechnology) {
      setRocketImages(technologyImageMap[selectedTechnology.name]);
      setActive(selectedTechnology.name);
      setData(selectedTechnology);
    }
  };

  return (
    <main className="technology h-screen w-full overflow-x-hidden">
      <Header />
      <section className="mx-5 sm:mx-20 sm:mt-10 lg:mx-24">
        <h4 className="py-5 text-center text-[14px] font-extralight uppercase tracking-[3px] text-white sm:text-left sm:text-3xl">
          <span className="font-semibold text-gray-500">03</span>&nbsp;&nbsp;
          Space launch 101
        </h4>
        <section className="mt-10 flex flex-col-reverse items-center justify-between gap-x-10 lg:mt-0 lg:flex-row">
          <div className="my-10 flex w-full flex-col lg:w-[635px] lg:flex-row">
            <div className="my-10 flex w-full justify-center lg:my-0 lg:w-[300px]">
              <ul className="flex flex-row gap-x-8 gap-y-8 text-white lg:flex-col">
                <li>
                  <a
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-2 font-['Bellefair'] text-2xl ${active === "Launch vehicle" ? "bg-white text-black" : ""}`}
                    href="#"
                    name="Launch vehicle"
                    onClick={handleClick}
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-2 font-['Bellefair'] text-2xl ${active === "Spaceport" ? "bg-white text-black" : ""}`}
                    href="#"
                    name="Spaceport"
                    onClick={handleClick}
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-2 font-['Bellefair'] text-2xl ${active === "Space capsule" ? "bg-white text-black" : ""}`}
                    href="#"
                    name="Space capsule"
                    onClick={handleClick}
                  >
                    3
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ width: "inherit" }}>
              <h3 className="text-center text-2xl font-light uppercase tracking-[2px] text-blue-200/50 sm:text-4xl lg:text-left">
                The terminology…
              </h3>
              <h2 className="my-5 text-center font-['Bellefair'] text-2xl uppercase tracking-[2px] text-white sm:text-4xl lg:text-left">
                {data.name}
              </h2>
              <p className="my-3 text-center text-[16px] font-light lowercase leading-8 text-blue-200 sm:text-[20px] lg:text-left">
                {data.description}
              </p>
            </div>
          </div>
          <div className="-mt-0 lg:-mt-8">
            <img src={rocketImages} alt="stages of rocket" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Technology;
