import React, { createContext } from 'react';
import { db, auth , firestore } from '../firebase/config' 

export const FirebaseContext = createContext();

const FirebaseContextProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ db, auth ,firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
