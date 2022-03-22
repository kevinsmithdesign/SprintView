import React from 'react';

const MeetingCard = ({ meetingName, url, time }) => {
  return (
    <div className="meet-card">
      <div className="card-icon-container">
        <div className="card-icon"></div>
      </div>
      <div className="meet-info">
        <div>{meetingName}</div>
        <div>{url}</div>
      </div>
      <div className="meet-time">
        <div>{time}</div>
      </div>
    </div>
  );
};

export default MeetingCard;
