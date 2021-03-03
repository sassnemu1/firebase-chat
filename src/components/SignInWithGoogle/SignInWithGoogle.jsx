import React from 'react'
import firebase from 'firebase/app'
import { auth } from '../../firebase'

import './SignInWithGoogle.css'

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    
    return (
        <button 
            className="button__sign_in_with_google" 
            onClick={signInWithGoogle}
        >
                Sign In with Google
        </button>
    )
}

export default SignIn
