import React from 'react';
import './style.scss';

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
        <div className="nav">
          <div className="logo">
            <img
              src="https://assets.codepen.io/2392702/SprintView.svg"
              alt="SprintView Logo"
            />
          </div>
          <div className="search">
            <img
              src="https://assets.codepen.io/2392702/searchIcon.svg"
              className="searchIcon"
            />
            <input placeholder="Search" className="searchInput" />
          </div>
          <div className="nav-group">
            <div className="nav-link">Overview</div>
            <div className="nav-link active">Board</div>
            <div className="nav-link">Backlog</div>
            <div className="nav-link">Analytics</div>
          </div>
          <div className="flex-fill"></div>
          <div className="settings">
            <img src="https://assets.codepen.io/2392702/settingsIcon.svg" />
          </div>
          <div className="notifications">
            <img src="https://assets.codepen.io/2392702/notificationIcon.svg" />
          </div>
          <div className="profile">
            <img src="https://assets.codepen.io/2392702/profileImg.png" />
          </div>
        </div>
        <div className="border-info-container">
          <div className="team-card">
            <div className="">Cronus</div>
            <div className="">Sprint 2</div>
          </div>
          <div className="meeting-card">
            <div>Stand up</div>
            {meetings.map((meet) => (
              <div className="meet-card">
                <div className="card-icon-container">
                  <div className="card-icon"></div>
                </div>
                <div className="meet-info">
                  <div>{meet.meetingName}</div>
                  <div>https://teamcronus.meet</div>
                </div>
                <div className="meet-time">
                  <div>9:30 A.M.</div>
                </div>
              </div>
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
