import PropTypes from "prop-types";

import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

TagLine.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default TagLine;
