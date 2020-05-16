import React from 'react';
import { currentUserId } from '../../../../../utils/auth';
import './text.scss';
const Text = (props) => {
    const { content: {message, createdBy}} = props.data;
    return (
        <div className={`message relative gothamBook ${currentUserId === createdBy.userId && 'ml-auto me'}`}>
            <div className={`text ${currentUserId === createdBy.userId && 'me'}`}>
                <p className='gothamBook'>{message}</p>
            </div>
            <div className={`absolute messageFooter ${currentUserId === createdBy.userId && 'row-reverse me'}`}>
                <div className={`avatar  ${currentUserId === createdBy.userId && 'row-reverse '}`}>
                    <img src={`${createdBy.avatar || 'assets/images/avatar2.png'}`} alt="group" />
                    <p>{createdBy.time}</p>
                </div>
                <p  className={`${currentUserId === createdBy.userId ? 'mine' : 'name'}`}>{createdBy.name}</p>
            </div>
        </div>
    )
}

export default Text
