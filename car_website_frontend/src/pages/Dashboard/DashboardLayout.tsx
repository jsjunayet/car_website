import { DashboardData, ProfileData } from "./share/DashboardNavbar";
import { Link, useLocation } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import logo from '../../../src/assets/car.png'
// import { useAppSelector } from "../../redux/hooks/app";
// import { jwtDecode } from "jwt-decode";
import { useGetsigleuserQuery } from "../../redux/features/auth/authApi";


const DesktopLayout = () => {
  const router = useLocation();
  const {data}=useGetsigleuserQuery(undefined, { 
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  })
    // const tokens = useAppSelector(state=>state.auth.token);
  // const decode = tokens ? jwtDecode(tokens) : null;
  const menuData = data?.data?.role === 'admin' ? [...DashboardData, ...ProfileData] : ProfileData;
  return (
    <div className="flex h-screen">
      <div className="fixed top-0 left-0 h-screen w-72 flex flex-col justify-between border-r bg-white drop-shadow-sm">
        <div className="px-8">
          <div className="">
            <Link to="/" className="flex gap-2 items-center justify-center">
             <img src={logo} alt="logo" width={100} height={100}/>
            </Link>
          </div>
          <div className="pb-5 mb-6 border-b">
            <h3 className="font-semibold text-lg">
              {/* {loading ? (
                <div className="h-5 w-56 bg-gray-200 animate-pulse rounded mb-2"></div>
              ) : (
                <span className="uppercase">{user?.name}</span>
              )} */}
            <span className="uppercase">{data?.data?.name}</span>

            </h3>
            <div className="text-gray-400">
              {/* {loading ? (
                <div className="h-5 w-48 bg-gray-200 animate-pulse rounded"></div>
              ) : (
                user?.email
              )} */}
              <span>{data?.data?.email}</span>
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
                      return (
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
  );
};

export default DesktopLayout;