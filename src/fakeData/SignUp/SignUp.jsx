import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Product/Providers/AuthProviders';

const SignUp = () => {

    const [error,setError]=useState('')
    const {createUser}=useContext(AuthContext)

    const handleSignUP=event=>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)

        setError("");
        if(password !==confirm){
            setError('Your password did not match')
            return;

        }
        else if(password.length < 6){
            setError("Input at least 6 character in your password")
            return;
        }

        createUser(email,password)
        .then(result=>{
          const loggedUser=result.user;
          console.log(loggedUser)
        })
        .catch(error=>{
          console.log(error);
          setError(error.message)
        })
    }
    return (
        <div className="form-container">
        <h2 className="form-title">Sign Up</h2>
  
        <form onSubmit={handleSignUP}>
          <div className="form-control">
            <label  htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
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
              id="password"
              placeholder="Enter Your Password"
              required
            />
          </div>


          <div className="form-control">
            <label  htmlFor="confirm">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Enter Confirm Password"
              required
            />
          </div>
  
          <button className="btn-submit">Sign Up</button>
          <p className="form-small"><small>Already have an account ?  <Link to="/Login"><span >Login</span></Link></small></p>
          <p className='error-text'>{error}</p>
  
          <p className="or-box">or</p>
  
          <button className="btn-google">Continue with google</button>
        </form>
      </div>
    );
};

export default SignUp;