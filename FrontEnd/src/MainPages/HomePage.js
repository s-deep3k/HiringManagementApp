// put sign up logic in this page. If any css files need to be created Put it in the same folder
import React from "react";
import Lottie from "react-lottie";
import * as animeData1 from "../animations/Lottie/27562-searching-for-profile.json";
import * as animeData2 from "../animations/Lottie/52353-hire-me.json";
const Home = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animeData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animeData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="absolute inset-y-0 right-0 h-2/3 w-1/3 mr-15 mt-16">
        <Lottie options={defaultOptions1} height={400} width={500} />
        <Lottie options={defaultOptions2} height={200} width={200} />
      </div>
      <div className="container z-40 relative">
        <p className="text-7xl mx-16 mt-32 font-sans leading-normal font-bold">
          Find Your Dream Job <br /> Right Away <br />
          <span className="text-white">Explore Jobs</span> near you!
        </p>
      </div>
      <div className="z-30 -mt-[6.5rem] bg-blue-600 text-right rounded-full h-28 w-32.3 absolute ml-2"></div>
      <p className="text-base ml-[66px] py-1 font-sans font-bold mt-10">
        Login to find the job that suits you the best.
      </p>
    </>
  );
};

export default Home;
