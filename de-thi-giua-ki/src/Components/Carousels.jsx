import React from "react";
import { Carousel } from "bootstrap";

const Carousels = (
  key,
  image,
  name,
  description,
  episode,
  movies,
  setMovies
) => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-4 shadow">
          <div className=" mask bg-dark carousel-item active">
            <img src="/CarouselP.bmp" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="carousel-caption d-none d-md-block">
                <h5 className="h1 title">Spy X Family</h5>
                <p className="h4 intro">
                  A spy, an assassin and a telepath come together to pose as a
                  family, each for their own reasons, while hiding their true
                  identities from each
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/CarouselP.bmp" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="carousel-caption d-none d-md-block">
                <h5 className="h1 title">Spy X Family</h5>
                <p className="h4 intro">
                  A spy, an assassin and a telepath come together to pose as a
                  family, each for their own reasons, while hiding their true
                  identities from each
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/CarouselP.bmp" className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="carousel-caption d-none d-md-block">
                <h5 className="h1 title">Spy X Family</h5>
                <p className="h4 intro">
                  A spy, an assassin and a telepath come together to pose as a
                  family, each for their own reasons, while hiding their true
                  identities from each
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousels;
