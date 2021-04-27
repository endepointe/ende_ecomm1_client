import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const test = (e) => {
    e.preventDefault();
    console.log(email);
    // todo will be to get the google oauth credentials from the 
    ///  google authorization server
  }

  return (
    <>
      <Navbar />
      <div className={styles.login}>
        <Link href="/">
          <img
            className={styles.login_logo}
            src="https://via.placeholder.com/1024x800?text=Logo" alt="" />
        </Link>

        <div className={styles.login_container}>
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
              className={styles.login_signInButton}
              onClick={test}
              type="submit">Sign-in</button>
          </form>

          <p>
            By signing-in, you agree to the [Business Name] Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button className={styles.login_google_registerLink}>
            <a href="http://localhost:3001/auth/google">
              Sign-in with Google
          </a>
          </button>
          <button onClick={test}>
            test
        </button>

        </div>
      </div>
    </>
  );
}

export default Login;