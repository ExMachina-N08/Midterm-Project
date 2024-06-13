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
          <h1 className="text-light my-1">
            <b>Explore</b>
          </h1>
          <p className=" py-3 h5 greeting">What are you gonna watch today ?</p>
          <div>
            <Carousels />
          </div>
        </div>
        <div className="">
          <h1 className=" py-3 text-light ">
            <b>New Release</b>
          </h1>
          <div className="px-0 py-2 my-3 mx-0 container d-flex flex-row">
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
                  items={items}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
