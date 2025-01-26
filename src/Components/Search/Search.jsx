import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import { MediaContext } from "../MediaContext";
import { Link } from "react-router-dom";

function Search() {
  let mySearchContext = useContext(SearchContext);
  let media = useContext(MediaContext);

  var imgURL = "https://image.tmdb.org/t/p/original/";
  const filteredMovies = media.trendingMovies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(mySearchContext.SearchContent.toLowerCase())
  );
  const filteredSeries = media.trendingSeries.filter((series) =>
    series.name
      .toLowerCase()
      .includes(mySearchContext.SearchContent.toLowerCase())
  );
  const filteredPeople = media.trendingPeople.filter((person) =>
    person.name
      .toLowerCase()
      .includes(mySearchContext.SearchContent.toLowerCase())
  );

  const hasResults =
    filteredMovies.length > 0 ||
    filteredSeries.length > 0 ||
    filteredPeople.length > 0;

  return (
    <div className="container min-vh-100 mt-5 text-white">
      {hasResults ? (
        <>
          {filteredMovies.length > 0 && (
            <>
              <h2>Movies</h2>
              <div className="row g-4 my-2">
                {filteredMovies.map((movie, index) => (
                  <div key={index} className="col-md-2 position-relative">
                    <div className="position-absolute top-0 rounded-1 rate-bg pe-1 ps-0">
                      <i className="fas fa-star fa-xs mx-1"></i>
                      {movie.vote_average.toFixed(1)}
                    </div>
                    <Link
                      to={`/moviedetails/${movie.id}`}
                      className="text-decoration-none text-white"
                    >
                      <img
                        src={imgURL + movie.poster_path}
                        alt={movie.title}
                        className="w-100 rounded-3"
                      />
                      <h6 className="mt-3">{movie.title}</h6>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
          {filteredSeries.length > 0 && (
            <>
              <h2>Series</h2>
              <div className="row g-4 my-2">
                {filteredSeries.map((series, index) => (
                  <div key={index} className="col-md-2 position-relative">
                    <div className="position-absolute top-0 rounded-1 rate-bg pe-1 ps-0">
                      <i className="fas fa-star fa-xs mx-1"></i>
                      {series.vote_average.toFixed(1)}
                    </div>
                    <Link
                      to={`/seriesdetails/${series.id}`}
                      className="text-decoration-none text-white"
                    >
                      <img
                        src={imgURL + series.poster_path}
                        alt={series.name}
                        className="w-100 rounded-3"
                      />
                      <h6 className="mt-3">{series.name}</h6>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
          {filteredPeople.length > 0 && (
            <>
              <h2>People</h2>
              <div className="row g-4 my-2">
                {filteredPeople.map((person, index) => (
                  <div key={index} className="col-md-2 position-relative">
                    <Link
                      to={`/peopledetails/${person.id}`}
                      className="text-decoration-none text-white"
                    >
                      <img
                        src={imgURL + person.profile_path}
                        alt={person.name}
                        className="w-100 rounded-3"
                      />
                      <h6 className="mt-3">{person.name}</h6>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="col-12 text-center">Not Found</div>
      )}
    </div>
  );
}

export default Search;
