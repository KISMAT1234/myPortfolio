import React from 'react'
import  kismatImage  from "../../assets/kismat.jpg";

const RightBanner = () => {
  return (
    <div className="w-80 h-80 rounded-full overflow-hidden xl:ml-60 ">
      <img
        className=" object-cover w-full h-full z-10"
        src={kismatImage}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner