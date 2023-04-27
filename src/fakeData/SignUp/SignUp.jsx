import React from 'react';

const SignUp = () => {
    return (
        <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
  
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


          <div className="form-control">
            <label  htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              id=""
              placeholder="Enter Confirm Password"
              required
            />
          </div>
  
          <button className="btn-submit">Sign Up</button>
          <p className="form-small"><small>Already have an account ?  <span >Login</span></small></p>
  
          <p className="or-box">or</p>
  
          <button className="btn-google">Continue with google</button>
        </form>
      </div>
    );
};

export default SignUp;