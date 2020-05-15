import React from 'react';
import { ReactComponent as ConversationIcon } from './../../assets/images/conversation.svg';
import Conversation from './conversation/conversation';
import './conversations.scss'
const Conversations = () => {
    return (
        <section id='conversations'>
            <div className="mainHeader">
                <h3>Conversations</h3>
                <ConversationIcon  className='svgIcon'/>
            </div>
            <div className="conversation-list">
                <Conversation/>
              </div>
        </section>
    )
}

export default Conversations;
