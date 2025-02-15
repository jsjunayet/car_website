

import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";


export default function BannerLayout() {
  return (

    <div className="flex flex-col gap-4   md:flex-row container  px-0 no-padding">
      <div className="h-[160px] md:h-80 xl:h-[calc(100vh-420px)] 2xl:max-h-[350px] max-h-[315px] lg:w-8/12  w-full bg-gray-300 md:rounded-md rounded-none overflow-hidden shadow-lg">
        <LeftBanner />
      </div>
      <div className="hidden lg:block h-80 xl:h-[calc(100vh-420px)] 2xl:max-h-[350px] max-h-[315px]  md:w-4/12  w-full bg-gray-300  md:rounded-md rounded-none overflow-hidden shadow-lg">
        <RightBanner />
      </div>
    </div>

  );
}