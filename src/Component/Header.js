import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [menu, setMenu] = useState();
  return (
    <>
      <nav className="Header flex justify-between items-center  h-24 px-12  font-bold shadow-md">
        <div className="flex items-center  md:space-x-5 lg:space-x-10 ">
        <Link to='/'>
          <img
            class="nav_logo cursor-pointer h-10"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
          </Link>

          <div className="navbar-links hidden items-center  lg:flex lg:space-x-5">
            <Link to="/menu" className="nav-links " >
              MENU
            </Link>
            <Link to="/rewards" className="nav-links ">
              REWARDS
            </Link>
            <Link className="nav-links " to="">
              GIFT CARDS
            </Link>
          </div>
        </div>

        <div className="navbar-links hidden lg:flex lg:space-x-8 items-center justify-center ">
          <Link
            className="flex nav-links mr-5 items-center justify-center space-x-2 "
            to=""
          >
            <span className="text-xl">
              <MdOutlineLocationOn />
            </span>
            <span>Find a store</span>
          </Link>
          <Link to="/signin"
            className="rounded-full border text-sm bg-transparent border-black px-3 py-1 hover:bg-gray-200"
          
          >
            Sign in
          </Link>
          <Link to="/register"
            className="rounded-full border text-sm bg-black px-3 py-1 hover:text-gray-200 text-white"
          
          >
            Join Now
          </Link>
        </div>

        <div className="lg:hidden menu">
          <AiOutlineMenu
            className="font-bold text-xl lg:"
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <div className="h-screen absolute hidden w-1/2 right-0 mt-5">
              <div className="flex flex-col  ">
                <Link className="nav-links " to="">
                  MENU
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      
    </>
  );
}

export default Header;
