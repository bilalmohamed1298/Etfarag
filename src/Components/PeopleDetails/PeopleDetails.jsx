import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PeopleDetails() {
  var imgURL = "https://image.tmdb.org/t/p/original/";
  const [peopleDetails, setPeopleDetails] = useState(null);
  let params = useParams();

  useEffect(() => {
    getPeopleDetails();
  },[params.id]);

  async function getPeopleDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${params.id}?api_key=6b89ab44f20e0ea3a35ec5d5e7146bf4&language=en-US`
    );
    setPeopleDetails(data);
  }

  return (
    <>
      {peopleDetails ? (
        <div className="container min-vh-100 m-5 mx-auto">
          <div className="row mt-5">
            <div className="col-md-6 position-relative">
              <img
                className="rounded rounded-4 w-75"
                src={
                  peopleDetails.profile_path === null
                    ? "https://upload.wikimedia.org/wikipedia/commons/a/a2/Person_Image_Placeholder.png"
                    : imgURL + peopleDetails.profile_path
                }
                alt="movie"
              />
            </div>
            <div className="col-md-6 text-start mt-3">
              <h1 className="mb-5">{peopleDetails.name}</h1>
              <h5>Biography: </h5>
              <p className="fw-lighter opacity-75 my-4">
                {peopleDetails.biography
                  ? peopleDetails.biography.substring(0, 300) + "..."
                  : "No biography available"}
              </p>
              <p>
                Birthday:{" "}
                <span className="txt-color mx-3 opacity-75">
                  {peopleDetails.birthday}
                </span>
              </p>
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

export default PeopleDetails;
