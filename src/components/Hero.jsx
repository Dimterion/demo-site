import Section from "./Section";
import Button from "./Button";
import curve from "../assets/hero/curve.png";

const Hero = () => {
  return (
    <Section
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 mx-auto mb-[4rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities{" "}
            <span className="relative inline-block">
              Demo{" "}
              <img
                src={curve}
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            ipsum?
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
