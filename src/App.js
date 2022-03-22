import React from 'react';
import './style.scss';

import Nav from './Components/Nav/Nav';
import MeetingCard from './Components/MeetingCard/MeetingCard';
import CalendarCard from './Components/CalendarCard/CalendarCard';
import TeamCard from './Components/TeamCard/TeamCard';
import AssignmentCard from './Components/AssignmentCard/AssignmentCard';

export default function App() {
  const assignmentCards = {
    todos: [
      {
        department: 'UI Design',
        storyTitle: 'High Fidelity Checkout Mockups',
        comments: '2 Comments',
      },
      {
        department: 'UX Design',
        storyTitle: 'Revise Purchase Flow Feedback',
        comments: '6 Comments',
      },
    ],
    inProgress: [
      {
        department: 'Back-End',
        storyTitle: 'JAVA Feature Flag Updates',
        comments: '1 Comments',
      },
      {
        department: 'UI Design',
        storyTitle: 'High Fidelity Billing Cycle Flow',
        comments: '3 Comments',
      },
    ],
    review: [
      {
        department: 'Back-End',
        storyTitle: 'Upgrade API Structure',
        comments: '4 Comments',
      },
    ],
    done: [
      {
        department: 'UX Design',
        storyTitle: 'Purchase Flow User Feedback',
        comments: '1 Comments',
      },
      {
        department: 'UX Design',
        storyTitle: 'Low Fidelity Checkout Mockups',
        comments: '2 Comments',
      },
    ],
  };

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
      <div className="page-container-bottom">
        <div className="assignment-card-grid">
          <div className="card-row">
            {assignmentCards.todos.map((cardInfo) => (
              <AssignmentCard
                department={cardInfo.department}
                storyTitle={cardInfo.storyTitle}
                comments={cardInfo.comments}
              />
            ))}
          </div>
          <div className="card-row">
            {assignmentCards.inProgress.map((cardInfo) => (
              <AssignmentCard
                department={cardInfo.department}
                storyTitle={cardInfo.storyTitle}
                comments={cardInfo.comments}
              />
            ))}
          </div>
          <div className="card-row">
            {assignmentCards.review.map((cardInfo) => (
              <AssignmentCard
                department={cardInfo.department}
                storyTitle={cardInfo.storyTitle}
                comments={cardInfo.comments}
              />
            ))}
          </div>
          <div className="card-row">
            {assignmentCards.done.map((cardInfo) => (
              <AssignmentCard
                department={cardInfo.department}
                storyTitle={cardInfo.storyTitle}
                comments={cardInfo.comments}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
