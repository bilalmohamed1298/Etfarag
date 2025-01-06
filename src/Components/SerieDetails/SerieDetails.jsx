import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SerieDetails() {
  var imgURL = "https://image.tmdb.org/t/p/original/";
  let params = useParams();
  const [serieDetails, setSerieDetails] = useState(null);

  useEffect(() => {
    getSerieDetails();
  },[params.id]);

  async function getSerieDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4&language=en-US`
    );
    setSerieDetails(data);
  }

  return (
    <>
      {serieDetails ? (
        <div className="container min-vh-100 m-5 mx-auto">
          <div className="row mt-5">
            <div className="col-md-6 position-relative">
              <span className="position-absolute bc rounded-1 p-1 fw-bold">
                <i className="fas fa-star fa-xs mx-1"></i>
                {serieDetails.vote_average.toFixed(1)}
              </span>
              <img
                className="rounded rounded-4 w-75"
                src={imgURL + serieDetails.poster_path}
                alt="movie"
              />
            </div>
            <div className="col-md-6 text-start mt-3">
              <h1 className="my-4">{serieDetails.name}</h1>
              {serieDetails.genres.map((genre, index) => {
                return (
                  <>
                    <span
                      key={index}
                      className="bc mx-2 opacity-75my-3 rounded-1 px-1"
                    >
                      {genre.name}
                    </span>
                  </>
                );
              })}
              <p className="fw-lighter opacity-75 my-4">
                {serieDetails.overview}
              </p>
              <p>
                Vote Count:
                <span className="txt-color mx-3 opacity-75">
                  {serieDetails.vote_count}
                </span>{" "}
              </p>
              <p>
                Release Date:
                <span className="txt-color mx-3 opacity-75">
                  {serieDetails.first_air_date}
                </span>{" "}
              </p>
              <p>
                Production Countries:
                {serieDetails.production_countries.map((country, index) => {
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
                {serieDetails.production_companies.map((company, index) => {
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
                <button
                  className="btn btn-outline-primary txt-color fw-bolder ms-3"
                  onClick={() => (window.location.href = serieDetails.homepage)}
                >
                  Watch it now
                </button>
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

export default SerieDetails;
