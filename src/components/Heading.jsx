import PropTypes from "prop-types";
import TagLine from "./TagLine";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} mx-auto mb-12 max-w-[50rem] lg:mb-20`}>
      {tag && <TagLine></TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-2 text-n-4">{text}</p>}
    </div>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  tag: PropTypes.string,
};

export default Heading;
