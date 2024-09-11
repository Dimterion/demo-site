import PropTypes from "prop-types";

const Logos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Lorem text</h5>
      <ul className="flex"></ul>
    </div>
  );
};

Logos.propTypes = {
  className: PropTypes.string,
};

export default Logos;
