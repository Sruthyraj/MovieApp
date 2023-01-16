import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";

function App() {
  const API_URL = "http://www.omdbapi.com?apikey=88963c9a";
  const [movies, setMovies] = useState([]);
  const [search,setSearch] = useState("");

  const movie1 = {
    Title: "Iron Man",
    Year: "2008",
    imdbID: "tt0371746",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  };
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("man");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="search for movies" />
        <img src={searchIcon} alt="" onClick={() => { searchMovies(search)}} />
      </div>
      {
        movies?.length >0 ?
(
  <div className="container">{
    movies.map((movie) => (
      <MovieCard movie={movie}></MovieCard>
     ))
  }
   
  </div>
  
) :(
  <div className="empty">
    <h1>No Movies Found</h1>
    
  </div>
)

      }
  
    </div>
  )
}

export default App;
