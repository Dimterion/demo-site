import PropTypes from "prop-types";

import { logos } from "../constants/index";

const Logos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Lorem text</h5>
      <ul className="flex">
        {logos.map((logo, index) => (
          <li
            className="flex h-[8.5rem] flex-1 items-center justify-center hover:opacity-80"
            key={index}
          >
            <img src={logo} width={134} height={128} alt="Logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

Logos.propTypes = {
  className: PropTypes.string,
};

export default Logos;
