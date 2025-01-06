import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  var imgURL = "https://image.tmdb.org/t/p/original/";
  let params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    getMovieDetails();
  },[params.id]);

  async function getMovieDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4&language=en-US`
    );
    setMovieDetails(data);
  }

  return (
    <>
      {movieDetails ? (
        <div className="container min-vh-100 m-5 mx-auto">
          <div className="row mt-5">
            <div className="col-md-6 position-relative">
              <span className="position-absolute bc rounded-1 p-1 fw-bold">
                <i className="fas fa-star fa-xs mx-1"></i>
                {movieDetails.vote_average.toFixed(1)}
              </span>
              <img
                className="rounded rounded-4 w-75"
                src={imgURL + movieDetails.poster_path}
                alt="movie"
              />
            </div>
            <div className="col-md-6 text-start mt-3">
              <h1 className="my-4">{movieDetails.title}</h1>
              {movieDetails.genres.map((genre, index) => {
                return (
                  <span key={index} className="bc mx-2 my-3 rounded-1 px-1">
                    {genre.name}
                  </span>
                );
              })}
              <p className="fw-lighter opacity-75 my-4">
                {movieDetails.overview}
              </p>
              <p>
                Vote Count:
                <span className="txt-color mx-3 opacity-75">
                  {movieDetails.vote_count}
                </span>{" "}
              </p>
              <p>
                Release Date:
                <span className="txt-color mx-3 opacity-75">
                  {movieDetails.release_date}
                </span>{" "}
              </p>
              <p>
                Production Countries:
                {movieDetails.production_countries.map((country, index) => {
                  return (
                    <>
                      <span key={index} className="txt-color mx-2 opacity-75">
                        {country.name}
                      </span>
                    </>
                  );
                })}
              </p>
              <p>
                Production Companies:
                {movieDetails.production_companies.map((company, index) => {
                  return (
                    <>
                      <span key={index} className="txt-color mx-2 opacity-75">
                        {company.name}
                      </span>
                    </>
                  );
                })}
              </p>
              <div className="my-4">
                {movieDetails.homepage ? (
                  <button
                    className="btn btn-outline-primary txt-color fw-bolder ms-3"
                    onClick={() =>
                      (window.location.href = movieDetails.homepage)
                    }
                  >
                    Watch it now
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="txt-color min-vh-100 d-flex justify-content-center align-items-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
