import MobileLayout from "./share/MobileLayout";
import DashboardLayout from './DashboardLayout';
import { Outlet } from "react-router-dom";

const MainDashbaord = () => {
    return (
        <div className="flex flex-col lg:flex-row">
      <div className="lg:w-[310px] hidden lg:block">
        <DashboardLayout />
      </div>
      <MobileLayout />
      <div className="lg:w-[calc(100%-185px)] w-full pb-5"><Outlet/></div>
    </div>
    );
};

export default MainDashbaord;