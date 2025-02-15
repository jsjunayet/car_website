
import {
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { useState } from 'react';




const LoginForm = () => {
//   const router = useRouter();
//   const axiosUser = useAxiosUser();
//   const dispatch = useDispatch();
//   const [loginUser, { isLoading }] = useLoginUserMutation();

  const [showPassword, setShowPassword] = useState(false);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const formData = new FormData(event.currentTarget);
//       const email = formData.get('email');
//       const password = formData.get('password');
//       const payload = { email, password };

//       // Show loading toast
//       const toastId = toast.loading('Logging in...');
      
      

//       const response = await loginUser(payload);

//       if (response?.data?.success) {
//         dispatch(
//           setCredentials({
//             user: response?.data?.data,
//             token: response?.data?.data?.accessToken,
//             refreshToken: response?.data?.data?.refreshToken,
//           })
//         );
//         setLocalStorage('user', response?.data?.data);
//         toast.update(toastId, {
//           render: 'Logged in successfully!',
//           type: 'success',
//           isLoading: false,
//           autoClose: 3000,
//         });
//         event.target.reset();
//         const redirectPath = getLocalStorage('redirectPath') || '/';
//         removeLocalStorage('redirectPath');
//         router.push(redirectPath); // Redirect after successful login
//       } else {
//         toast.update(toastId, {
//           render: response?.error?.data?.message || 'Login failed',
//           type: 'error',
//           isLoading: false,
//           autoClose: 3000,
//         });
//         event.target.reset();
//       }
//     } catch (err) {
//       console.log(err);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: err?.response?.error?.message || 'Something went wrong!',
//         footer: `<a href="#">${err.message}</a>`,
//       });
//     }
//   };

  return (
    <div className="flex items-center justify-center h-screen px-5 bg-gradient-to-r from-gray-200 to-blue-200">
      <div className="mx-auto bg-white rounded-xl overflow-hidden w-full md:flex md:w-[800px] h-[480px]">
        <div className="hidden w-1/2 h-full md:flex">
          <img src={'../../../src/assets/3d-car-with-vibrant-colors.jpg'} alt="" />
        </div>
        <div className="flex items-center justify-center w-full md:w-3/5">
          <form
            // onSubmit={handleFormSubmit}
            className="flex flex-col justify-between flex-grow w-full"
          >
            <div className="flex flex-col items-center justify-center">
              <div className=" max-w-[400px] p-3 pt-10 md:pt-20 w-full bg-white rounded-lg ">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Welcome to CarBazaar
                  </p>
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Your Email
                    </label>
                    <Input
                      placeholder="Enter your email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full  p-2.5"
                      required
                      name="email"
                      type="text"
                    />
                  </div>
                  <div className="relative">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <Input
                      placeholder="Enter your password "
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                      required
                      name="password"
                      type={showPassword ? 'text' : 'password'}
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

                  {/* Remember Password and Forgot Password */}
                  <div className="items-center justify-between mt-2 md:flex">
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
            {/* Bottom section for "Don't have an account?" and "Sign In" */}
            <div className="items-center md:justify-between justify-center lg:mt-16 md:ml-8 flex gap-7 lg:flex-row flex-col max-w-[400px] mx-auto text-center">
              <p className="flex flex-col items-center justify-center w-full text-center lg:flex-row lg:justify-start">
                <span className="text-slate-700">Don’t have an account?</span>
                <Link
                  className="ml-1 text-primary hover:underline"
                  to="/register"
                >
                  Register Now
                </Link>
              </p>
              <button
                type="submit"
                className="px-6 py-3 text-white rounded-tl-lg rounded-br-lg lg:self-end bg-primary"
                // disabled={isLoading}
              >
               Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;