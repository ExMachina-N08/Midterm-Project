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
      <div>
        <div className="card m-3 border-0">
          <div onClick={handleOpen}>
            <img src={image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body ">
              <h5 className="card-title h6">{name}</h5>
              <p className="card-text h6">{episode}</p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
