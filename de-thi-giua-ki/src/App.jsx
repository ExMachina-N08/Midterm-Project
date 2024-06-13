import { useState } from "react";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Carousels from "./Components/Carousels";
import Data from "./Components/Data";

function App() {
  const [movies, setMovies] = useState(Data);
  return (
    <>
      <div className="container ">
        <div className="">
          <Header />
        </div>
        <div>
          <h1 className="text-light py-3">
            <b>Explore</b>
          </h1>
          <p className="my-2 h5 text-white">What are you gonna watch today ?</p>
          <div>
            <Carousels />
          </div>
        </div>
        <div className="">
          <h1 className=" py-3 text-light ">
            <b>New Release</b>
            <div className="py-2 container d-flex flex-row">
              {movies.map((items, index) => {
                return (
                  <Cards
                    key={items.id}
                    name={items.movieName}
                    image={items.image}
                    description={items.description}
                    episode={items.episode}
                    movies={movies}
                    setMovies={setMovies}
                    index={index}
                  />
                );
              })}
            </div>
          </h1>
          <div className=" d-flex flex-row"></div>
        </div>
      </div>
    </>
  );
}

export default App;
