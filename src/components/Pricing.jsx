import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import sectionImg from "../assets/sectionImg.jpg";
import { BackgroundCircles } from "./design/Hero";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <img
            src={sectionImg}
            className="relative z-1 rounded-full"
            width={255}
            height={255}
            alt="Section image"
          />
          <div className="pointer-events-none absolute top-28 xl:top-3">
            <BackgroundCircles />
          </div>
        </div>
        <Heading tag="Get started" title="Lorem text example." />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
