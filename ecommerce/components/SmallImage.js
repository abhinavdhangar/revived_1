import React from 'react'

export default function App({src,alt}){
    return(

      <img src={src} alt={alt} layout="responsive"  className="w-1/2  rounded-md"  />
   
    )
    
}