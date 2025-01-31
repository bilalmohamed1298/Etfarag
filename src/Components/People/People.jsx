import { useContext} from "react";
import { Link } from "react-router-dom";
import { MediaContext } from "../MediaContext";

function People() {
  let media= useContext(MediaContext);
  var imgURL = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {media.trendingPeople.length > 0 ? (
        <div className="container min-vh-100 m-5 mx-auto">
          <div className="row g-4 my-5">
            <div className="col-md-12 align-content-center text-center">
              <h1 className="">
                Popular <span className="txt-color">Artists</span>
              </h1>
              <p className=" fw-lighter opacity-50"></p>
            </div>
            {media.trendingPeople.map((people, index) => (
              <div key={index} className="col-md-2">
                <Link
                  className="text-decoration-none text-white"
                  to={`/peopledetails/${people.id}`}
                >
                  <img
                    src={
                      people.profile_path === null
                        ? "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"
                        : imgURL + people.profile_path
                    }
                    alt=""
                    className="w-100 rounded-3"
                  />
                  <h6 className="mt-3">{people.name}</h6>
                </Link>
              </div>
            ))}
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

export default People;
