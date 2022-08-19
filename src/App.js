import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const fetchMovie = async (title) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${title}&apikey=8408abce`
    );
    setMovie(response.data.Search);
  };
  useEffect(() => {
    fetchMovie("marvel");
  }, [search]);

  return (
    <div className="app">
      <h1>Movie Search App </h1>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Basic movie search project for beginning"
        />
        <img onClick={() => fetchMovie(search)} src={SearchIcon} alt="" />
      </div>

      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div>Sorry Not Found</div>
      )}
    </div>
  );
}

export default App;
