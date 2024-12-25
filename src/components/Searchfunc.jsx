import React from "react";

const Searchfunc = ({ setSearchTerm }) => {
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search beers..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
    </>
  );
};

export default Searchfunc;
