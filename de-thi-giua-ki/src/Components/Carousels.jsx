import React from "react";
import { Carousel } from "bootstrap";

const Carousels = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className=" image carousel-inner rounded-4 shadow">
            <div className="  bg-dark carousel-item active">
              <img src="/CarouselP.bmp" className="d-block w-100" alt="..." />
              <div class=" carousel-caption d-none d-md-block">
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{ zIndex: 1 }}
                >
                  <h5 className="h1 title">Spy X Family</h5>
                  <p className="h4 intro">
                    Corrupt politicians, frenzied nationalists, and other
                    warmongering forces constantly jeopadize the thin veneer of
                    peace between neighboring countries Ostania and Westalis.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/CarouselP.bmp" className="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{ zIndex: 1 }}
                >
                  <h5 className="h1 title">Spy X Family</h5>
                  <p className="h4 intro">
                    Corrupt politicians, frenzied nationalists, and other
                    warmongering forces constantly jeopadize the thin veneer of
                    peace between neighboring countries Ostania and Westalis.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/CarouselP.bmp" className="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <div
                  class="carousel-caption d-none d-md-block"
                  style={{ zIndex: 1 }}
                >
                  <h5 className="h1 title">Spy X Family</h5>
                  <p className="h4 intro">
                    Corrupt politicians, frenzied nationalists, and other
                    warmongering forces constantly jeopadize the thin veneer of
                    peace between neighboring countries Ostania and Westalis.
                  </p>
                </div>
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
