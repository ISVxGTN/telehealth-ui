import React from "react";
import Navbar from "../components/Navbar";
import image from "../images/doc-bg.svg";

export default function Landingpage() {
  return (
    <div className="bg-cover py-8">
      <Navbar />
      <div className="container-2xl flex justify-between px-12">
        <div>
          <div className="py-20">
            <h1 className="text-7xl font-semibold text-gray-500 leading-snug mb-4">
              Welcome <br /> Dr Bonnie <br /> Brown
            </h1>
            <p className="theme-color text-2xl">
              What service would you like to <br />
              perform today?
            </p>
          </div>
        </div>
        <div>
          <div className="py-16 mr-10">
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  );
}
