import React from 'react';
import { currentUserId } from '../../../../../utils/auth';
import './action.scss';
const Action = (props) => {
    const { content: { headline, date, continues, note, status, createdBy } } = props.data;
    return (
        <div className={`message relative ${currentUserId === createdBy.userId && 'ml-auto me'}`}>
            <div className={`action ${currentUserId === createdBy.userId && 'me'}`}>
                <div className="headline Medium-Bold">{headline}</div>
                <div className="date">
                    <img src="assets/images/date.png" alt="date" />
                    <div className="content gothamBook">
                        <p>{date}</p>
                        <p>{continues}</p>
                    </div>
                </div>
                <div className="note">
                    <img src='assets/images/notes.png' className='icon' alt="notes" />
                    <p className='noteName gothamBook'>{note}</p>
                </div>
                <div className="footer">
                    <div className="status">
                        <img src={`${status.icon || 'assets/images/check.png'}`} className='icon' alt="notes" />
                        {status.name}
                    </div>
                     <div className={`createdBy  ${currentUserId === createdBy.userId && 'row-reverse'}`}>
                        <div className="imageContainer">
                            <img src={`${createdBy.avatar || 'assets/images/avatar2.png'}`} alt="group" />
                        </div>
                        <div className="info gothamBook">
                            <div className="name">{createdBy.name}</div>
                            <div>{createdBy.date}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute messageFooter ${currentUserId === createdBy.userId && 'row-reverse me'}`}>
                <div className={`avatar  ${currentUserId === createdBy.userId && 'row-reverse '}`}>
                    <img src={`${createdBy.avatar || 'assets/images/avatar2.png'}`} alt="group" />
                    <p>{createdBy.time}</p>
                </div>
                <p  className={`${currentUserId === createdBy.userId ? 'mine' : 'name'}`}>
                    {currentUserId === createdBy.userId ? 'me' : createdBy.name}
                </p>
            </div>
        </div>
    )
}
export default Action;
