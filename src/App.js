import React from 'react'
import './App.css'

import SignInWithGoogle from './components/SignInWithGoogle/SignInWithGoogle'

import ChatRoom from './components/ChatRoom/ChatRoom'
import Navbar from './components/Navbar/Navbar'

import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const App = () => {
    const [user] = useAuthState(auth)

    return (
        <div className="app-wraper">
            <header className="header">
                <Navbar />
            </header>

            <section className="section">
                {user ? <ChatRoom /> : <SignInWithGoogle />}
            </section>
        </div>
    )
}

export default App