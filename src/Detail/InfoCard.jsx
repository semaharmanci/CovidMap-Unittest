import React from "react";

const InfoCard = ({ item }) => {
  return (
    <div className="bg-gray-200 mt-3 p-4 rounded-lg text-gray-600 shadow-md">
      <p className="text-orange-600 text-md font-semibold mb-2 capitalize">{item[0].split("_").join(" ")}</p>
      <h2 className="text-md font-bold ">{item[1]}</h2>
    </div>
  );
};

export default InfoCard;
