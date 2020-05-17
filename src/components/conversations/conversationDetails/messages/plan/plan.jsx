import React from 'react';
import { currentUserId } from '../../../../../utils/auth';
import './plan.scss';
const Plan = (props) => {
    const { content: {headline, date, note, status, hasHistory, createdBy}} = props.data;
    return (
        <div className={`message relative gothamBook ${currentUserId === createdBy.userId && 'ml-auto me'}`}>
            <div className="plan">
                <div className="headline">{headline}</div>
                <div className="date gothamBook">
                    <img src="assets/images/date.png" alt="date" />
                    <div className="content">
                        <p>{date}</p>
                        <p className='details'>{note}</p>
                    </div>
                </div>
                <div className="info">
                    <div className="status gothamBook">
                        <img src={`${status.icon || 'assets/images/react.png'}`} alt="date" />
                        <p>{status.name}</p>
                    </div>
                    {
                        hasHistory &&
                        <div className="history gothamBook">
                            <img src="assets/images/history.png" alt="date" />
                            <p>View History</p>
                        </div>
                    }
                </div>
            </div>
            <div className={`absolute messageFooter gothamBook${currentUserId === createdBy.userId && 'row-reverse me'}`}>
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
export default Plan
