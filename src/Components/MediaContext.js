import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MediaContext = createContext([]);

export function MediaProvider({ children }) {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingSeries, setTrendingSeries] = useState([]);
  let [trendingPeople, setTrendingPeople] = useState([]);

  let getApi = async () => {
    let moviesApi = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4"
    );
    let peopleApi = await axios.get(
      "https://api.themoviedb.org/3/trending/person/day?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4"
    );
    let seriesApi = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4"
    );
    setTrendingSeries(seriesApi.data.results);
    setTrendingMovies(moviesApi.data.results);
    setTrendingPeople(peopleApi.data.results);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <MediaContext.Provider
      value={{ trendingMovies, trendingSeries, trendingPeople }}
    >
      {children}
    </MediaContext.Provider>
  );
}
