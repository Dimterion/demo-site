import Section from "./Section";
import sectionImg from "../assets/sectionImg.jpg";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <img
            src={sectionImg}
            className="relative z-1"
            width={255}
            height={255}
            alt="Section image"
          />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
