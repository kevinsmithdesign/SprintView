import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import MeetingCard from './Components/MeetingCard/MeetingCard';
import CalendarCard from './Components/CalendarCard/CalendarCard';
import BoardPage from './Components/BoardPage/BoardPage';
import OverviewPage from './Components/OverviewPage/OverviewPage';
import BacklogPage from './Components/BacklogPage/BacklogPage';
import TeamCard from './Components/TeamCard/TeamCard';

const App = () => {
  return (
    <Router>
      <div>
        <div className="page-container">
          <Nav />
          <div className="border-info-container">
            <TeamCard />
            <MeetingCard />
            <CalendarCard />
          </div>
        </div>

        <div className="page-container-bottom">
          <Routes>
            <Route exact path="/" element={<OverviewPage />} />
            <Route exact path="/board" element={<BoardPage />} />
            <Route exact path="/backlog" element={<BacklogPage />} />
            <Route exact path="/analytics" element={<BoardPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
