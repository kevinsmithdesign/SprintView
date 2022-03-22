import React from 'react';

const AssignmentCard = ({ department, storyTitle }) => {
  return (
    <div className="assignment-card">
      <div className="pill">{department}</div>
      <div className="card-title">{storyTitle}</div>
      <img
        src="https://assets.codepen.io/2392702/profileImg.png"
        className="user"
      />
      <div>2 Comments</div>
    </div>
  );
};

export default AssignmentCard;
