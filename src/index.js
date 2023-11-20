import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { firebaseContext } from './store/firebaseContex';

import FirebaseContextProvider from './store/firebaseContex';



ReactDOM.render(

    <FirebaseContextProvider value={FirebaseContextProvider}>
        <App />

    </FirebaseContextProvider>
    , document.getElementById('root'));
