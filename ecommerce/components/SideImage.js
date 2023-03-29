import React from "react";

export default function App({ src, alt }) {
  return (
        <img src={src} alt={alt} layout="responsive" className="object-cover w-full rounded-md object-cover" />
  );
}
