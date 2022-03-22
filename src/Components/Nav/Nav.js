import React from 'react';

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
    </>
  );
};

export default Nav;
