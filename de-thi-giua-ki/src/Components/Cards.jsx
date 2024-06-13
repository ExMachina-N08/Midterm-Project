import React from "react";

import { useState } from "react";
import Modals from "./Modals/Modals";
const Cards = ({
  key,
  image,
  name,
  description,
  episode,
  movies,
  setMovies,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className=" card mx-1 gx-3 border-0 bg-dark text-white"
        style={{ width: 600 }}
      >
        <div onClick={handleOpen} style={{ cursor: "pointer" }}>
          <img src={image} className=" card-img-top img-fluid" alt="..." />
          <div className=" card-body rounded-2 bg-transparent ">
            <p className="card-text h6">Episode {episode}</p>
            <h5 className="card-title h6">{name}</h5>
          </div>
        </div>
        {isOpen && (
          <Modals
            handleOpen={handleOpen}
            handleClose={handleClose}
            key={key}
            name={name}
            description={description}
            episode={episode}
            movies={movies}
            setMovies={setMovies}
            index={index}
          />
        )}
      </div>
    </>
  );
};

export default Cards;
