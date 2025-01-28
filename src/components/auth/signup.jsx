import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';
import { Route } from "lucide-react";
import SignIn from './login';
export default function SignUpPage() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/signup", { username, password })
      setUser(response.data)
      navigate("/login");
    } catch (error) {
      console.log(error)
    }
    
  }
    return (
      <div>
      {!user ? (
        <div className="flex mt-28 mb-24 bg-neutral-200/50 overflow-hidden p-5 rounded-xl w-[1000px] mx-auto my-auto justify-center items-center">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-2xl mb-5">Create an Account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-4/5">
              <label htmlFor="email" className="text-base mb-1">Email:</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="p-2 mb-5 border border-gray-300 rounded-md text-base"
              />

              <label htmlFor="password" className="text-base mb-1">Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="p-2 mb-5 border border-gray-300 rounded-md text-base"
              />

              <button
                type="submit"
                className="p-3 text-base text-white bg-neutral-700 rounded-md hover:bg-neutral-800 duration-300"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-5 text-base">
              Already have an account? <Link to="/login" className="text-pink-400 hover:underline">Log in</Link>
            </p>
          </div>

          <div className="flex-1 rounded-lg bg-center bg-cover" style={{ backgroundImage: "url('/assets/signup.jpg')" }}>
            <img className="h-[600px] object-cover rounded-lg" />
          </div>
        </div>
      ) : (
        <Route path="/login" element={<SignIn />} />
      )}
    </div>
    
    );
  }