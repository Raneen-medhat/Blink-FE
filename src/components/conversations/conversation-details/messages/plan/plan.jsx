import React from 'react';
import './plan.scss';
const Plan = () => {
    return (
        <div className="plan">
            <div className="headline">Chest Pain</div>
            <div className="date">
                <img src="assets/images/date.png" alt="date" />
                <div className="content">
                    <p>FRI Oct 12 4:27 PM</p>
                    <p className='details'>kbecker@gmail.com completed - THU Oct 11 3:29 PM</p>
                </div>
            </div>
            <div className="info">
                <div className="status">
                    <img src="assets/images/react.png" alt="date" />
                    <p>Severe</p>
                </div>
                <div className="history">
                    <img src="assets/images/history.png" alt="date" />
                    <p>View History</p>
                </div>
            </div>
        </div>
    )
}

export default Plan
