import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import { useNavigate } from "react-router";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [authMsg, setauthMsg] = useState(null);
  const navigator = useNavigate();

  function getUserInfo(e) {
    let userInfo = { ...user };
    userInfo[e.target.name] = e.target.value;
    setUser(userInfo);
    console.log(userInfo);
  }

  async function getResponse() {
    setIsLoading(true);
    let { data } = await axios.post("https://reqres.in/api/login", user);

    if (data.token) {
      setauthMsg(data.token);
      setIsLoading(false);
      return navigator("/home")
    }

    console.log(data);
  }

  function submitRegister(e) {
    e.preventDefault();
    getResponse();
    console.log("submited form");

    let { error } = formValidator(user);
    if (error) {
      let errorMessage = error.details[0].message;
       setErrorMsg(errorMessage);
       setIsLoading(false);
     }
  }

  function formValidator(form) {
    let schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["in"] },
      }),
      password: Joi.string(),
    });
    return schema.validate(form);
  }

  return (
    <>
      <div className="min-vh-100 container mt-5">
        <div className="w-50 m-auto my-5">
          <h1 className="mb-3 mx-auto txt-color">Sign In</h1>
          <form className="text-start" onSubmit={submitRegister}>
            <label className="" htmlFor="email">
              Email
            </label>
            <input
              onInput={getUserInfo}
              type="email"
              id="email"
              name="email"
              className="form-control rounded-3 my-3"
            />
            <label className="" htmlFor="password">
              Password
            </label>
            <input
              onInput={getUserInfo}
              type="password"
              id="password"
              name="password"
              className="form-control rounded-3 my-3"
            />
            {errorMsg ? <p className="alert alert-danger">{errorMsg}</p> : ""}

            <button
              type="submit"
              className="btn btn-outline-primary txt-color mt-3"
            >
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
