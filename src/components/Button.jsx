import PropTypes from "prop-types";

import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  target,
  rel,
  onClick,
  children,
  px,
  sunglow,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${sunglow ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(sunglow)}
    </button>
  );

  const renderLink = () => (
    <a
      href={href}
      target={target || null}
      rel={rel || null}
      className={classes}
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(sunglow)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  px: PropTypes.string,
  sunglow: PropTypes.bool,
};

export default Button;
