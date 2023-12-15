import React, { createContext, useMemo, useState } from 'react';
import { db, auth , firestore } from '../firebase/config' 

export const FirebaseContext = createContext();

export const AuthContext = createContext(null)

const FirebaseContextProvider = ({ children }) => {
  console.log(children, 'this is');
  return (
    <FirebaseContext.Provider value={{ db, auth ,firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export  function Context ({children}){
    const [user , setUser] = useState('')
    // console.log(`this is the user data`);
    // console.log(user);
    return(
        <AuthContext.Provider value={{user , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default FirebaseContextProvider;




