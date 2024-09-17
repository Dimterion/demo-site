import { IoIosRecording } from "react-icons/io";
import { BiVideoRecording } from "react-icons/bi";
import { IoDisc } from "react-icons/io5";
import { FaChromecast } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";
import Section from "./Section";
import Heading from "./Heading";
import Generating from "./Generating";
import backgroundImage from "../assets/backgroundImg.jpg";
import { dsServices } from "../constants";
import { FaCheckCircle } from "react-icons/fa";
import { PhotoChatMessage } from "./design/Services";

const Services = () => {
  const dsServicesIcons = [
    <IoIosRecording key="recording" />,
    <BiVideoRecording key="videoRecording" />,
    <IoDisc key="disc" />,
    <FaChromecast key="chromecast" />,
    <FaSlidersH key="sliders" />,
  ];

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Lorem title example"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem est minus eveniet illum ipsam ab quibusdam reiciendis iure ex."
        />
        <div className="relative">
          <div className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full md:w-3/5 xl:w-auto">
              <img
                className="h-full w-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Background image"
                src={backgroundImage}
              />
            </div>
            <div className="relative z-1 ml-auto max-w-[17rem]">
              <h4 className="h4 mb-4">Lorem text</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="body-2">
                {dsServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start border-t border-n-6 py-4"
                  >
                    <FaCheckCircle className="size-6 text-purple-500" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="lg-right-auto absolute bottom-4 left-4 right-4 border border-n-1/10 lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2" />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Background image"
                  src={backgroundImage}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                <h4 className="h4 mb-4">Lorem text</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="lg:m-h-[46rem] overflow-hidden rounded-3xl bg-n-7 p-4">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <ul className="flex items-center justify-between">
                  {dsServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${index === 2 ? "p-0.3 h-[3rem] w-[3rem] bg-conic-gradient md:h-[4.5rem] md:w-[4.5rem]" : "flex h-10 w-10 bg-n-6 md:h-15 md:w-15"}`}
                    >
                      <div>{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
