import React from 'react'

const SquareImage = ({ src, alt }) => {
  return (
    <div className="w-1/2 rounded-md overflow-hidden">
      <Image src={src} alt={alt} layout="responsive" width={500} height={500} />
    </div>
  );
};

export default SquareImage