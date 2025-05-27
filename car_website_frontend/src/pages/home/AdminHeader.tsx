"use client";
import { Button } from "@/components/ui/button";
import { Download, LogOut, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { logout } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks/app";

const AdminHeader = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="border-b h-16 bg-primary/80 text-white px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-medium hidden md:block">Dashbaord</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Download button */}
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-slate-600"
        >
          <Download className="h-5 w-5" />
        </Button>

        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-slate-600"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Profile link */}
            <DropdownMenuItem asChild>
              <Link to="/profile">Profile</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Logout button */}
            <DropdownMenuItem asChild>
              <button
                onClick={handleLogout}
                className="w-full flex items-center text-left"
              >
                <LogOut className="h-4 w-4 mr-2" />
                <span>Log out</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AdminHeader;
