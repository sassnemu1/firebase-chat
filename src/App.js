import React from 'react'
import './App.css'

import AuthPage from './page/AuthPage/AuthPage'
import ChatRoom from './components/ChatRoom/ChatRoom'
import Navbar from './components/Navbar/Navbar'

import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const App = () => {
    const [user] = useAuthState(auth)

    return (
            <div className="app-wraper">
                <header className="header">
                    {user ? <Navbar /> : <span></span>}
                </header>

                <section className="section">
                    {user ? <ChatRoom /> : <AuthPage />}
                </section>
            </div>
    )
}

export default App