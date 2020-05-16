import React from 'react';
import './conversation.scss';
const Conversation = (props) => {
    const {id, isGroup, groupName, senderName, avatar, date, message, numberOfMessages } = props.data;
    return (
        <div className={`conversation-container ${id === 1 && 'selected'}`}>
            <div className="image-container">
                <img src={avatar} alt='Avatar' />
            </div>
            <div className="conversation-info">
                <div className="header ">
                    <div className="name gothamBook">
                        {isGroup ? groupName : senderName}
                    </div>
                    <div className="date"> {date ? date : '---'} </div>
                </div>
               {isGroup && <div className="senderName gothamBook">{senderName}</div>}
                <div className="message-wrapper">
                    <div className="content gothamBook">{message}</div>
                    {numberOfMessages && <div className="number">{numberOfMessages}</div>}
                </div>
            </div>
        </div>
    )
}

export default Conversation;
