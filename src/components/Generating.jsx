import PropTypes from "prop-types";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6 ${className || ""} text-base`}
    >
      <AiOutlineLoading3Quarters className="mr-4 h-5 w-5" />
      Processing...
    </div>
  );
};

Generating.propTypes = {
  className: PropTypes.string,
};

export default Generating;
