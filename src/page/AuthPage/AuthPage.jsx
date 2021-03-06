import React from 'react'
import SignInWithGoogle from '../../components/SignInWithGoogle/SignInWithGoogle'

import './AuthPage.css'

const AuthPage = () => {
    return (
        <div className="auth-page">
            <div className="auth-page__form">
                <div className="auth-page__form_logo">
                    Wassap Homie
                </div>
                <div className="auth-page__form_button">
                    <SignInWithGoogle />
                    <SignInWithGoogle />
                </div>
                <div className="auth-page__form_footer">
                    Its my chat
                </div>
            </div>
        </div>
    )
}

export default AuthPage