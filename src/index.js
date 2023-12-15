import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { firebaseContext } from './store/firebaseContex';

import FirebaseContextProvider from './store/Contex';
import { Context } from './store/Contex'



ReactDOM.render(

    <FirebaseContextProvider value={FirebaseContextProvider}>
        <Context>
            <App />
        </Context>
    </FirebaseContextProvider>
    , document.getElementById('root'));
