import React from "react";
import { Link } from "react-router-dom";
import { FaVirusCovid } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb"
import Form from "./Form";

const Header = () => {
  return (
    <header className="flex bg-zinc-900 text-white p-5 md:px-20 justify-between items-center">
      <Link className="flex items-center gap-2" to="/">
        <FaVirusCovid className="text-green-500 text-xl" />
        <h1>Covid Takip</h1>
      </Link>
      <Form />
      <div className="flex items-center gap-3 max-md:hidden ">
        <p className="flex flex-col text-sm ">
          <span>Bugun Asi Olanlar</span>
          <span className="text-gray-400"> (47.978)</span>
        </p>
        <TbVaccine className="text-xl text-green-500" />
      </div>
    </header>
  );
};

export default Header;
