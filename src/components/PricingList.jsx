import { pricing } from "../constants";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 odd:py-8 even:py-14 max-lg:w-full lg:w-auto"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
