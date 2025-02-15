
import { useEffect, useRef, useState, MouseEvent } from 'react';
import {  IoIosSearch } from 'react-icons/io';
import { CiLogin } from "react-icons/ci";
import { PiShoppingCartThin } from 'react-icons/pi';
import { FaBars } from "react-icons/fa6";
import Drawer from 'react-modern-drawer';
import { IoIosClose } from 'react-icons/io';
import { IoClose } from "react-icons/io5";
import 'react-modern-drawer/dist/index.css';
import { Link } from 'react-router-dom';
import { Input } from '../components/ui/input';

const Navdata = [
  { title: "Home", route: "/" },
  { title: "All Products", route: "/allproduct" },
  { title: "About", route: "/about" },
];

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const searchRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.addEventListener('mousedown', handleClickOutside as any);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.removeEventListener('mousedown', handleClickOutside as any);
    };
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-50 py-5 bg-white shadow-sm">
        <div className=" max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-4 justify-center items-center">
            {isDrawerOpen ? (
              <IoClose className="block md:hidden cursor-pointer" onClick={handleDrawerToggle} />
            ) : (
              <FaBars className="block md:hidden cursor-pointer" onClick={handleDrawerToggle} />
            )}
            <Link to="/" >
             <h1 className="text-2xl font-semibold cursor-pointer">CarBazaar</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="items-center hidden gap-5 lg:flex">
            {Navdata.map((item, key) => (
              <Link
                to={item.route}
                className="text-lg border-b-2 border-white cursor-pointer hover:border-black"
                key={key}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            {/* Search button */}
            {!showSearch && (
              <IoIosSearch onClick={handleSearchToggle} className="text-2xl cursor-pointer text-gray-500 md:hidden block" />
            )}

            <div ref={searchRef} className={`relative w-full md:w-[320px] pb-1 md:block hidden`}>
              <Input
                type="text"
                className="z-50 pr-8 rounded-full shadow-sm border p-2 w-full"
                placeholder="Search by name"
                onChange={handleSearchChange}
                value={searchQuery}
              />
              <IoIosSearch className="absolute z-10 text-2xl text-gray-500 pointer-events-none right-2 top-2" />
            </div>

            <div className="flex items-center gap-4 text-xl">
              <div className="relative">
                <Link to="/cart">
                  <PiShoppingCartThin className="size-6 text-gray-500" />
                </Link>
              </div>
              <div className="relative">
                <Link to="/login">
                <CiLogin className="text-gray-500 size-6" />
                </Link>
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
            placeholder="Search by name"
            onChange={handleSearchChange}
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
              key={key}
              onClick={handleDrawerToggle}
              className="block text-lg font-medium text-gray-700 border-b-2 border-white cursor-pointer hover:border-black transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
