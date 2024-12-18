import React from 'react'
import image from "../../assets/images/signupimage.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isLeft, setIsLeft] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

 
  const typingPass = ()=>{
    setShowPassword(true);
    setTimeout(()=>{
        setShowPassword(false);
    },3000)
  }

  const handleLeftClick = () => {
    setIsLeft(true);
  };

  const handleRightClick = () => {
    setIsLeft(false);
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(firstName)) {
      alert("First name must be at least 2 characters long and contain only letters.");
      return false;
    }
    if (!nameRegex.test(lastName)) {
      alert("Last name must be at least 2 characters long and contain only letters.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!contactRegex.test(contactNo)) {
      alert("Contact number must be a 10-digit number.");
      return false;
    }
    if (!terms) {
      alert("You must agree to the terms and conditions.");
      return false;
    }
    return true;
  };

  const handleSubmit = async(e) => {
    const url = "http://localhost:8080/users/signup";
    e.preventDefault();

    const payload = {
      // "firstName": "string",
      // "lastName": "string",
      // "email": "string",
      // "contactNO": "string",
      // "password": "string",
      // "role": "ROLE_ADMIN"

      firstName,
      lastName,
      email,
      contactNo,
      password,
      role: isLeft ? "ROLE_SELLER" : "ROLE_BUYER",
    }
    if (validateForm()) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
      if(!data.success){
        alert("Already SingIn with this Email please Login!!");
        return;
      }
      alert("SigUp Successfull please LogIn!!");
      navigate("/login")
    }
  };

  return (
    <section className=" p-5  bg-[#0e0f14] flex items-center justify-center ">
      <div className=" flex justify-center items-center   p-6 h-3/4 shadow-md ">
        <div className="flex flex-col w-4/5 lg:flex-row bg-[#0e0f14] text-center rounded-2xl shadow-lg shadow-green-500 overflow-hidden">
          <div className="w-full  lg:w-[60%] ">
            <h2 className="text-center text-5xl font-bold text-white mb-8">Sign Up</h2>
            <form className="space-y-6 p-6" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center">
                <div className="relative w-56 bg-[#0e0f14] rounded-full p-2">
                  <div
                    className={`absolute top-0 left-0 h-full w-1/2 bg-green-500/50 rounded-full transition-all duration-500 ${
                      !isLeft ? "translate-x-full" : ""
                    }`}
                  ></div>
                  <button
                    type="button"
                    onClick={handleLeftClick}
                    className="w-1/2 text-center py-2 rounded-full text-white"
                  >
                    Seller
                  </button>
                  <button
                    type="button"
                    onClick={handleRightClick}
                    className="w-1/2 text-center py-2 rounded-full text-white"
                  >
                    Buyer
                  </button>
                </div>
              </div>
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-user text-white text-lg mx-2"></i>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-user text-white text-lg mx-2"></i>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-envelope text-white text-lg mx-2"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-phone text-white text-lg mx-2"></i>
                <input
                  type="text"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  placeholder="Contact No"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
              </div>
              <div className="relative flex items-center border-b-2 border-gray-300 focus-within:border-green-500">
                <i className="fas fa-lock text-white text-lg mx-2"></i>
                <input
                  onKeyDown={typingPass}
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="flex-1 bg-transparent border-none outline-none px-2 py-3 text-white"
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-white cursor-pointer mx-2`}
                  onClick={() => setShowPassword(!showPassword)} 
                ></i>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#!" className="text-green-600 underline">
                    Terms of Service
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600"
              >
                Register
              </button>
            </form>
          </div>
          <div className="hidden lg:flex lg:w-[40%] items-center justify-center bg-[#0e0f14]">
            <img
              src={image}
              alt="Sign Up Illustration"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;