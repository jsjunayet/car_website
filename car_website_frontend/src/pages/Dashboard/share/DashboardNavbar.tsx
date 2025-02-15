
import { BiCategory } from "react-icons/bi";
import { MdOutlineDashboard, MdOutlinePersonOutline, MdSupportAgent } from "react-icons/md";
import { RiCoupon5Line } from 'react-icons/ri';
import { LuWallet } from 'react-icons/lu';
import { FiUsers } from 'react-icons/fi';
import { TbBoxAlignBottomRight, TbBoxAlignRight } from 'react-icons/tb';
import { BsBoxSeam } from 'react-icons/bs';
import { IoReorderFour } from 'react-icons/io5';
import { CiBadgeDollar, CiWallet } from "react-icons/ci";
import { GoPerson } from 'react-icons/go';
import { GrMenu } from "react-icons/gr";


export const DashboardData = [
      { route: "/dashboard", name: "Dashboard", icon: <MdOutlineDashboard />}, 
      { route: "/dashboard/user", name: "User", icon: <FiUsers />}, 
      { route: "/dashboard/all-transactions", name: "All Transactions", icon: <LuWallet />}, 
      { route: "/dashboard/all-orders", name: "All Orders", icon: <IoReorderFour />}, 
      { route: "/dashboard/cost-calculator", name: "Shipment Cost", icon: <BsBoxSeam />},
      { route: "/dashboard/add-coupon", name: "Add Coupon", icon: <RiCoupon5Line />},
      { route: "/dashboard/categories", name: "Categories", icon: <BiCategory/>},
      { route: "/dashboard/profile", name: "Profile info", icon: <MdOutlinePersonOutline />},
      { route: "/dashboard/add-banner", name: "Add Banner", icon: <TbBoxAlignBottomRight />},
      { route: "/dashboard/add-sideBanner", name: "Add SideBanner", icon: <TbBoxAlignRight />},
      { route: "/dashboard/support", name: "Support", icon: <MdSupportAgent />
      }
];




export const ProfileData = [
    { route: "/profile", name: "Profile info", icon: <GoPerson />},
    { route: "/profile/order", name: "My Order", icon: <GrMenu />},
    { route: "/profile/wallet", name: "Wallet", icon: <CiWallet />},
    { route: "/profile/transaction", name: "Transaction", icon: <CiWallet />},
    { route: "/profile/deposit", name: "Deposit", icon: <CiBadgeDollar />},
];



