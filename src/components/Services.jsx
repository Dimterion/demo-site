import Section from "./Section";
import Heading from "./Heading";
import backgroundImage from "../assets/backgroundImg.jpg";
import { dsServices } from "../constants";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="contaner">
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
              <h4 className="h-4 mb-4">Lorem text</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              <ul className="body-2">
                {dsServices.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="size-6 text-purple-500" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
