import React, { useState , useContext } from 'react';
import  {useHistory} from 'react-router-dom'
// import Logo from '../../olx-logo.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../store/Contex';
import {  signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { auth } = useContext(FirebaseContext);

  const history = useHistory()
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful', userCredential.user);
      history.push('/')
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png" alt=""></img>
        <form onSubmit={handleForm}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
