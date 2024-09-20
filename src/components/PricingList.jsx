import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
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
          <p>{item.description}</p>
          <div>
            {item.price && (
              <>
                <div>$</div>
                <div>{item.price}</div>
              </>
            )}
          </div>
          <Button
            className="mb-6 w-full"
            href={item.price ? "/pricing" : ""}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact"}
          </Button>
          <ul>
            {item.features.map((feature, index) => (
              <li key={index}>
                <FaCheckCircle className="size-6 text-purple-500" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
