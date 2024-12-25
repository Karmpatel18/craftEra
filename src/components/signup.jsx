import './signup.css';
import { Link } from 'react-router-dom';
function SignUpPage() {
  return (
    <>
      <div className="container">
        <div className="form-box">
          <form className="form">
            <span className="title">Sign up</span>
            <span className="subtitle">Create an account with your email.</span>
            <div className="form-container">
              <input type="text" className="input" placeholder="Full Name" />
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button>Sign up</button>
          </form>
          <div className="form-section">
            <p>
              Have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div></div>
    </>
  );
}

export default SignUpPage;
