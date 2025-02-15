"use client";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { IoBag } from "react-icons/io5";
import "react-modern-drawer/dist/index.css";
import { IoIosMenu } from "react-icons/io";

import { CiCircleCheck } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { DashboardData } from "./DashboardNavbar";
import LayoutBar from "./LayoutBar";


const MobileLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useLocation();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const routesData = DashboardData || []

  return (
    <>
      <div className="w-full px-3 py-3 lg:hidden">
        <div className="flex items-center justify-between">
          <button
            onClick={toggleDrawer}
            className="hover:bg-foundation/60 p-2 text-xl"
          >
            <IoIosMenu />
          </button>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className="flex h-full w-full flex-col justify-between bg-white py-10 drop-shadow-sm overflow-y-auto lg:hidden">
            {/* user */}
            <div className="pl-4">
              <div className="">
                <Link to="/" className="flex gap-3">
                  <IoBag className="text-primary" />
                  <h4>Parcel Trade</h4>
                </Link>
              </div>

              <div className="pb-5 mb-6 border-b">
                <h3 className="font-semibold my-2 text-lg">
                  Hello {"Junayet Shiblu"}
                </h3>
                <p className="text-gray-400 text-sm">{'jsjunayet123@gmail.com'}</p>
                <div className="flex items-center mt-2">
                  <span className="px-3 py-1 font-semibold rounded-md text-sm">
                    {'000'}
                    <span className="font-medium ms-1">BDT</span>
                  </span>
                  <span className="text-xl text-green-500">
                    <CiCircleCheck />
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col">
                <div className="mb-5 flex flex-col gap-2">
                  <div className="flex flex-col gap-3 text-[14px] text-[#637381]">
                    {routesData?.map((item, _id) => {
                      const isActive = router.pathname === item?.route;
                      return item?.underRoutes ? (
                        <LayoutBar item={item} key={_id} />
                      ) : (
                        <Link
                          key={_id}
                          className={`flex items-center gap-2 hover:bg-secondary ${
                            isActive
                              ? "bg-secondary p-2 rounded-lg"
                              : "p-2 rounded-lg"
                          }`}
                          to={item?.route}
                        >
                          {item?.icon} {item?.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MobileLayout;
