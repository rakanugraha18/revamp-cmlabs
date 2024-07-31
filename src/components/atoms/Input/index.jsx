import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = ({ type, placeholder, value, onChange, size, color, width }) => {
  const baseStyles = "font-semibold focus:outline-none rounded-[15px]";

  const sizeStyles = classNames({
    "h-[40px]": size === "small",
    "h-[45px]": size === "medium",
    "h-[50px]": size === "large",
  });

  const colorStyles = classNames({
    "border-[#16697A] focus:ring-[#16697A]": color === "default",
    "border-red-300 focus:ring-red-500": color === "red",
    "border-green-300 focus:ring-green-500": color === "green",
  });

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width }}
      className={`px-2 py-2 border rounded-[15px] focus:outline-none focus:ring-2 ${sizeStyles} ${baseStyles} ${colorStyles}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["default", "red", "green"]),
  width: PropTypes.string,
};

Input.defaultProps = {
  size: "large",
  color: "default",
  width: "508px",
};

export default Input;
