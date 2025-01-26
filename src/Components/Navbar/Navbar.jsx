import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../SearchContext";

function Navbar(props) {
  let mySearchContext = useContext(SearchContext);
  let navigator = useNavigate();

  function submitSearch(e) {
    e.preventDefault();
  }
  function navigateSearch() {
    navigator("/search");
  }

  function searchhandeler(e) {
    mySearchContext.setSearchContent(e.target.value);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg">
        <div className="container-xl">
          {props.userData ? (
            <>
              <Link
                className="navbar-brand txt-color fw-bolder me-4 logo"
                to="home"
              >
                ETFARAG
              </Link>
              <button
                className="navbar-toggler text-primary bc opacity-75"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-3 mt-2 mt-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white txtbiger active"
                      to="home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white txtbiger" to="movies">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white txtbiger" to="tv">
                      Tv Shows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white txtbiger" to="people">
                      Artists
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white txtbiger" to="about">
                      About
                    </Link>
                  </li>
                </ul>
                <form
                  className="d-flex me-auto"
                  role="search"
                  onSubmit={submitSearch}
                >
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => {
                      searchhandeler(e);
                      navigateSearch();
                    }}
                  />
                </form>
                <Link
                  onClick={props.removeUserData}
                  className="nav-link me-3 text-danger"
                  to="signin"
                >
                  Sign Out
                </Link>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
