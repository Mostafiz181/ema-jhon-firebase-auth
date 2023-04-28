import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../../firebase/firebase.config';


const auth = getAuth(app);

export const AuthContext =createContext(null)

const AuthProviders = ({children}) => {
    // const user = {displayName: "mostafizur"}

    const [user,setUser]= useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
    },[])
    const authInfo ={
        user,
        createUser,
        signIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;