import Section from "./Section";
import Heading from "./Heading";
import { features } from "../constants";

const Features = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Lorem title lorem title"
        />
        <div className="mb-10 flex flex-wrap gap-10">
          {features.map((item) => (
            <div
              className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div>
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;
