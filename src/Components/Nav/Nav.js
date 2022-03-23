import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
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
          <Link to="/" className="nav-link">
            Overview
          </Link>
          <Link to="/board" className="nav-link">
            Board
          </Link>
          <Link to="/backlog" className="nav-link">
            Backlog
          </Link>
          <Link to="/analytics" className="nav-link">
            Analytics
          </Link>

          {/* <div className="nav-link active">Board</div>
          <div className="nav-link">Backlog</div>
          <div className="nav-link">Analytics</div> */}
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
    </>
  );
};

export default Nav;
