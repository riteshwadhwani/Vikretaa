import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbarr() {
  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };
  console.log(JSON.parse(localStorage.getItem("user_details")))
  return (
    <>
      <Navbar
  className="p-2 flex justify-between  shadow-md border text-white text-bold bg-green-600 fixed top-0 left-0 w-full z-50"
  data-bs-theme="dark"
>
  <Navbar.Brand><Link to={"/"}>Vikreta</Link></Navbar.Brand>
  <Nav className="me-auto hidden md:block">
    {localStorage.getItem("user_details") == null && (
      <Nav className="text-white">
        <Nav.Link>
          <Link to={"/"}>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={"/market"}>Market</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={"/aboutus"}>AboutUs</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to={"/contactus"}>ContactUs</Link>
        </Nav.Link>
      </Nav>
    )}
  </Nav>
  <Nav>
    {localStorage.getItem("user_details") != null ? (
      <div className="flex gap-4 mr-4">
        {JSON.parse(localStorage.getItem("user_details")).role ===
        "ROLE_ADMIN" ? (
          <a
            className="text-xl hover:text-blue-300"
            href="/dashboard-admin"
          >
            My Dashboard
          </a>
        ) : JSON.parse(localStorage.getItem("user_details")).role ===
          "ROLE_SELLER" ? (
          <a
            className="text-xl hover:text-blue-300"
            href="/seller-dashboard"
          >
            My Dashboard
          </a>
        ) : (
          <a
            className="text-xl hover:text-blue-300"
            href="/buyer-dashboard"
          >
            My Dashboard
          </a>
        )}
        <button
          className="text-xl hover:text-blue-300"
          onClick={logoutHandler}
        >
          LogOut
        </button>
      </div>
    ) : (
      <Nav className="flex gap-2 mr-3">
        <button className="p-2 duration-500 rounded-md border border-[#0e0f14] hover:bg-[#0e0f14]">
          <Link to={"/login"}>LogIn</Link>
        </button>
        <button className="p-2 duration-500 rounded-md border border-[#0e0f14] hover:bg-[#0e0f14]">
          <Link to={"/signup"}>SignUp</Link>
        </button>
      </Nav>
    )}
  </Nav>
</Navbar>

    </>
  );
}

export default Navbarr;
