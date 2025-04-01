import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Login = ({ title }) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center text-center mx-auto vh-100">
      <Logo className={`text-success`}/>
      <h4>{title}</h4>
      <form className="mt-2">
        <div className="form-group mb-3">
          <input
            className="form-control"
            name="email"
            placeholder="Email Address"
            type="email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>
        {title === "Register" && (
          <>
            <div className="form-group my-3">
              <input
                className="form-control"
                name="first_name"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="last_name"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div className="mt-3">
              <Link to="/login">Already have an account? Sign in</Link>
            </div>
          </>
        )}
        {title === "Login" && (
          <div className="mt-3">
            <Link to="/register">Create an account</Link>
          </div>
        )}
        <input type="submit" className="btn btn-sm btn-success my-3 w-100" />
      </form>
    </div>
  );
};

export default Login;
