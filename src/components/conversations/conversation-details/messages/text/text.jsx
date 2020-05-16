import React from 'react';
import { currentUserId } from './../../../../../utils/auth';
import './text.scss';
const Text = (props) => {
    const { content: {message, createdBy}} = props.data;
    return (
        <div className={`message relative ${currentUserId === createdBy.userId && 'ml-auto'}`}>
            <div className={`text ${currentUserId === createdBy.userId && 'me'}`}>
                <p>{message}</p>
            </div>
            <div className={`absolute messageFooter ${currentUserId === createdBy.userId && 'row-reverse'}`}>
                <div className="avatar">
                    <img src={`${createdBy.avatar || 'assets/images/avatar2.png'}`} alt="group" />
                    <p>{createdBy.time}</p>
                </div>
                <p className='name'>{createdBy.name}</p>
            </div>
        </div>
    )
}

export default Text
