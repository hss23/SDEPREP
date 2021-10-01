import { initializeApp } from 'firebase/app';
import React, { useContext, useState, useEffect } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const AuthContext = React.createContext()

const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});
const auth = getAuth();
const db = getFirestore();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const provider = new GoogleAuthProvider();
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        });
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)

    }
    function logout(email, password) {
        return signOut(auth)
    }
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }
    function googleSignIn() {
        return signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                setCurrentUser(result.user);
                // ...
            }).catch((error) => {
            });
    }
    useEffect(() => {
        console.log("running")
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            user ?
                setCurrentUser(user) : setCurrentUser(null);
            setLoading(false);
        });
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        googleSignIn,
        db
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default app

