import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Tv from "./Components/Tv/Tv";
import People from "./Components/People/People";
import About from "./Components/About/About";
import SignIn from "./Components/Signin/SignIn";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/Signup/Signup";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import SerieDetails from "./Components/SerieDetails/SerieDetails";
import PeopleDetails from "./Components/PeopleDetails/PeopleDetails";
import NotFound from "./Components/NotFound/NotFound";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  function getUserData(user) {
    setUserData(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function removeUserData() {
    setUserData(null);
    localStorage.removeItem("user");
  }

  function RouteProtector({ children }) {
    if (userData) {
      return children;
    } else {
      return <Navigate to="/signin" />;
    }
  }

  return (
    <div className="App d-flex flex-column">
      <Navbar userData={userData} removeUserData={removeUserData} />

      <Routes>
        <Route
          path="/"
          element={
            <RouteProtector>
              <Home />
            </RouteProtector>
          }
        />
        <Route
          path="/*"
          element={
            <RouteProtector>
              <NotFound />
            </RouteProtector>
          }
        />
        <Route
          path="home"
          element={
            <RouteProtector>
              <Home />
            </RouteProtector>
          }
        />
        <Route
          path="moviedetails"
          element={
            <RouteProtector>
              <MovieDetails />
            </RouteProtector>
          }
        >
          <Route
            path=":id"
            element={
              <RouteProtector>
                <MovieDetails />
              </RouteProtector>
            }
          >
            <Route
              path=":title"
              element={
                <RouteProtector>
                  <MovieDetails />
                </RouteProtector>
              }
            />
          </Route>
        </Route>
        <Route
          path="seriedetails"
          element={
            <RouteProtector>
              <SerieDetails />
            </RouteProtector>
          }
        >
          <Route
            path=":id"
            element={
              <RouteProtector>
                <SerieDetails />
              </RouteProtector>
            }
          />
        </Route>
        <Route
          path="movies"
          element={
            <RouteProtector>
              <Movies />
            </RouteProtector>
          }
        />
        <Route
          path="tv"
          element={
            <RouteProtector>
              <Tv />
            </RouteProtector>
          }
        />
        <Route
          path="people"
          element={
            <RouteProtector>
              <People />
            </RouteProtector>
          }
        />
        <Route
          path="peopledetails"
          element={
            <RouteProtector>
              <PeopleDetails />
            </RouteProtector>
          }
        >
          <Route
            path=":id"
            element={
              <RouteProtector>
                <PeopleDetails />
              </RouteProtector>
            }
          />
        </Route>
        <Route
          path="about"
          element={
            <RouteProtector>
              <About />
            </RouteProtector>
          }
        />
        <Route path="signin" element={<SignIn getUserData={getUserData} />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      {userData ? <Footer /> : ""}
    </div>
  );
}

export default App;
