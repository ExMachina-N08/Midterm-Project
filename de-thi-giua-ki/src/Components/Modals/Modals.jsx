import React from "react";
import { useState } from "react";

const Modals = (
  handleClose,
  handleOpen,
  key,
  image,
  name,
  description,
  episode,
  movies,
  setMovies,
  index
) => {
  return (
    <>
      <button onClick={handleClose}>Close</button>
    </>
  );
};

export default Modals;
