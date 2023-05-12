import React from "react";

const Filter = ({ handleSetFilter }) => {
  return (
    <>
      filter: <input onChange={handleSetFilter} />
    </>
  );
};

export default Filter;
