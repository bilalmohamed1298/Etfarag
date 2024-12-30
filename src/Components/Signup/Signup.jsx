import axios from "axios";
import Joi from "joi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: "",
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

    console.log(data);
  }

  function getUserInfo(e) {
    let userInfo = { ...user };
    userInfo[e.target.name] = e.target.value;
    setUser(userInfo);
    console.log(userInfo);
  }

  function submitRegister(e) {
    e.preventDefault();
    getResponse();
    console.log("submited form");

    let { error } = formValidator(user);
    if(error){
      let errorMessage = error.details[0].message;
      return setErrorMsg(errorMessage);
    }else{
      return navigator('/signin')
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
      password: Joi.string().pattern(/^[A-Z][a-z][1-9]/),
    });
    return schema.validate(form);
  }

  return (
    <>
      <div className="min-vh-100 container mt-5">
        <div className="w-50 m-auto my-5">
          <h1 className="mb-3 mx-auto txt-color">Register now</h1>
          <form className="text-start" onSubmit={submitRegister}>
            <label className="fw-bolder" htmlFor="first_name">first_name:</label>
            <input
              onInput={getUserInfo}
              name="first_name"
              id="first_name"
              type="text"
              className="form-control rounded-3 my-3"
            />
            <label className="fw-bolder" htmlFor="last_name">last_name:</label>
            <input
              onInput={getUserInfo}
              type="text"
              id="last_name"
              name="last_name"
              className="form-control rounded-3 my-3"
            />
            <label className="fw-bolder" htmlFor="age">age:</label>
            <input
              onInput={getUserInfo}
              type="number"
              id="age"
              name="age"
              className="form-control rounded-3 my-3"
            />
            <label className="fw-bolder" htmlFor="email">email:</label>
            <input
              onInput={getUserInfo}
              type="email"
              id="email"
              name="email"
              className="form-control rounded-3 my-3"
            />
            <label className="fw-bolder" htmlFor="password">password:</label>
            <input
              onInput={getUserInfo}
              type="password"
              id="password"
              name="password"
              className="form-control rounded-3 my-3"
            />
            {errorMsg?<p className="alert alert-danger">{errorMsg}</p>:''}
            
            <button type="submit" className="btn btn-outline-primary txt-color mt-3">
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
