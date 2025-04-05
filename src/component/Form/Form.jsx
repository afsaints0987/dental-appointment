import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Form/Form.css"
import Logo from "../Logo";

const Form = ({ title, handleSubmit, handleChange, formData, error }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="d-flex justify-content-center flex-column align-items-center text-center mx-auto vh-100">
      <Logo className={`text-success`} />
      <h4>{title}</h4>

      {error && <span className="text-danger">{error}</span>}

      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <span onClick={() => setShowPassword(!showPassword)} id="password">
            {showPassword ? "Hide Password" : "Show Password"}
          </span>
        </div>
        {title === "Register" && (
          <>
            <div className="form-group my-3">
              <input
                className="form-control"
                name="repeatPass"
                value={formData.repeatPass}
                onChange={handleChange}
                placeholder="Repeat Password"
                type="password"
              />
            </div>
            <div className="form-group my-3">
              <input
                className="form-control"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
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
        <button type="submit" className="btn btn-sm btn-success my-3 w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
