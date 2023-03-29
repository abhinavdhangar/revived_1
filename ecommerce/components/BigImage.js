import React from "react";
const SquareImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-1/2  object-cover" />;
};

export default SquareImage;
