import React from 'react';
import './style.scss';

import Nav from './Components/Nav/Nav';
import MeetingCard from './Components/MeetingCard/MeetingCard';

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

export default function App() {
  return (
    <div>
      <div className="page-container">
        <Nav />
        <div className="border-info-container">
          <div className="team-card">
            <div className="">Cronus</div>
            <div className="">Sprint 2</div>
          </div>
          <div className="meeting-card">
            <div>Stand up</div>
            {meetings.map((meet) => (
              <MeetingCard
                meetingName={meet.meetingName}
                url={meet.url}
                time={meet.time}
              />
            ))}
          </div>
          <div className="calendar-card">
            <div>calendar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
