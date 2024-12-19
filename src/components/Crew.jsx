import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Header from "./Header";
import planetDetails from "../public/data.json";
import hurly from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import ansari from "../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const crewDetails = planetDetails?.crew;

  return (
    <main className="crew h-screen w-full overflow-x-hidden">
      <Header />
      <section className="mx-5 sm:mx-20 sm:mt-8 lg:mx-24">
        <h4 className="py-5 text-center text-[14px] font-extralight uppercase tracking-[3px] text-white sm:py-3 sm:text-left sm:text-3xl">
          <span className="font-semibold text-gray-500">02</span>&nbsp;&nbsp;
          Meet your crew
        </h4>
        <Swiper
          spaceBetween={30}
          loop={true}
          keyboard={{ enabled: true }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background-color: #5a5a5a; width: 12px; height: 12px; margin: 0 5px;"></span>`;
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="flex w-full flex-col items-center justify-evenly sm:my-10 lg:mt-0 lg:flex-row">
              <div className="flex w-full flex-col justify-center sm:w-[539px]">
                <h3 className="text-center text-2xl font-light uppercase tracking-[2px] text-blue-200/50 sm:text-4xl lg:text-left">
                  {crewDetails[0].role}
                </h3>
                <h2 className="my-5 text-center font-['Bellefair'] text-2xl uppercase tracking-[2px] text-white sm:text-5xl lg:text-left">
                  {crewDetails[0].name}
                </h2>
                <p className="my-3 text-center text-[16px] font-light lowercase leading-8 text-blue-200 sm:text-[20px] lg:text-left">
                  {crewDetails[0].bio}
                </p>
              </div>
              <div className="flex w-full justify-center sm:w-[539px]">
                <img src={hurly} alt="astronaut hurly" width={"65%"} />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex w-full flex-col items-center justify-evenly sm:my-10 lg:mt-0 lg:flex-row">
              <div className="flex w-full flex-col justify-center sm:w-[539px]">
                <h3 className="text-center text-2xl font-light uppercase tracking-[2px] text-blue-200/50 sm:text-4xl lg:text-left">
                  {crewDetails[1].role}
                </h3>
                <h2 className="my-5 text-center font-['Bellefair'] text-2xl uppercase tracking-[2px] text-white sm:text-5xl lg:text-left">
                  {crewDetails[1].name}
                </h2>
                <p className="my-3 text-center text-[16px] font-light lowercase leading-8 text-blue-200 sm:text-[20px] lg:text-left">
                  {crewDetails[1].bio}
                </p>
              </div>
              <div className="flex w-full justify-center sm:w-[539px]">
                <img src={mark} alt="astronaut mark" width={"65%"} />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex w-full flex-col items-center justify-evenly sm:my-10 lg:my-0 lg:flex-row">
              <div className="flex w-full flex-col justify-center sm:w-[539px]">
                <h3 className="text-center text-2xl font-light uppercase tracking-[2px] text-blue-200/50 sm:text-4xl lg:text-left">
                  {crewDetails[2].role}
                </h3>
                <h2 className="my-5 text-center font-['Bellefair'] text-2xl uppercase tracking-[2px] text-white sm:text-5xl lg:text-left">
                  {crewDetails[2].name}
                </h2>
                <p className="my-3 text-center text-[16px] font-light lowercase leading-8 text-blue-200 sm:text-[20px] lg:text-left">
                  {crewDetails[2].bio}
                </p>
              </div>
              <div className="flex w-full justify-center sm:w-[539px]">
                <img src={victor} alt="astronaut victor" width={"80%"} />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="flex w-full flex-col items-center justify-evenly sm:my-10 lg:my-0 lg:flex-row">
              <div className="flex w-full flex-col justify-center sm:w-[539px]">
                <h3 className="text-center text-2xl font-light uppercase tracking-[2px] text-blue-200/50 sm:text-4xl lg:text-left">
                  {crewDetails[3].role}
                </h3>
                <h2 className="my-5 text-center font-['Bellefair'] text-2xl uppercase tracking-[2px] text-white sm:text-5xl lg:text-left">
                  {crewDetails[3].name}
                </h2>
                <p className="my-3 text-center text-[16px] font-light lowercase leading-8 text-blue-200 sm:text-[20px] lg:text-left">
                  {crewDetails[3].bio}
                </p>
              </div>
              <div className="flex w-full justify-center sm:w-[539px]">
                <img src={ansari} alt="astronaut ansari" width={"90%"} />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
};

export default Crew;
