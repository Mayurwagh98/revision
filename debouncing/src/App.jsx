import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // https://www.omdbapi.com/?apikey=e3148ffb&s=avengers

  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState("");

  let getMovies = () => {
    axios
      .get(`https://www.omdbapi.com/?apikey=e3148ffb&s=${search}`)
      .then((res) => {
        console.log(res.data.Search);
        setMovies(res.data);
      })
      .catch((e) => console.log(e));
  };

  let handleSearch = (e) => {
    setSearch(e.target.value);
    getMovies();
  };

  return (
    <div className="App">
      <h1>Movies</h1>
      <input type="text" placeholder="search movies" onChange={handleSearch} />
     
    </div>
  );
}

export default App;
