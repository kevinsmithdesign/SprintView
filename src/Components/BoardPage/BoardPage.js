import React from 'react';
import AssignmentCard from '../AssignmentCard/AssignmentCard';

const BoardPage = () => {
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
  );
};

export default BoardPage;
