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
  const [isEditing, setIsEditing] = useState(false);
  const setEdit = () => {
    setIsEditing(true);
    setShow(!show);
  };

  const [nameChange, handleNameChange] = useState(description);
  const newName = () => {
    const updateName = [...movies];
    updateName[index].description = nameChange;
    setMovies(updateName);
    handleClose();
  };
  //show button
  const [show, setShow] = useState(true);

  return (
    <>
      <button className="h6" onClick={handleClose}>
        close
      </button>

      <form className="card-body">
        <h5 className="card-title">
          {description}
          {isEditing && (
            <input
              type="text"
              className="form-control"
              defaultValue={description}
              onChange={(e) => {
                handleNameChange(e.target.value);
              }}
            />
          )}
        </h5>
        <p className="card-text">{description}</p>
      </form>

      {show && (
        <button className="h6" onClick={setEdit}>
          {description}
          Edit Information
        </button>
      )}
      {!show && (
        <button className="h6" onClick={newName} type="submit">
          save
        </button>
      )}
    </>
  );
};

export default Modals;
