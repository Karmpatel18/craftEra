import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <>
    <div className="container">
      <div className="form-box">
        <form className="form">
          <span className="title">Sign in</span>
          <span className="subtitle">Welcome Back</span>
          <div className="form-container">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button>Sign In</button>
        </form>
        <div className="form-section">
          <p>
           Don't Have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div></div>
  </>
  );
}
  