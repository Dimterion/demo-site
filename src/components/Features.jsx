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
              className="relative block bg-cover bg-no-repeat p-0.5 md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="mih-h-[22rem] pointer-events-none relative z-2 flex flex-col p-[2.4rem]">
                <h5 className="h2 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="mt-auto flex items-center">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;
