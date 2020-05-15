import React from 'react';
import './conversation.scss'
const Conversation = () => {
    return (
        <div className="conversation-container">
            <div className="image-container">
                <img src={require('./../../../assets/images/avatar.png')} alt='Avatar' />
            </div>
            <div className="conversation-info">
                <div className="header">
                    <div className="name">
                        Mom’s Diet
                            </div>
                    <div className="date">
                        Oct 12
                            </div>
                </div>
                <div className="senderName">Karen Becker</div>
                <div className="message">
                    <div className="content">Sed mollis mi iaculis tincidu...</div>
                    <div className="number">2</div>
                </div>
            </div>
        </div>
    )
}

export default Conversation;
