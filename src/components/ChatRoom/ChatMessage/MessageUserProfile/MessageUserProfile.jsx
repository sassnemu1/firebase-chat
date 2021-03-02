import React from 'react'
import './MessageUserProfile.css'

const MessageUserProfile = (props) => {
    return (
        <div className="message__user-profile">
                <img className="message__user-image" src={props.photoURL} alt="user" />
                <span className="message__name">{props.name}</span>
        </div>
    )
}

export default MessageUserProfile