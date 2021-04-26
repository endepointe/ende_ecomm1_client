import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
// import {auth} from 

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const test = (e) => {
    e.preventDefault();
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://via.placeholder.com/1024x800?text=Logo" alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />

          <button
            className="login_signInButton"
            type="submit">Sign-in</button>
        </form>

        <p>
          By signing-in, you agree to the [Business Name] Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login_google_registerLink">
          <a href="http://localhost:3001/auth/google">
            Sign-in with Google
          </a>
        </button>
        <button onClick={test}>
          test
        </button>

      </div>
    </div>
  );
}

export default Login;