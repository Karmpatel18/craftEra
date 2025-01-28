import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setError(null); // Clear any previous errors

    try {
      // Send POST request to the backend
      const response = await axios.post("http://localhost:3001/api/v1/user/signin", {
        username,
        password,
      });

      // Extract token from response
      const { token } = response.data;

      // Save the token to localStorage
      localStorage.setItem("authToken", token);

      // Navigate to the dashboard or homepage after successful login
      navigate("/");

    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <>
      <div className="flex mt-28 mb-24 bg-neutral-200/50 overflow-hidden p-5 rounded-xl w-[1000px] mx-auto my-auto justify-center items-center">
        <div
          className="flex-1 rounded-lg bg-center bg-cover"
          style={{ backgroundImage: "url('/assets/login.jpg')" }}
        >
          <img src="" className="h-[600px] object-cover rounded-lg" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-5">Sign In</h1>

          {error && (
            <div className="mb-4 p-3 bg-red-200 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}

          <form className="flex flex-col w-4/5" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-base mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-2 mb-5 border border-gray-300 rounded-md text-base"
            />

            <label htmlFor="password" className="text-base mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 mb-5 border border-gray-300 rounded-md text-base"
            />

            <button
              type="submit"
              className="p-3 text-base text-white bg-neutral-700 rounded-md hover:bg-neutral-800 duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="mt-5 text-base">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-pink-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignInPage;