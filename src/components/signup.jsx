import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <>
      <div className="flex mt-28 mb-24 bg-neutral-200/50 overflow-hidden p-5 rounded-xl w-[1000px] mx-auto my-auto justify-center items-center">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-5">Create an Account</h1>
          <form className="flex flex-col w-4/5">
            <label htmlFor="email" className="text-base mb-1">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              className="p-2 mb-5 border border-gray-300 rounded-md text-base"
            />

            <label htmlFor="password" className="text-base mb-1">Password:</label>
            <input 
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
          <img   className="h-[600px] object-cover rounded-lg" />
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
