import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-xl">
          <Link
            className="navbar-brand txt-color fw-bolder me-4 logo"
            to="home"
          >
            Etfarag
          </Link>
          <button
            className="navbar-toggler txt-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-3 mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white txtbiger active" to="home">
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
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white txtbiger" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white txtbiger" to="networks">
                  Networks
                </Link>
              </li>
            </ul>
            <form className="d-flex me-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary txt-color" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav mt-2  mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link me-3 text-white txtbiger" to="signin">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white txtbiger" to="signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Link
            className="navbar-brand txt-color fw-bolder me-4 logo"
            to="home"
          >
            Etfarag
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-3 mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white txtbiger active" to="home">
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
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white txtbiger" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white txtbiger" to="networks">
                  Networks
                </Link>
              </li>
            </ul>
            <form className="d-flex my-2 me-auto my-lg-0">
              <input
                className="form-control me-sm-2 rounded-4"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success txt-color my-2 my-sm-0 rounded-4"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link me-3 text-white txtbiger" to="signin">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white txtbiger" to="signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
}

export default Navbar;
