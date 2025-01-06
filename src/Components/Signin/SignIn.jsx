import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function SignIn(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigator = useNavigate();

  function getUserInfo(e) {
    let userInfo = { ...user };
    userInfo[e.target.name] = e.target.value;
    setUser(userInfo);
  }

  async function getResponse() {
    setIsLoading(true);
    let { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );

    if (data) {
      setIsLoading(false);
      props.getUserData(data);
      navigator("/home");
    }
  }

  function submitRegister(e) {
    e.preventDefault();
    let { error } = formValidator(user);
    if (error) {
      let errorMessage = error.details[0].message;
      setErrorMsg(errorMessage);
      setIsLoading(false);
    } else {
      getResponse();
    }
    
  }

  function formValidator(form) {
    let schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string(),
    });
    return schema.validate(form);
  }

  return (
    <>
    <div className="min-vh-100 d-flex justify-content-center align-items-center signin-container">
      <div className="card w-50 p-4 signin-card bc_op text-white">
        <h1 className="mb-3 text-center txt-color">Sign In</h1>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        <form className="text-start" onSubmit={submitRegister}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              onInput={getUserInfo}
              name="email"
              id="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              onInput={getUserInfo}
              type="password"
              id="password"
              name="password"
              className="form-control"
            />
          </div>
          <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
            >
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Sign In"
              )}
            </button>
          <div className="text-center mt-3">
          Don't have an account? <Link to="/signup" className="txt-color">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default SignIn;
