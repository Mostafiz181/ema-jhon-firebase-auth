import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>

      <form>
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
        <p className="form-small"><small>New to ema-jhon ?  <span>Create new account</span></small></p>

        <p className="or-box">or</p>

        <button className="btn-google">Continue with google</button>
      </form>
    </div>
  );
};

export default Login;
