/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState, MouseEvent } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "../../src/components/ui/avatar"
import Drawer from "react-modern-drawer";
import { IoIosClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "react-modern-drawer/dist/index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { useAppDispatch, useAppSelector } from "../redux/hooks/app";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { logout } from "../redux/features/auth/authSlice";
import { useGetsigleuserQuery } from "../redux/features/auth/authApi";

const Navdata = [
  { title: "Home", route: "/" },
  { title: "All Products", route: "/allproduct" },
  { title: "About", route: "/about" },
];

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const {data}=useGetsigleuserQuery(undefined,{
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  })
  const token = useAppSelector(state=>state.auth.token)
  const dispatch = useAppDispatch()
 


  const searchRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const handleLogout = () => {
    dispatch(logout());
  }; 
  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutside = (event: MouseEvent<Document>) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setShowSearch(false);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const navigate = useNavigate();
  
  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/allproduct?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.addEventListener("mousedown", handleClickOutside as any);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, []);

  return (
    <div className="">
      <div className="sticky top-0 z-50 py-5 px-2 md:mx-0 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-4 justify-center items-center">
            {isDrawerOpen ? (
              <IoClose className="block md:hidden cursor-pointer" onClick={handleDrawerToggle} />
            ) : (
              <FaBars className="block md:hidden cursor-pointer" onClick={handleDrawerToggle} />
            )}
            <Link to="/">
              <h1 className="text-2xl font-semibold cursor-pointer text-blue-600  ">CarBazaar</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-5">
            {Navdata.map((item, key) => (
              <Link
                to={item.route}
                className="relative text-lg cursor-pointer group"
                key={key}
              >
                {item.title}
                {/* Show the hover effect only on active link */}
                <div
                  className={`h-[1.6px] w-0 group-hover:w-full transition-all duration-500 
                  bg-gradient-to-l from-transparent to-primary ${
                    location.pathname === item.route ? "w-full " : "w-0"
                  }`}
                ></div>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center justify-center  gap-3">
            {/* Search button */}
            {!showSearch && (
              <IoIosSearch onClick={handleSearchToggle} className="text-2xl cursor-pointer text-gray-500 md:hidden block" />
            )}

            <div ref={searchRef} className={`relative w-full md:w-[320px] pb-1 md:block hidden`}>
                        <Input
              type="text"
              className="z-50 pr-8 rounded-full shadow-sm border p-2 w-full"
              placeholder="Search by name or brand or categories"
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              value={searchQuery}
            />

              <IoIosSearch className="absolute z-10 text-2xl text-gray-500 pointer-events-none right-2 top-2" />
            </div>

            <div className="flex items-center gap-4 text-xl">
              <div className="relative">
              {token ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer md:w-9 md:h-9 w-8 h-8">
              <AvatarImage src={data?.data?.photo||"https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" >
            {
              data?.data?.role =="admin"? 
                <DropdownMenuItem asChild>
              <Link className=" cursor-pointer" to="/dashboard">AdminDashboard</Link></DropdownMenuItem>:
           <DropdownMenuItem asChild>
              <Link className=" cursor-pointer" to="/profile">UserDashboard</Link>
            </DropdownMenuItem>
        
            }
          
           
            <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="/login">
          <CiLogin className="text-gray-500 size-6" />
        </Link>
      )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render search input for mobile */}
      {showSearch && (
        <div ref={searchRef} className="relative w-full mt-0 md:hidden">
          <Input
            type="text"
            className="z-50 pr-8 shadow-sm border p-2 w-full"
            placeholder="Search by name or brand or category"
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
            value={searchQuery}
          />
          <IoIosSearch className="absolute z-10 text-2xl text-gray-500 pointer-events-none right-2 top-2" />
        </div>
      )}

      {/* Mobile Drawer */}
      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        direction="right"
        className="p-4 w-64"
        overlayOpacity={0.5}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="text-2xl font-semibold cursor-pointer">
            Exclusive
          </Link>
          <button onClick={handleDrawerToggle}>
            <IoIosClose className="text-3xl text-gray-700" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex flex-col gap-4">
        {Navdata.map((item, key) => (
              <Link
                to={item.route}
                className="relative text-lg cursor-pointer group"
                key={key}
              >
                {item.title}
                {/* Show the hover effect only on active link */}
                <div
                  className={`h-[1.6px] w-0 group-hover:w-full transition-all duration-500 
                  bg-gradient-to-l from-transparent to-primary ${
                    location.pathname === item.route ? "w-full" : "w-0"
                  }`}
                ></div>
              </Link>
            ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
