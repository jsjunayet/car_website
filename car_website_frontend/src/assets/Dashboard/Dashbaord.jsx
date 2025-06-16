import img from "@/assets/dashbaord/choices.png";
import img2 from "@/assets/dashbaord/clipboard.png";
import img8 from "@/assets/dashbaord/invite.png";
import img3 from "@/assets/dashbaord/order-history.png";
import img4 from "@/assets/dashbaord/transaction.png";
import img6 from "@/assets/dashbaord/visitor-card.png";
import img5 from "@/assets/dashbaord/visitor.png";
import Image from "next/image";
import { MdFileDownload } from "react-icons/md";
import { PiGreaterThanLight } from "react-icons/pi";
import { PieCharts } from "./Piechart";

const Dashboard = () => {
  const { data } = useGetAllRevinewQuery();

  return (
    <div className=" mx-10 space-y-4">
      <div class="flex justify-between sm:flex-row flex-col items-center gap-2">
        <div class="space-y-2">
          <h1 class="text-4xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>
          <ul class="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" class="hover:text-blue-500">
                Dashboard
              </a>
            </li>
            <PiGreaterThanLight />

            <li>
              <a href="#" class="text-blue-600 dark:text-blue-400 active">
                Home
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          class="flex items-center bg-blue-500 text-white px-4 gap-1 justify-center py-2 rounded-lg hover:bg-blue-600 transition sm:w-48 w-full"
        >
          <MdFileDownload className=" text-xl" />
          <span>Export Report</span>
        </a>
      </div>

      {/* Summary Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li class="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <Image
            unoptimized
            src={img6}
            width={60}
            height={80}
            alt="hello"
            className="h-16 w-16"
          ></Image>
          <div>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
              {data?.data?.totalRevenue}
            </h3>
            <p class="text-gray-600 dark:text-gray-400"> Total Revenue</p>
          </div>
        </li>
        <li class="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <Image
            unoptimized
            src={img5}
            width={60}
            height={80}
            alt="hello"
            className="h-16 w-16"
          ></Image>
          <div>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
              ~00
            </h3>
            <p class="text-gray-600 dark:text-gray-400"> This Month Visitors</p>
          </div>
        </li>
        <li class="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
          <Image
            unoptimized
            src={img8}
            width={60}
            height={80}
            alt="hello"
            className="h-16 w-16"
          ></Image>
          <div>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
              {data?.data?.userCount}
            </h3>
            <p class="text-gray-600 dark:text-gray-400"> Our Website Users</p>
          </div>
        </li>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className=" space-y-[18px]">
          <li class="flex h-40 border justify-center items-center   bg-white dark:bg-gray-800 rounded-xl shadow-md ">
            <Image
              unoptimized
              src={img}
              width={60}
              height={80}
              alt="hello"
              className="h-16 w-16"
            ></Image>
            <div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                {data?.data?.monthOrders}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">This Month Orders</p>
            </div>
          </li>
          <li class="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-2">
            <Image
              unoptimized
              src={img2}
              width={60}
              height={80}
              alt="hello"
              className="h-16 w-16"
            ></Image>
            <div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                {data?.data?.todayOrders}
              </h3>
              <p class="text-gray-600 dark:text-gray-400"> Today Orders</p>
            </div>
          </li>
        </div>
        <div className=" space-y-[18px]">
          <li class="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-2">
            <Image
              unoptimized
              src={img3}
              width={60}
              height={80}
              alt="hello"
              className="h-16 w-16"
            ></Image>
            <div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                21
              </h3>
              <p class="text-gray-600 dark:text-gray-400"> Pending Orders</p>
            </div>
          </li>
          <li class="flex h-40 border items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md space-x-4">
            <Image
              unoptimized
              src={img4}
              width={60}
              height={80}
              alt="hello"
              className="h-16 w-16"
            ></Image>
            <div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                15,000 BDT
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                {" "}
                Month Transactions
              </p>
            </div>
          </li>
        </div>

        <div className="">
          <PieCharts />
        </div>
      </div>

      {/* Visitors and Accounts Summary Section */}

      {/* <div>
        <Chart />
      </div> */}
    </div>
  );
};

export default Dashboard;
