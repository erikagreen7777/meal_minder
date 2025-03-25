import React from "react";

export const AddButton = () => {
  const handleClick = () => {
    console.log("Add button clicked");
  };
  return (
    <button className="add-button" onClick={handleClick}>
      Add
    </button>
  );
};
