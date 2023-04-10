import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  // https://www.omdbapi.com/?apikey=e3148ffb&s=avengers

  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 1000);

  let getMovies = () => {
    axios
      .get(`https://www.omdbapi.com/?apikey=3bc6bab9&s=${search}`)
      .then((res) => {
        console.log(res.data.Search);
        setMovies(res.data.Search);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    // do something with debouncedSearchTerm, e.g. fetch search results
    getMovies();
  }, [debouncedSearchTerm]);

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <h1>Movies</h1>
      <input type="text" placeholder="search movies" onChange={handleSearch} />
      {movies?.map((item, index) => {
        return <div key={index}>{item.Title}</div>;
      })}
    </div>
  );
}

export default App;
