import React, { useState } from "react";
import Form from "../component/Form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      const data = response.data;
      localStorage.setItem("accessToken", JSON.stringify(data.token))
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      const errMessage = err.response?.data?.message;
      setError(errMessage);
    }

    // Here, handle your login logic (e.g., call API, authenticate, etc.)
    console.log("Form Data Submitted: ", formData);
  };

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Form
        title="Login"
        handleSubmit={handleLogin}
        handleChange={handleChange}
        formData={formData}
        error={error}
      />
    </div>
  );
};

export default Login;
