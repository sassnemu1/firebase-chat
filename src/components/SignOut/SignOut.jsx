import React from 'react'
import { auth } from '../../firebase'
import './SignOut.css'

const SignOut = () => {
    return auth.currentUser && (
        <button className="sign-out__button" onClick={() => auth.signOut()}>Выход</button>
    )
}

export default SignOut