import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import registerImg from '../../../src/assets/3d-car-with-vibrant-colors (1).jpg'



const RegisterForm = () => {
  const toastId = 'Loading....'
  const navigate = useNavigate()
  const [register,{isLoading}]=useRegisterMutation()

  const handleRegisterSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name")
      const email = formData.get('email');
      const password = formData.get('password');
      const payload = {name, email, password };  
      const res = await register(payload).unwrap(); 
      console.log(res); 
      if (res?.success) {
        navigate('/login');
        toast.success("Successfully Register !", { id: toastId });
      } else {
        toast.error("please vaild email");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      toast.error(`Error: ${err?.data?.message || err.message}`, { id: toastId });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-5 bg-gradient-to-r from-gray-200 to-blue-200">
      <div className="md:flex mx-auto bg-white rounded-xl overflow-hidden w-full md:w-[750px] h-[450px]">
        <div className="hidden w-1/2 h-full md:flex">
          <img src={registerImg} alt="Register" />
        </div>

        {/* Right side with form */}
        <div className="flex items-center justify-center w-full md:w-3/5">
          <form 
          onSubmit={handleRegisterSubmit} 
          className="flex flex-col justify-between flex-grow">
            <div className="flex flex-col items-center justify-center ">
              <div className="w-full bg-white rounded-lg">
                <div className="p-6 mx-auto ml-0 space-y-4 md:ml-0 sm:ml-28 md:space-y-3 sm:p-8">
                  <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-start sm:text-center md:text-2xl">
                    Create an account
                  </p>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                    <Input
                      placeholder="Enter your name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block md:w-full full p-2.5"
                      required
                      name="name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                    <Input
                      placeholder="Enter your email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block md:w-full sm:w-3/4 w-full p-2.5"
                      required
                      name="email"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <Input
                      placeholder="Enter password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block md:w-full sm:w-3/4 w-full  p-2.5"
                      required
                      name="password"
                      type="password"
                    /> 
                  </div>

                  <button type="submit" className="py-3 mt-4 w-full  cursor-pointer text-white rounded-lg md:w-full sm:w-3/4 bg-blue-600">
                    {isLoading?'Registering...':'Register'}
                  </button>
                  <p className="flex justify-center space-x-1">
                    <span className="text-slate-700"> Have an account? </span>
                    <a className=" hover:underline text-blue-600" href="/login">Login</a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
