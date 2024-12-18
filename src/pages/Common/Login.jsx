import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password=="";
    if (!isEmailValid) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }
   
 
    const url = "http://localhost:8080/users/signin";

    const payload = {
      email: email,
      password: password,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log(data);
    if (!data.success) {
      alert("Invalid Credentials");
      return;
    }
    payload.token = data.jwt;
    payload.id = data.id;
    payload.role = data.role;
    localStorage.setItem("user_details", JSON.stringify(payload));
    if (data.role == "ROLE_ADMIN") {
      navigate("");
    } else if (data.role == "ROLE_SELLER") {
      navigate("/seller-dashboard");
    } else {
      navigate("/buyer-dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center mt-32 p-4 md:p-0">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent flex flex-col gap-4 rounded-3xl p-10 border-2  border-green-700   lg:w-1/3 w-full "
      >
        <h1 className="text-5xl font-semibold text-white text-center">Login Form</h1>
        <p className="font-medium text-lg text-green-600 text-center ">
          Please Enter your details here
        </p>

        <div className=" flex flex-col gap-2 justify-center items-center">
          <label
            htmlFor="email"
            className="text-lg font-medium text-left block text-black"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)}
            className=" text-black w-full border-2 border-gray-100 rounded-xl p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            placeholder="Enter your email"
          />
          {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
        </div>

        <div className="">
          <label
            htmlFor="password"
            className="text-lg font-medium text-left block text-black"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password} // Controlled input
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            className="w-full text-black border-2 border-gray-100 rounded-xl p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            placeholder="Enter your password"
          />
           {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe} // Controlled checkbox
              onChange={(e) => setRememberMe(e.target.checked)} // Update state on change
              className="w-4 h-4 text-green-600 focus:ring-green-500"
            />
            <label
              className="ml-2 text-base font-medium  dark:text-gray-300 text-white"
              htmlFor="remember"
            >
              Remember me
            </label>
          </div>
          <button className="font-medium text-base text-green-600 hover:underline focus:outline-none">
            Forgot password?
          </button>
        </div>

        <div className=" flex flex-col gap-y-4">
          <button
            className="active: scale-[.98] active: duration-75 ease-in-out transition-all hover:scale-[1.01] py-3 rounded-xl bg-green-600 text-white text-lg
          font-bold hover:bg-green-800 hover:border-green-600"
          >
            Sign in
          </button>

          <button
            className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4
          rounded-xl  font-semibold text-lg hover:border-green-600 text-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                fill="#EA4335"
              />
              <path
                d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                fill="#34A853"
              />
              <path
                d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                fill="#4A90E2"
              />
              <path
                d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                fill="#FBBC05"
              />
            </svg>
            Sign in with Google
          </button>

          <div className=" flex justify-center items-center">
            <p className="font-medium text-base text-white">
              Don&apos;t have an account?
            </p>
            <button
              type="button"
              className="text-green-600 text-base font-medium ml-2 hover:underline focus:outline-none"
            >
              <Link to={"/signup"}>SignUp</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
