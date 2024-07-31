import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ children, variant, size, alignment, onClick }) => {
  const baseStyles = "font-semibold focus:outline-none rounded-[40px]";

  const variantStyles = classNames({
    "bg-[#16697A] text-white hover:bg-[#16697A]": variant === "primary",
    "bg-green-500 text-white hover:bg-green-600": variant === "success",
    "bg-red-500 text-white hover:bg-red-600": variant === "danger",
  });

  const sizeStyles = classNames({
    "px-2 py-1 text-xs": size === "small",
    "px-4 py-2 text-sm": size === "medium",
    "w-[420px] h-[56px] text-lg": size === "large",
  });

  const alignmentStyles = classNames({
    "justify-center": alignment === "center",
    "justify-start": alignment === "start",
    "justify-end": alignment === "end",
  });

  return (
    <div className={`flex ${alignmentStyles}`}>
      <button
        className={`${baseStyles} ${variantStyles} ${sizeStyles}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "success", "danger"]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  alignment: PropTypes.oneOf(["start", "center", "end"]).isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "medium",
  alignment: "center",
  onClick: () => {},
};

export default Button;
