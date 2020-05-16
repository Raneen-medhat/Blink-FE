import React from 'react';
import { SearchIcon, SendIcon } from './../../../utils/images-store';
import { conversationDetails } from './../../../utils/data-source';
import Action from './messages/action/action';
import Plan from './messages/plan/plan';
import Text from './messages/text/text';
import './conversation_details.scss';
const Conversation_details = () => {
    const renderConversation = (conversation) => {
        switch (conversation.type){
            case 0 :
            return <Action key={conversation.id} data={conversation}/>

            case 1 :
            return <Plan  key={conversation.id} data={conversation}/>

            case 2:
            return <Text key={conversation.id} data={conversation}/>
        }
    }
    
    return (
        <div id="conversationDetails">
            <div className="header">
                <div className="name">Mom’s Discharge Plan</div>
                <div className="icons">
                    <img src='assets/images/group.png' className='icon' alt="group" />
                    <img src='assets/images/filter.png' className='icon' alt="filter" />
                    <SearchIcon className='icon' />
                </div>
            </div>
            <div className="conversationContent">
                <div className="text-center newAdded ">
                    <p>Starter Care Plan created + daily actions added
                        <span>12:10p</span>
                    </p>
                </div>
                {
                    conversationDetails.map((conversation, index) => {
                     return  renderConversation(conversation)
                    })
                }
            </div>
            <div className="conversationFooter">
                <form className="conversationFooter-content">
                    <div className="add">+</div>
                    <input type="text" placeholder='message'/>
                    <button>
                        <SendIcon className='icon'/>
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Conversation_details;
