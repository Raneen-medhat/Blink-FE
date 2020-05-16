import React from 'react';
import { SearchIcon } from './../../../utils/images-store';
import './conversation_details.scss';
const  Conversation_details = () => {
    return (
        <div id="conversationDetails">
            <div className="header">
                <div className="name">Mom’s Discharge Plan</div>
                <div className="icons">
                    <img src='assets/images/group.png'  className='icon' alt="group"/>
                    <img src='assets/images/filter.png' className='icon' alt="filter"/>
                    <SearchIcon className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Conversation_details;
