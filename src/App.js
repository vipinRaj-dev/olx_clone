import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthContext, FirebaseContext } from './store/Contex'

/**
 * ?  =====Import Components=====
 */

import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'

function App() {
  const { setUser } = useContext(AuthContext)
  const { auth } = useContext(FirebaseContext)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        // console.log('first');
      } else {
        setUser(null);
      }
    });

  }, [])
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
