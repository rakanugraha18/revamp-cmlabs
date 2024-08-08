// import React from "react";
// // import PropTypes from "prop-types";
// // import classNames from "classnames";

// const Button = (props) => {
//   const { type, children, classname = "#16697A" } = props;
//   return (
//     <button
//       type={type}
//       className={`w-full text-white font-medium rounded-[40px] text-sm px-5 py-2.5 text-center"
//       ${classname}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;

import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  size = "medium",
  color = "primary",
  classname,
  children,
}) => {
  // Define size classes
  const sizeClasses = {
    small: "w-[145px] h-[34px] text-[14px] px-[32px] py-[16px]",
    medium: "w-[283px] h-[53px] text-[14px] px-[32px] py-[16px]",
    large: "w-[420px] h-[56px] text-[14px] px-[32px] py-[16px]",
    xlarge: "w-[580px] h-[62px] text-[14px] px-[32px] py-[16px]",
  };

  // Define color classes
  const colorClasses = {
    primary: "bg-[#16697A] text-white",
    secondary: "bg-white border-[#16697A] text-[#16697A]",
  };

  return (
    <button
      type={type}
      className={`font-medium rounded-[40px] text-center ${sizeClasses[size]} ${colorClasses[color]} ${classname}`}
    >
      {children}
    </button>
  );
};

// Define PropTypes for validation
Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
};

export default Button;
