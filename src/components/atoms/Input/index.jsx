import InputText from "./InputText";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placeholder, onChange, value, id, htmlFor } =
    props;
  return (
    <div className="mb-3">
      <Label htmlFor={htmlFor}>{label}</Label>
      <InputText
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        type={type}
      />
    </div>
  );
};

export default InputForm;

// import React from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";

// const Input = ({
//   type,
//   placeholder,
//   value,
//   onChange,
//   size,
//   color,
//   width,
//   responsiveSize,
// }) => {
//   const baseStyles = "font-semibold focus:outline-none rounded-[15px]";

//   const sizeStyles = classNames({
//     "h-[38px]": size === "small",
//     "h-[45px]": size === "medium",
//     "h-[50px]": size === "large",
//   });

//   const responsiveStyles = classNames({
//     "md:h-[45px] lg:h-[50px]": responsiveSize === "md-lg",
//     "md:h-[50px] lg:h-[55px]": responsiveSize === "lg-xl",
//   });

//   const colorStyles = classNames({
//     "border-[#16697A] focus:ring-[#16697A]": color === "default",
//     "border-red-300 focus:ring-red-500": color === "red",
//     "border-green-300 focus:ring-green-500": color === "green",
//   });

//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       style={{ width }}
//       className={`px-2 py-2 border rounded-[15px] focus:outline-none focus:ring-2 ${sizeStyles} ${responsiveStyles} ${baseStyles} ${colorStyles}`}
//     />
//   );
// };

// Input.propTypes = {
//   type: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   color: PropTypes.oneOf(["default", "red", "green"]),
//   width: PropTypes.string,
//   responsiveSize: PropTypes.oneOf(["md-lg", "lg-xl"]), // New prop
// };

// Input.defaultProps = {
//   size: "large",
//   color: "default",
//   responsiveSize: "md-lg", // Default responsive size
// };

// export default Input;
