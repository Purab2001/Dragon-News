import React, { useEffect } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = React.createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (updatedUser) => {
        return updateProfile(auth.currentUser, updatedUser);
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            setUser(currenUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        loading,
        setLoading,
        updateUserProfile,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;