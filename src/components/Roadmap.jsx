import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import grid from "../assets/grid.png";
import TagLine from "./TagLine";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Get started" title="Lorem text title" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div key={item.id}>
                <div>
                  <div>
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                    <div className="relative z-1">
                      <div className="flex items-center justify-between">
                        <TagLine>{item.date}</TagLine>
                        <div>
                          {item.status === "done" ? (
                            <FaCheckCircle className="mr-2.5 size-6 text-purple-500" />
                          ) : (
                            <AiOutlineLoading3Quarters className="mr-2.5 size-6 text-purple-500" />
                          )}
                          <div className="tagline">{status}</div>
                        </div>
                      </div>
                    </div>
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
