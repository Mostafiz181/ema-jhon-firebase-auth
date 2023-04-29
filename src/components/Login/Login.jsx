import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Product/Providers/AuthProviders";

const Login = () => {
  const [show,setShow]=useState(false)
  const {signIn}=useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from =location.state?.from?.pathname|| "/";

  console.log(location,from);

  const handleToLogin=event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    signIn(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      form.reset()
      navigate(from,{replace:true})

    })
    .catch(error=>{
      console.log(error)
      

    })
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>

      <form onSubmit={handleToLogin}>
        <div className="form-control">
          <label  htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="form-control">
          <label  htmlFor="password">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            placeholder="Enter Your Password"
            required
          />

          <p onClick={()=>setShow (!show)}>
            {
              show ? <span>Hide password</span>: <span>Show password</span>
            }
          </p>
        </div>

        <button className="btn-submit">Login</button>
        <p className="form-small"><small>New to ema-jhon ?  <Link to="/signup"><span>Create new account</span></Link></small></p>

        <p className="or-box">or</p>

        <button className="btn-google">Continue with google</button>
      </form>
    </div>
  );
};

export default Login;
