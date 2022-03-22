import React, { useState } from 'react';

const CalendarCard = () => {
  const calendar = [
    { day: 'Mon', date: '21', active: 'false' },
    { day: 'Tues', date: '22', active: 'false' },
    { day: 'Wed', date: '23', active: 'false' },
    { day: 'Thur', date: '24', active: 'true' },
    { day: 'Fri', date: '25', active: 'false' },
    { day: 'Sat', date: '26', active: 'false' },
    { day: 'Sun', date: '27', active: 'false' },
  ];

  const [currentMonth, setCurrentMonth] = useState('January 2022');

  const previousMonth = () => {
    console.log('previous month');
    if (currentMonth === 'January 2022') {
      setCurrentMonth('December 2021');
    } else if (currentMonth === 'February 2022') {
      setCurrentMonth('January 2022');
    }
  };

  const futureMonth = () => {
    console.log('future month');
    if (currentMonth === 'January 2022') {
      setCurrentMonth('February 2022');
    } else if (currentMonth === 'December 2021') {
      setCurrentMonth('January 2022');
    }
  };

  return (
    <div className="calendar-card">
      <div className="d-flex calendar-title">
        <div className="d-flex flex-fill align-items-center">
          {currentMonth}
        </div>
        <div className="d-flex">
          <div
            className="calendar-forward-backward-btn mr-4px"
            onClick={previousMonth}
          >
            <img src="https://assets.codepen.io/2392702/left-arrow.svg" />
          </div>
          <div className="calendar-forward-backward-btn" onClick={futureMonth}>
            <img src="https://assets.codepen.io/2392702/right-arrow.svg" />
          </div>
        </div>
      </div>
      <div className="d-flex">
        {calendar.map((calendarInfo) => (
          <div className="date-container">
            <div className="day">{calendarInfo.day}</div>
            {calendarInfo.active === true ? (
              <div className="date active-color">{calendarInfo.date}</div>
            ) : (
              <div className="date not-active">{calendarInfo.date}</div>
            )}
            {console.log('asdf', calendarInfo.active)}
            {/* <div className="date">{calendarInfo.date}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCard;
