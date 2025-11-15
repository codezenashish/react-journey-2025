import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-bold capitalize ">Welcome to the my React App</h1>
      <nav className="flex flex-row gap-4 ">
        <a href="">home</a>
        <a href="">about</a>
        <a href="">contact</a>
      </nav>
    </div>
  );
};

export default Header;
