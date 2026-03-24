import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
         
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BPL Players</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="font-bold text-xl">
            <span>0</span>
            <span>Coins</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
