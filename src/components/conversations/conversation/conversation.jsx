import React from 'react';
import './conversation.scss'
const Conversation = (props) => {
    const { isGroup, groupName, senderName, avatar, date, message, numberOfMessages } = props.data;
    return (
        <div className="conversation-container">
            <div className="image-container">
                <img src={avatar} alt='Avatar' />
            </div>
            <div className="conversation-info">
                <div className="header">
                    <div className="name">
                        {isGroup ? groupName : senderName}
                    </div>
                    <div className="date"> {date ? date : '---'} </div>
                </div>
               {isGroup && <div className="senderName">{senderName}</div>}
                <div className="message">
                    <div className="content">{message}</div>
                    {numberOfMessages && <div className="number">{numberOfMessages}</div>}
                </div>
            </div>
        </div>
    )
}

export default Conversation;
