import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert(res.data.message);
      if (res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Register</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
        
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
        
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
        
        <button type="submit" className="signup-btn">Register</button>
      </form>

      <p className="signup-footer">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
