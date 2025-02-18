
import { PiGreaterThanLight } from "react-icons/pi";
import img from "../../../../src/assets/Dashboard/choices.png";
import img4 from "../../../../src/assets/Dashboard/transaction.png";
import img2 from "../../../../src/assets/Dashboard/clipboard.png";
import img3 from "../../../../src/assets/Dashboard/order-history.png";
import img8 from "../../../../src/assets/Dashboard/invite.png";
import img5 from "../../../../src/assets/Dashboard/visitor.png";
import img6 from "../../../../src/assets/Dashboard/visitor-card.png";
import { MdFileDownload } from "react-icons/md";
import { PieCharts } from "./Chart";
import { ChartVar } from "./ChartVar";

const Dashboard = () => {
  return (
    <div className=" p-4 space-y-4">
      <div className="flex justify-between sm:flex-row flex-col items-center gap-2">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>
          <ul className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-blue-500">
                Dashboard
              </a>
            </li>
            <PiGreaterThanLight />

            <li>
              <a href="#" className="text-blue-600 dark:text-blue-400 active">
                Home
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="flex items-center bg-blue-500 text-white px-4 gap-1 justify-center py-2 rounded-lg hover:bg-blue-600 transition sm:w-48 w-full"
        >
          <MdFileDownload className=" text-xl" />
          <span>Export Report</span>
        </a>
      </div>

      {/* Summary Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <img
            
            src={img6}
            alt="hello"
            className="h-16 w-16"
          ></img>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              ~450
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {" "}
              Total Visitors Today
            </p>
          </div>
        </li>
        <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <img
            
            src={img5}
            alt="hello"
            className="h-16 w-16"
          ></img>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              ~15,000
            </h3>
            <p className="text-gray-600 dark:text-gray-400"> This Month Visitors</p>
          </div>
        </li>
        <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <img
            
            src={img8}
            alt="hello"
            className="h-16 w-16"
          ></img>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              325
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {" "}
              New Accounts This Month
            </p>
          </div>
        </li>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className=" space-y-[18px]">
          <li className="flex h-40 border justify-center items-center   bg-white dark:bg-gray-800 rounded-xl shadow-md ">
            <img
              
              src={img}
              width={60}
              height={80}
              alt="hello"
              className="h-16 w-16"
            ></img>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                1200
              </h3>
              <p className="text-gray-600 dark:text-gray-400">This Month Orders</p>
            </div>
          </li>
          <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-2">
            <img
              
              src={img2}
              width={60}
              height={80}
              alt="hello"
              className="h-16 w-16"
            ></img>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                200
              </h3>
              <p className="text-gray-600 dark:text-gray-400"> Today Orders</p>
            </div>
          </li>
        </div>
        <div className=" space-y-[18px]">
          <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-2">
            <img          
              src={img3}
              alt="hello"
              className="h-16 w-16"
            ></img>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                21
              </h3>
              <p className="text-gray-600 dark:text-gray-400"> Pending Orders</p>
            </div>
          </li>
          <li className="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
            <img           
              src={img4}
              alt="hello"
              className="h-16 w-16"
            ></img>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                15,000 BDT
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {" "}
                Month Transactions
              </p>
            </div>
          </li>
        </div>

        <div className="">
          <PieCharts/>
        </div>
      </div>
      <div>
        <ChartVar />
      </div>
    </div>
  );
};

export default Dashboard;
