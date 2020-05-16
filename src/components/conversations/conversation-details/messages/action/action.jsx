import React from 'react';
import './action.scss';
const Action = () => {
    return (
        <div className="message action ml-auto">
            <div className="headline">Daily grooming assistance</div>
            <div className="date">
                <img src="assets/images/date.png" alt="date" />
                <div className="content">
                    <p>Dec 1</p>
                    <p>Daily</p>
                </div>
            </div>
            <div className="note">
                <img src='assets/images/notes.png' className='icon' alt="notes" />
                <p className='noteName'>assist with daily grooming activities such as bathing, teeth, hair</p>
            </div>
            <div className="footer">
                <div className="status">
                    <img src='assets/images/check.png' className='icon' alt="notes" />
                    done</div>
                <div className="createdBy">
                    <div className="imageContainer">
                        <img src='assets/images/avatar2.png' alt="group" />
                    </div>
                    <div className="info">
                        <div className="name">Derek Smith completed</div>
                        <div>Mar 23 3:23p</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Action;
