import React from "react";

const Loader = ({ type }) => {
  if (type === "header")
    return (
      <div
        data-testid="header-loader"
        className="flex items-center space-x-2 animate-pulse"
      >
        <div className="w-16 lg:w-24 h-[32px] lg:h-[64px] rounded-md bg-gray-400">
          {" "}
        </div>
        <div className="w-[180px] h-[32px] lg:h-[36px] rounded-md bg-gray-400"></div>
      </div>
    );

  const arr = new Array(16).fill();

  return arr.map((i, key) => (
    <div
      data-testid="card-loader"
      className="bg-gray-200 p-4 rounded-lg shadow-md text-transparent min-[206px] animate-pulse select-none"
    >
      <p className="bg-gray-300 w-2/5 text-sm font-semibold mb-2 rounded-md">
        .
      </p>
      <h2 className="bg-gray-300 w-3/4 text-lg font-bold rounded-md ">.</h2>
    </div>
  ));
};

export default Loader;
