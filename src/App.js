import React from 'react';
import './style.scss';

import Nav from './Components/Nav/Nav';
import MeetingCard from './Components/MeetingCard/MeetingCard';
import CalendarCard from './Components/CalendarCard/CalendarCard';
import TeamCard from './Components/TeamCard/TeamCard';

export default function App() {
  return (
    <div>
      <div className="page-container">
        <Nav />
        <div className="border-info-container">
          <TeamCard />
          <MeetingCard />
          <CalendarCard />
        </div>
      </div>
    </div>
  );
}
