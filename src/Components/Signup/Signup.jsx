import { useState } from "react";



function Signup() {
  
  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    age:'',
    email:'',
    password:''
  })

  function getUserInfo(e){
    let userInfo = {...user};
    userInfo[e.target.name]=e.target.value;
    setUser(userInfo)
    console.log(user)
  }

  function submitRegister(e){
    e.preventDefault()
    console.log('submited form')
  }


  return (
    <>
      <div className="min-vh-100 container mt-5">
        <div className="w-50 text-start m-auto my-5">
            <h1 className="mb-3 txt-color">Register now</h1>
            <form onSubmit={submitRegister}>
            <label htmlFor="first_name">first_name:</label>
            <input onChange={getUserInfo} name="first_name" id='first_name' type="text" className="form-control bt text-white my-3" />
            <label htmlFor="last_name">last_name:</label>
            <input onChange={getUserInfo}type="text" id='last_name' name='last_name' className="form-control bt text-white my-3" />
            <label htmlFor="age">age:</label>
            <input onChange={getUserInfo}type="number" id='age' name='age' className="form-control bt text-white my-3" />
            <label htmlFor="email">email:</label>
            <input onChange={getUserInfo}type="email" id='email' name='email' className="form-control bt text-white my-3" />
            <label htmlFor="password">password:</label>
            <input onChange={getUserInfo}type="password" id='password' name='password' className="form-control bt text-white my-3" />
            <button type="submit" className="btn btn-outline-primary txt-color">Register</button>
            </form>
        </div>


      </div>
    </>
  );
}

export default Signup;
