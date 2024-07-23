import React from "react";
import PropTypes from "prop-types";

const SkeletonLoader = ({ width, height }) => {
  return <div className={`bg-gray-300 animate-pulse ${width} ${height}`}></div>;
};

SkeletonLoader.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default SkeletonLoader;
