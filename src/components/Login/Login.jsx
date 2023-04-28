import React, { useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Product/Providers/AuthProviders";

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const navigate = useNavigate();

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
      navigate("/")

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
            type="password"
            name="password"
            id=""
            placeholder="Enter Your Password"
            required
          />
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
