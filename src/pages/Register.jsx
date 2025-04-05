import React,{useState} from "react";
import Form from "../component/Form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPass: "",
    first_name: "",
    last_name: "",
  });
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
        const response = await axios.post("http://localhost:8080/auth/register", {
        email: formData.email,
        password: formData.password,
        repeatPass: formData.repeatPass,
        first_name: formData.first_name,
        last_name: formData.last_name
        })
        if(response.status === 200){
            console.log(response.data)
            console.log("Registered!")
            navigate("/login")
        }
    } catch(err){
        setError(err.response.data.message)
    }
  }

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Form
      title="Register"
      handleSubmit={handleRegister}
      handleChange={handleChange}
      formData={formData}
      error={error}
    />
  );
};

export default Register;
