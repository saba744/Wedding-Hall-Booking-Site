

import React, { useState } from "react"; 
import axios from "axios"; 
import { useNavigate, Link } from "react-router-dom"; 
import "./login.css"; 

function Login() {
  // State to store email and password input values
  const [formData, setFormData] = useState({ email: "", password: "" });


  const navigate = useNavigate();

  // Function to handle input field changes
  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      
      // Show success or error message from backend
      alert(res.data.message);
      
      // If login is successful
      if (res.data.success) {
        
        localStorage.setItem("token", res.data.token); 
        
        // Redirect user to home page
        navigate("/home"); 
      }
    } catch (error) {
      // Show error message if login fails
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  
  return (
    <div className="login-container">
      {}
      <h2 className="login-title">Login</h2>

      {/* Login form */}
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email Input */}
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          onChange={handleChange} 
          required 
        />
        
        {/* Password Input */}
        <label>Password</label>
        <input 
          type="password" 
          name="password" 
          placeholder="Enter your password" 
          onChange={handleChange} 
          required 
        />
        
        {/* Submit Button */}
        <button type="submit" className="login-btn">Login</button>
      </form>

      {/* Link to Signup page */}
      <p className="login-footer">
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
