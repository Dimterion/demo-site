import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Features";
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
                <h2 className="h2 mb-5">{item.title}</h2>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="mt-auto flex items-center">
                  <img
                    src={item.iconUrl}
                    width={70}
                    height={70}
                    alt={item.title}
                  />
                  <p className="ml-auto font-orbitron text-xs font-bold uppercase tracking-wide text-n-1">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;
