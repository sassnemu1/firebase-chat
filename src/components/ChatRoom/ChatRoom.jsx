import React, { useRef, useState } from 'react'
import ChatMessage from './ChatMessage/ChatMessage'
import './ChatRoom.css'

import firebase from 'firebase/app'
import { auth, firestore } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const ChatRoom = () => {
    const dummy = useRef()

    const messageRef = firestore.collection('message')
    const query = messageRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, { idField: 'id' })
    const [formValue, setFormValue] = useState('')

    const sendMessege = async(e) => {
        const { uid, photoURL, displayName } = auth.currentUser
        e.preventDefault()
        
        await messageRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            displayName
        })
        
        setFormValue('')
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <main className="chat-room">
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <div ref={dummy}></div>
            </main>
            
            <form className="message__form" onSubmit={sendMessege}>
                <input 
                    className="message__input"
                    placeholder="Введите сообщение"
                    value={formValue} 
                    onChange={(e) => setFormValue(e.target.value)} 
                />
                <button className="message__button" type="submit">{'>'}</button>
            </form>
        </>
    )
}

export default ChatRoom