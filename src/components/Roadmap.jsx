import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { roadmap } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import TagLine from "./TagLine";
import grid from "../assets/grid.png";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Get started" title="Lorem text title" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "Load";

            return (
              <div
                key={item.id}
                className={`rounded-[2.5rem] p-0.25 md:flex even:md:translate-y-[7rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
              >
                <div className="relative overflow-hidden rounded-[2rem] bg-n-8 p-8 xl:p-15">
                  <div className="absolute left-0 top-0 max-w-full">
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="mb-12 flex max-w-[27rem] items-center justify-between md:mb-20">
                      <TagLine>{item.date}</TagLine>
                      <div className="flex items-center rounded bg-n-1 px-1 py-1 text-n-8">
                        {item.status === "done" ? (
                          <FaCheckCircle className="mr-1 size-4 text-n-5" />
                        ) : (
                          <AiOutlineLoading3Quarters className="mr-1 size-4 text-n-5" />
                        )}
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="-mx-15 -my-10 mb-10">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h3 className="h3 mb-4">{item.title}</h3>
                    <p className="body-2 text-n-3">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
