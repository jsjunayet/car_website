import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Clock,
  Globe,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { useGetsigleuserQuery } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/app";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "All Products", to: "/allproduct" },
  { label: "About", to: "/about" },
  { label: "Service", to: "/service" },
  { label: "Contact Us", to: "/contactus" },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const wishlistItems = useAppSelector((state) => state?.wishlist?.items);

  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: userData } = useGetsigleuserQuery(undefined);
  const data = userData?.data;
  console.log(data);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowMobileSearch(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        scrolled
          ? "shadow-xl bg-white/95 backdrop-blur-md"
          : "bg-white shadow-lg"
      }`}
    >
      {/* Top Layer - Professional Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white border-b border-blue-800/30">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center py-2.5 text-sm">
            {/* Left - Contact Info */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="py-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="group-hover:text-blue-200 transition-colors">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="group-hover:text-blue-200 transition-colors">
                  info@CarBazaar.com
                </span>
              </div>
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="p-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="group-hover:text-blue-200 transition-colors">
                  New York, NY
                </span>
              </div>
            </div>

            {/* Center - Promo Message */}
            <div className=" md:flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-full text-xs font-semibold text-white">
                <Star className="h-3 w-3" />
                <span>FREE SHIPPING ON ORDERS $500+</span>
              </div>
            </div>

            {/* Right - Quick Links & Language */}
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-1 group cursor-pointer">
                <Clock className="h-3.5 w-3.5 group-hover:text-blue-200 transition-colors" />
                <span className="group-hover:text-blue-200 transition-colors">
                  24/7 Support
                </span>
              </div>

              <div className="hidden sm:flex  items-center space-x-1 group cursor-pointer">
                <Globe className="h-3.5 w-3.5 group-hover:text-blue-200 transition-colors" />
                <span className="group-hover:text-blue-200 transition-colors">
                  EN
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-blue-500 rounded-xl p-2 transition-all duration-300"
                onClick={() => navigate("/wishlist")}
              >
                <Heart className="h-5 w-5 text-white hover:text-red-500 transition-colors" />
                {wishlistItems?.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500 hover:bg-red-600 animate-pulse">
                    {wishlistItems?.length}
                  </Badge>
                )}
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-blue-500 rounded-xl p-2 transition-all duration-300"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart className="h-5 w-5 text-white hover:text-blue-500 transition-colors" />
                {/* {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-blue-600 hover:bg-blue-700 animate-pulse">
                    {itemCount}
                  </Badge>
                )} */}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Layer */}
      <div className="bg-white border-b border-gray-100 border ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link
              to="/"
              className="flex items-center justify-between space-x-4 group"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  CarBazaar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-base group rounded-lg hover:bg-blue-50 ${
                    location.pathname === link.to
                      ? "text-blue-600 bg-blue-50"
                      : ""
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      location.pathname === link.to
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></span>
                </Link>
              ))}
              <div className="hidden lg:block flex-1 max-w-[300px] mx-8">
                <form onSubmit={handleSearchSubmit} className="relative group">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search luxury cars, brands, models..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-5 pr-14 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white shadow-sm hover:shadow-md"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="absolute right-2 top-2 bottom-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden hover:bg-blue-50 rounded-xl p-2"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
              >
                <Search className="h-5 w-5 text-gray-600" />
              </Button>

              {/* Wishlist */}

              {/* data Menu */}
              {token ? (
                <p>{data?.name}</p>
              ) : (
                <div className="hidden lg:flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="font-semibold hover:bg-gray-50 rounded-xl px-4"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6 font-semibold"
                    onClick={() => navigate("/register")}
                  >
                    Sign Up
                  </Button>
                </div>
              )}

              {/* Mobile Menu */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="lg:hidden hover:bg-gray-50 rounded-xl p-2"
                  >
                    <Menu className="h-6 w-6 text-gray-600" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[85vh] bg-white/95 backdrop-blur-md">
                  <DrawerHeader className="text-left border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                    <DrawerTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      CarBazaar Menu
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="px-6 pb-8">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-2 mb-8 mt-4">
                      {navLinks.map((link) => (
                        <DrawerClose key={link.to} asChild>
                          <Link
                            to={link.to}
                            className={`text-lg font-semibold py-4 px-4 rounded-xl transition-all duration-300 border-b border-gray-100 hover:bg-blue-50 hover:text-blue-600 ${
                              location.pathname === link.to
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-700"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </DrawerClose>
                      ))}
                    </div>

                    {/* Mobile data Section */}
                    {token ? (
                      <div className="pt-6 border-t border-gray-200 space-y-3">
                        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                          <Avatar className="h-12 w-12 ring-2 ring-white">
                            <AvatarImage src={data?.avatar} alt={data?.name} />
                            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                              {data?.name?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {data?.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {data?.email}
                            </p>
                          </div>
                        </div>
                        <DrawerClose asChild>
                          <Button
                            variant="outline"
                            className="w-full py-3 rounded-xl font-semibold border-red-200 text-red-600 hover:bg-red-50"
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>
                        </DrawerClose>
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                        <DrawerClose asChild>
                          <Button
                            variant="outline"
                            className="w-full py-3 rounded-xl font-semibold border-blue-200 hover:bg-blue-50"
                            onClick={() => navigate("/login")}
                          >
                            Login
                          </Button>
                        </DrawerClose>
                        <DrawerClose asChild>
                          <Button
                            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                            onClick={() => navigate("/register")}
                          >
                            Sign Up
                          </Button>
                        </DrawerClose>
                      </div>
                    )}

                    {/* Mobile Contact Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Contact Us
                      </h4>
                      <div className="flex flex-col space-y-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                          <Phone className="h-4 w-4 text-blue-600" />
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <span>info@CarBazaar.com</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span>New York, NY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showMobileSearch && (
            <div className="lg:hidden py-4 border-t border-gray-100 bg-gray-50/50">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Input
                  type="text"
                  placeholder="Search cars, brands, models..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-5 pr-14 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 bg-white shadow-sm"
                  autoFocus
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-2 bottom-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
