import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";

const Button = (props) => {
  const { type, children, classname = "#16697A" } = props;
  return (
    <button
      type={type}
      className={`w-full text-white font-medium rounded-[40px] text-sm px-5 py-2.5 text-center"
      ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
