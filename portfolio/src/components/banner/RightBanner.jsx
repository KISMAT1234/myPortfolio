import React from 'react'
import  kismatImage  from "../../assets/kismat.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center">
      <img
        className=" h-[400px]  lgl:h-[500px] z-10"
        src={kismatImage}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner