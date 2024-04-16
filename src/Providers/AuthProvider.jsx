import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // Update user Profile
    // const updateUserProfile = (name, phone, photo) => {
    //         console.log(name, phone, photo);
    //         updateProfile(auth.user, {
    //             displayName: name,
    //             phoneNumber: phone,
    //             photoURL: photo
    //         })
    //         .then(() => console.log('ami kano connect korte partesi na'))
    //         .catch(error => {
    //             console.log("Hassokor",error.message)
    //         })
    //         // console.log(name,photo,phone)
    // }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, auth, loading, createUser, logOut, signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.object.isRequired,
}
export default AuthProvider;