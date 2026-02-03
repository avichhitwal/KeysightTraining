import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        const res = await fetch("http://localhost:8484/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email, password: formData.password }),
        });
        const message = await res.text();

        if (message === "Login Successful") {
          navigate("/dashboard");
        } else {
          setError(message);
        }
      } else {
        const res = await fetch("http://localhost:8484/users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          alert("Registered successfully! You can now login.");
          setIsLogin(true);
          setFormData({ name: "", email: "", password: "", mobile: "", city: "" });
        } else {
          const msg = await res.text();
          setError(msg || "Registration failed");
        }
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </>
        )}
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
        </div>

        {error && <p className="error">{error}</p>}
      </form>

      <p
        onClick={() => {
          setIsLogin(!isLogin);
          setError("");
          setFormData({ name: "", email: "", password: "", mobile: "", city: "" });
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsLogin(!isLogin);
            setError("");
            setFormData({ name: "", email: "", password: "", mobile: "", city: "" });
          }
        }}
        role="button"
        tabIndex="0"
        className="toggle"
      >
        {isLogin
          ? "Don't have an account? Register"
          : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default Login;
