import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, variant, onClick }) => {
  const baseStyles =
    "px-4 py-2 font-semibold text-sm rounded-md focus:outline-none";

  const variantStyles = classNames({
    "bg-blue-500 text-white hover:bg-blue-600": variant === "primary",
    "bg-green-500 text-white hover:bg-green-600": variant === "success",
    "bg-red-500 text-white hover:bg-red-600": variant === "danger",
  });

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
