import React from 'react'
import './MessageText.css'

const MessageText = (props) => {
    return (
        <div className="message__text">
            <p>{props.message}</p>
        </div>
    )
}

export default MessageText