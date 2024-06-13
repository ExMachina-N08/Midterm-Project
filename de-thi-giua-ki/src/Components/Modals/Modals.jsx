import React from "react";
import { useState } from "react";

const Modals = ({
  handleClose,
  handleOpen,
  key,
  image,
  name,
  description,
  episode,
  movies,
  setMovies,
  index,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const setEdit = () => {
    setIsEditing(true);
    setShow(!show);
  };

  // event name change
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
      <button className="btn btn-primary" onClick={handleClose}>
        close
      </button>
      <form className="card-body">
        <h5 className="card-title">
          {""}
          {isEditing && (
            <textarea
              type="text"
              className="form-control text-black"
              defaultValue={description}
              onChange={(e) => {
                handleNameChange(e.target.value);
              }}
            />
          )}
        </h5>
        <p className="card-text">{description}</p>
      </form>

      {show && <button onClick={setEdit}> Edit Information</button>}
      {!show && (
        <button onClick={newName} type="submit">
          Save
        </button>
      )}
    </>
  );
};

export default Modals;
