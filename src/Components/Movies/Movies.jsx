import axios from "axios";
import { useEffect, useState } from "react";

function Movies() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingSeries, setTrendingSeries] = useState([]);

  let getApi = async () => {
    let moviesApi = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4"
    );
    let seriesApi = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4"
    );
    setTrendingSeries(seriesApi.data.results);
    setTrendingMovies(moviesApi.data.results);
  };
  useEffect(() => {
    getApi();
  }, []);
  console.log(trendingMovies);
  console.log(trendingSeries);
  var imgURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
            <div className="min-vh-100">
        {trendingMovies.length > 0 ? (
      <div className="container mt-5 text-white">
      <div className="row g-4 mt-5">
          <div className="col-md-12 align-content-center">
            <h1 className="">Trending <span className="txt-color">Movies</span> to watch now</h1>
            <p className="fw-lighter opacity-50">Best trending movies in the last day</p>
          </div>
          {trendingMovies.map((movie,index) =>(
                <div key={index} className="col-md-2 position-relative">
                  <div className=" position-absolute top-0 rounded-1 rate-bg"><i class="fas fa-star fa-xs mx-1"></i>{movie.vote_average.toFixed(1)}</div>
                <img
                  src={imgURL + movie.poster_path}
                  alt=""
                  className="w-100 rounded-3"
                />
                <h6 className="mt-3">{movie.title}</h6>
              </div>
            )
          )}
          
        </div>
      </div>
        ) : (
          <div className="txt-color min-vh-100 d-flex justify-content-center align-items-center">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>


    </div>
  );
}

export default Movies;
