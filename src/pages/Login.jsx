import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) {
      Swal.fire({
        icon: "success",
        title: "Login Successful ✅",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/"); 
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed ❌",
        text: result.message,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
