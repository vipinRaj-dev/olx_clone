import React, { useContext, useState } from 'react';
import {useHistory} from 'react-router-dom'
// import Logo from '../../olx-logo.png';
import './Signup.css';



import { FirebaseContext } from '../../store/Contex';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';





export default function Signup() {
  const [Username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassowrd] = useState('')

  const history = useHistory()

  const { auth, firestore } = useContext(FirebaseContext)

  const handleFuntion = async (e) => {
    e.preventDefault()

    try {
      if (auth) {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, { displayName: Username });

        await addDoc(collection(firestore, 'customers'), {
          id: userCredential.user.uid,
          username: Username,
          phone: phone
        });

        console.log('User created:', userCredential.user);
        history.push('/login')
      } else {
        console.error('Auth object is undefined or null.');
      }

    } catch (error) {
      console.error('Error creating user:', error);
    }

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/OLX_2019.svg/1200px-OLX_2019.svg.png"></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button onClick={handleFuntion}>Signup</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
