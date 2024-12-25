import { Link } from "react-router";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-success">
        <div className="container">
        <Link className="navbar-brand text-white fw-bolder me-4" to="home">
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
              <Link className="nav-link text-white active" to="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="tv">
                Tv Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="people">
                People
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="networks">
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
              className="btn btn-outline-light my-2 my-sm-0 rounded-4"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item">
              <Link className="nav-link text-white" to="signin">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
