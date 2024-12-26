import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingSeries, setTrendingSeries] = useState([]);

  let getApi = async () => {
    let moviesApi = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4"
    );
    let seriesApi = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4"
    );
    setTrendingSeries(seriesApi.data.results)
    setTrendingMovies(moviesApi.data.results);
  };

  useEffect(() => {
    getApi();
  }, []);

  console.log(trendingMovies);
  console.log(trendingSeries);
  var imgURL = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      <div className="container mt-5 text-white">
        <div className="row g-4 my-5">
          <div className="col-md-4 align-content-center text-start">
            <h1 className="">Trending <span className="txt-color">Movies</span> to watch now</h1>
            <p className="fw-lighter opacity-50">Best trending movies in the last day</p>
          </div>

          {trendingMovies.map((movie,index) =>
            index < 10 ? (
              <div className="col-md-2">
                <img
                  src={imgURL + movie.poster_path}
                  alt=""
                  className="w-100 rounded-3"
                />
                <h6 className="mt-3">{movie.title}</h6>
              </div>
            ) : (
              ""
            )
          )}
          
        </div>



        <div className="row g-4 my-5">
          <div className="col-md-4 align-content-center text-start">
            <h1 className="">Trending <span className="txt-color">TV Shows</span> to watch now</h1>
            <p className=" fw-lighter opacity-50">Best trending tv shows in the last day</p>
          </div>
          {trendingSeries.map((serie,index) =>
            index < 10 ? (
              <div className="col-md-2 ">
                <img
                  src={imgURL + serie.poster_path}
                  alt=""
                  className="w-100 rounded-3"
                />
                <h6 className="mt-3">{serie.name}</h6>
              </div>
            ) : (
              ""
            )
          )}
          
        </div>
      </div>
    </>
  );
}

export default Home;
