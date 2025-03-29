import React,{useState} from 'react';
import './Background_LoginForm_LogoSection.css';
import { useAuth } from '../utils/AuthContext'; // Use the AuthContext
import { useNavigate } from 'react-router-dom'; // To navigate to another page after login

const Background_LoginForm_LogoSection = () => {
  const { login } = useAuth(); // Access the login function from AuthContext
  const navigate = useNavigate();

  // Local state for handling form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating successful login
    if (email && password) {
      login({ email,password }); // Pass the user details to the login function
     navigate('/workflow'); // Redirect to the protected page
    }
  };

  return (
    <div className="container">
      {/* Background Section */}
      <div className="background">
        <img src="https://dashboard.codeparrot.ai/api/image/Z-Zekh_Ow-G56607/bg-img.png" alt="background" className="bg-image" />
        <div className="bg-overlay"></div>
      </div>

      {/* Logo and Text Section */}
      <div className="logo-section">
        <img src="https://dashboard.codeparrot.ai/api/image/Z-Zekh_Ow-G56607/logo-hig.png" alt="HighBridge" className="logo" />
        <div className="text-content">
          <h1>Building the Future...</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="form-section">
        <div className="form-container">
          <div className="header">
            <span className="welcome">WELCOME BACK!</span>
            <h2>Log In to your Account</h2>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email" 
               placeholder="Type here..." />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" 
              placeholder="Type here..."
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <img src="https://dashboard.codeparrot.ai/api/image/Z-Zekh_Ow-G56607/checkbox.png" alt="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-button">Log In</button>
          </form>

          <div className="divider">
            <span>Or</span>
          </div>

          <div className="social-login">
            <button className="social-button">
              <img src="https://dashboard.codeparrot.ai/api/image/Z-Zekh_Ow-G56607/icons-8-g.png" alt="Google" />
              <span>Log In with Google</span>
            </button>
            <button className="social-button">
              <img src="https://dashboard.codeparrot.ai/api/image/Z-Zekh_Ow-G56607/icons-8-f.png" alt="Facebook" />
              <span>Log In with Facebook</span>
            </button>
            <button className="social-button">
              <img src="https://dashboard.codeparrot.ai/api/image/Z-Zekh_Ow-G56607/apple.png" alt="Apple" />
              <span>Log In with Apple</span>
            </button>
          </div>

          <p className="signup-link">New User? SIGN UP HERE</p>
        </div>
      </div>
    </div>
  );
};

export default Background_LoginForm_LogoSection;

