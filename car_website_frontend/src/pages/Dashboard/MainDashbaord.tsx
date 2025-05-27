import { Outlet } from "react-router-dom";
import AdminHeader from "../home/AdminHeader";
import DashboardLayout from "./DashboardLayout";
import MobileLayout from "./share/MobileLayout";

const MainDashbaord = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-[280px] hidden lg:block">
        <DashboardLayout />
      </div>
      <MobileLayout />
      <div className="flex-1">
        <AdminHeader />
        <div className=" w-full pb-5 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainDashbaord;
