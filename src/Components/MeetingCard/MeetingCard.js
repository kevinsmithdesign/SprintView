import React from 'react';

const MeetingCard = () => {
  const meetings = [
    {
      meetingName: 'Stand Up',
      url: 'https://teamcrounus.meet',
      time: '9:30 A.M',
    },
    {
      meetingName: 'Retro',
      url: 'https://teamcrounus.meet',
      time: '9:30 A.M',
    },
    {
      meetingName: 'Planning',
      url: 'https://teamcrounus.meet',
      time: '9:30 A.M',
    },
  ];

  return (
    <div className="meeting-card">
      <div>Stand up</div>
      {meetings.map((meet) => (
        <div className="meet-card">
          <div className="card-icon-container">
            <div className="card-icon"></div>
          </div>
          <div className="meet-info">
            <div>{meet.meetingName}</div>
            <div>{meet.url}</div>
          </div>
          <div className="meet-time">
            <div>{meet.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetingCard;
