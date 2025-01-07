import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigator = useNavigate();

  async function getResponse() {
    setIsLoading(true);
    let { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );

    if (data) {
      setIsLoading(false);
    }
  }

  function getUserInfo(e) {
    let userInfo = { ...user };
    userInfo[e.target.name] = e.target.value;
    setUser(userInfo);
  }

  function submitRegister(e) {
    e.preventDefault();
    getResponse();

    let { error } = formValidator(user);
    if (error) {
      let errorMessage = error.details[0].message;
      return setErrorMsg(errorMessage);
    } else {
      return navigator("/signin");
    }
  }

  function formValidator(form) {
    let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(30).required(),
      last_name: Joi.string().alphanum().min(2).max(10).required(),
      age: Joi.number().min(20).max(70).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    return schema.validate(form, { abortEarly: false });
  }

  return (
    <>
      <Link
        className="navbar-brand txt-color fw-bolder mx-auto logo border border-primary p-2 rounded mt-5"
        to=""
      >
        <h1>ETFARAG</h1>
      </Link>
      <div className="min-vh-100 row justify-content-center align-items-center card-container">
        <div className="card col-md-6 col-sm-10 p-4 signup-card bc_op text-white">
          <h1 className="mb-3 text-center txt-color">Register now</h1>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          <form className="text-start" onSubmit={submitRegister}>
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input
                onInput={getUserInfo}
                name="first_name"
                id="first_name"
                type="text"
                className="form-control border border-1 border-primary-subtle"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <input
                onInput={getUserInfo}
                type="text"
                id="last_name"
                name="last_name"
                className="form-control border border-1 border-primary-subtle"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                onInput={getUserInfo}
                type="number"
                id="age"
                name="age"
                className="form-control border border-1 border-primary-subtle"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                onInput={getUserInfo}
                type="email"
                id="email"
                name="email"
                className="form-control border border-1 border-primary-subtle"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onInput={getUserInfo}
                type="password"
                id="password"
                name="password"
                className="form-control border border-1 border-primary-subtle"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Register"
              )}
            </button>
            <div className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/signin" className="txt-color">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
