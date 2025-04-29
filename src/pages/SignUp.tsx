import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
import { SignupValidation } from "../validation";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = SignupValidation(data);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== ""
    );
    if (hasErrors) return;

    setIsLoading(true);
    try {
      const { status } = await axiosInstance.post("auth/local/register", data);
      if (status === 200) {
        toast.success(
          "You will navigate to the login page after 1 seconds to login",
          {
            position: "bottom-center",
            duration: 1500,
            style: {
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
            },
          }
        );
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[url('src/assets/authentication/signup.jpg')] bg-cover bg-center w-full h-screen flex justify-center items-center">
      <div className="w-[400px] h-[500px] rounded-xl p-8 text-gray-100 bg-white/30">
        <p className="text-center text-2xl font-bold">Sign Up</p>
        <form className="mt-3" onSubmit={submitHandler}>
          <div className="mt-1 text-sm leading-5">
            <label htmlFor="username" className="block text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="bg-white/30 w-full rounded-md border border-gray-700 outline-none px-4 py-3 text-gray-100 placeholder-white "
              value={data.username}
              onChange={onchangeHandler}
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          <div className="mt-3 text-sm leading-5">
            <label htmlFor="email" className="block text-gray-400 mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-white/30 w-full rounded-md border border-gray-700 outline-none px-4 py-3 text-gray-100 placeholder-white "
              value={data.email}
              onChange={onchangeHandler}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mt-3 text-sm leading-5">
            <label htmlFor="password" className="block text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="bg-white/30 w-full rounded-md border border-gray-700 outline-none px-4 py-3 text-gray-100 placeholder-white "
              value={data.password}
              onChange={onchangeHandler}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mx-auto flex justify-center mt-5">
            <button className="bg-red-600 text-white w-[150px] h-[40px] rounded-full font-semibold flex items-center justify-center">
              {isLoading ? "loading..." : "Sign Up"}
            </button>
          </div>
        </form>

        <div className="flex items-center pt-4">
          <div className="flex-1 h-px bg-gray-700" />
          <p className="px-3 text-sm text-gray-400">
            Sign up with social accounts
          </p>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        <div className="flex justify-center mt-2">
          {/* ... same social buttons as before ... */}
        </div>

        <p className="text-center text-xs text-gray-400 mt-2">
          Have an account?
          <a
            href="/login"
            className="text-[#F01111] font-semibold ml-1 hover:underline hover:text-purple-300"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
