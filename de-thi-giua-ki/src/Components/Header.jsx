import React from "react";
import { useState } from "react";
const Header = ({
  key,
  image,
  name,
  description,
  episode,
  movies,
  setMovies,
  index,
  items,
}) => {
  const handleSearch = (value) => {
    const moviesFilter = movies.filter((item) => {
      return item.name == value;
    });
  };
  console.log("search", handleSearch);
  return (
    <>
      <nav className="navbar navbar-dark  navbar-expand-lg bg-body-transparent">
        <div className="container-fluid d-flex heading ">
          <h1 className="navbar-brand py-1 my-1  " href="#">
            <strong className="h2 branding">Anonime</strong>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  List anime
                </a>
              </li>
            </ul>
            <form class=" input-group w-25">
              <input
                type="search"
                onChange={(e) => handleSearch(e.target.value)}
                class="form-control rounded-5"
                placeholder="Search anime or movies"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              {/* <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
