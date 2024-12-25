import React from "react";

const Card = ({ beer }) => {
  return (
    <>
      <div className="border rounded shadow p-4">
        <img
          src={beer.image}
          alt={beer.name}
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h2 className="text-lg font-bold">{beer.name}</h2>
        <p className="text-sm text-gray-700">
          {beer.tagline || beer.description}
        </p>
      </div>
    </>
  );
};

export default Card;
