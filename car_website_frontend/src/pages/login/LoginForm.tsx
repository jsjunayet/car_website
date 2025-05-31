/* eslint-disable @typescript-eslint/no-explicit-any */

import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import loginImg from "../../../src/assets/3d-car-with-vibrant-colors (1).jpg";
import { Input } from "../../components/ui/input";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setuser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks/app";

type DecodedToken = {
  userId: string;
};

const LoginForm = () => {
  const toastId = "Loading....";
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const redirectTo = (location.state as any)?.from || "/";

  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
      const payload = { email, password };
      const res = await login(payload).unwrap();
      if (res?.data) {
        const decoded = jwtDecode<DecodedToken>(res.data);
        console.log(decoded);
        dispatch(setuser({ token: res.data, user: decoded.userId }));
        navigate(redirectTo);
        toast.success("Successfully logged in!", { id: toastId });
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      toast.error(`Error: ${err?.data?.message || err.message}`, {
        id: toastId,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-5 bg-gradient-to-r from-gray-200 to-blue-200">
      <div className="mx-auto bg-white rounded-xl overflow-hidden w-full md:flex md:w-[800px] md:h-[530px] h-[500px]">
        <div className="hidden w-1/2 h-full md:flex">
          <img src={loginImg} alt="login" />
        </div>
        <div className="flex items-center justify-center w-full md:w-3/5">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col justify-between flex-grow w-full"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="max-w-[400px] p-3 pt-10 w-full bg-white rounded-lg">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Welcome to CarBazaar
                  </p>

                  {/* Shortcut Buttons for Credentials */}
                  <div className="flex justify-between mb-2">
                    <button
                      type="button"
                      onClick={() => {
                        const emailInput =
                          document.querySelector<HTMLInputElement>(
                            'input[name="email"]'
                          );
                        const passwordInput =
                          document.querySelector<HTMLInputElement>(
                            'input[name="password"]'
                          );
                        if (emailInput && passwordInput) {
                          emailInput.value = "junayetshiblu09@gmail.com";
                          passwordInput.value = "123456";
                        }
                      }}
                      className="text-sm px-2 py-1 bg-green-200 rounded hover:bg-green-300"
                    >
                      Fill User Credentials
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const emailInput =
                          document.querySelector<HTMLInputElement>(
                            'input[name="email"]'
                          );
                        const passwordInput =
                          document.querySelector<HTMLInputElement>(
                            'input[name="password"]'
                          );
                        if (emailInput && passwordInput) {
                          emailInput.value = "junayetadmin@gmail.com";
                          passwordInput.value = "12345";
                        }
                      }}
                      className="text-sm px-2 py-1 bg-orange-200 rounded hover:bg-orange-300"
                    >
                      Fill Admin Credentials
                    </button>
                  </div>

                  {/* Email Field */}
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Your Email
                    </label>
                    <Input
                      placeholder="Enter your email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      required
                      name="email"
                      type="text"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <Input
                      placeholder="Enter your password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      required
                      name="password"
                      type={showPassword ? "text" : "password"}
                    />
                    <div
                      className="absolute right-0 flex items-center pr-3 cursor-pointer inset-y-12"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-500" />
                      ) : (
                        <FaEye className="text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* Remember & Forgot Password */}
                  <div className="items-center justify-between mt-2 flex">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm text-gray-600"
                      >
                        Remember Me
                      </label>
                    </div>
                    <Link
                      to="/forget-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forget Password?
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="md:mx-7 mx-4 space-y-5">
              <p className="flex justify-between">
                <span className="text-slate-700">Don’t have an account?</span>
                <Link
                  className="ml-1 hover:underline text-blue-700"
                  to="/register"
                >
                  Register Now
                </Link>
              </p>

              {/* Login Button */}
              <button
                type="submit"
                className="px-6 py-3 cursor-pointer w-full text-white rounded-tl-lg rounded-br-lg bg-blue-600"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>

              {/* Back to Home Button */}
              <Link
                to="/"
                className="block text-center px-6 py-3 text-blue-600 border border-blue-600 rounded-tl-lg rounded-br-lg hover:bg-blue-50"
              >
                ← Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
