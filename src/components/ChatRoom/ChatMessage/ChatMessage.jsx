import React from 'react'
import { auth } from '../../../firebase'

import './ChatMessage.css'
import MessageText from './MessageText/MessageText'
import MessageUserProfile from './MessageUserProfile/MessageUserProfile'

const ChatMessage = (props) => {
    const { text, uid, photoURL, displayName } = props.message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`}>
            <MessageUserProfile photoURL={photoURL} name={displayName}/>
            <MessageText message={text}/>
        </div>
    )
}

export default ChatMessage