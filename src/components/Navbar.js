import React from "react";
import logo from "../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import profile from "../images/profile.svg";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-4 mb-5 navbar-expand-lg bg-transparent">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
            >
              <img src={logo} />
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ml-20">
                <NavLink
                  to="/"
                  activeClassName="border-b-4 theme-active-color "
                  className="px-3 py-5 flex items-center text-2xl  uppercase font-semibold leading-snug text-black hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-2xl  leading-lg text-black opacity-75"></i>
                  <span className="">Home</span>
                </NavLink>
              </li>
              <li className="nav-item ml-20">
                <NavLink
                  to="/services"
                  activeClassName="border-b-4 theme-active-color "
                  className="px-3 py-5 flex items-center text-2xl  uppercase font-semibold leading-snug text-black hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-2xl  leading-lg text-black opacity-75"></i>
                  <span className="">Services</span>
                </NavLink>
              </li>
              <li className="nav-item ml-20">
                <NavLink
                  to="/services"
                  activeClassName="border-b-4 theme-active-color "
                  className="px-3 py-5 flex items-center text-2xl  uppercase font-semibold leading-snug text-black hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-2xl  leading-lg text-black opacity-75"></i>
                  <span className="">Help Line</span>
                </NavLink>
              </li>
              <li className="nav-item ml-20">
                <NavLink
                  to="/services"
                  activeClassName="border-b-4 theme-active-color "
                  className="px-3 py-5 flex items-center text-2xl  uppercase font-semibold leading-snug text-black hover:opacity-75"
                >
                  <i className="fab fa-facebook-square text-2xl  leading-lg text-black opacity-75"></i>
                  <span className="">About</span>
                </NavLink>
              </li>
              <li className="nav-item  ml-4">
                <a
                  className="px-3 py-1 flex items-center text-2xl  uppercase font-semibold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-2xl  leading-lg text-black opacity-75"></i>
                  <span className="">
                    <img src={profile} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
