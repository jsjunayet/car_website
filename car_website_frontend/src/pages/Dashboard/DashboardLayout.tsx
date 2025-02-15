import { useState } from "react";
import { ProfileData } from "./share/DashboardNavbar";
import { Link, useLocation } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import LayoutBar from "./share/LayoutBar";



const DesktopLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useLocation();

  const menuData =  ProfileData;
  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 h-screen w-72 flex flex-col justify-between border-r bg-white drop-shadow-sm">
        <div className="px-8">
          <div className="">
            <Link to="/" className="flex gap-2 items-center justify-center">
             <img src={'../../../src/assets/car.png'} alt="logo" width={100} height={100}/>
            </Link>
          </div>
          <div className="pb-5 mb-6 border-b">
            <h3 className="font-semibold text-lg">
              {/* {loading ? (
                <div className="h-5 w-56 bg-gray-200 animate-pulse rounded mb-2"></div>
              ) : (
                <span className="uppercase">{user?.name}</span>
              )} */}
            <span className="uppercase">{'Junayet Shiblu'}</span>

            </h3>
            <div className="text-gray-400">
              {/* {loading ? (
                <div className="h-5 w-48 bg-gray-200 animate-pulse rounded"></div>
              ) : (
                user?.email
              )} */}
              <span>{"jsjunayet123@gmail.com"}</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="px-3 py-1 font-semibold rounded-md text-sm">
                0.00
                <span className="font-medium ms-1">BDT</span>
              </span>
              <span className="text-xl text-green-500">
                <CiCircleCheck />
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation Menu */}
        <div
          className="flex-grow overflow-y-auto px-8"
          style={{
            scrollbarWidth: "thin",
            msOverflowStyle: "auto",
            // scrollbarWidth: "none",
          }}
        >
          <div className="flex flex-col gap-2 mb-5">
            <div className="flex flex-col gap-5 mt-3 text-lg">
              {menuData?.map((item, _id) => {
                const isActive = router.pathname === item?.route;

                return item?.underRoutes ? (
                  <LayoutBar item={item} key={_id} />
                ) : (
                  <Link
                    key={_id}
                    className={`flex items-center gap-2 hover:bg-secondary ${
                      isActive ? "bg-secondary p-2 rounded-lg" : "p-2 rounded-lg"
                    }`}
                    to={item?.route}
                    onClick={() => setIsMenuOpen(false)} 
                  >
                    <span className="text-2xl">{item?.icon}</span>
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;