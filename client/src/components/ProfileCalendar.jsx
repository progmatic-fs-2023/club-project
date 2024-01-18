import React, { useState } from 'react';
import Calendar from 'react-calendar';

const eventsFromDatabase = [
  { date: '2024-01-01', eventName: 'Event1', details: 'Details of Event 1' },
  { date: '2024-01-16', eventName: 'Event2', details: 'Details of Event 2' },
];

function CalendarApp() {
  const [dateNew, setDateNew] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onChange = (selectedDate) => {
    setDateNew(selectedDate);
    const formattedDate = formatDate(selectedDate);
    const chosenEvent = eventsFromDatabase.find((event) => event.date === formattedDate);
    setSelectedEvent(chosenEvent);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      const eventFromDatabase = eventsFromDatabase.find(
        (eventItem) => eventItem.date === formattedDate,
      );

      const backgroundColor = eventFromDatabase ? '#87CEEB' : 'transparent';

      return (
        <p className={eventFromDatabase ? 'has-event' : ''} style={{ backgroundColor }}>
          {eventFromDatabase ? eventFromDatabase.eventName : ''}
        </p>
      );
    }
    return null;
  };

  return (
    <div>
      <Calendar onChange={onChange} value={dateNew} tileContent={tileContent} />
      {selectedEvent && (
        <div className="mt-5 border rounded d-flex flex-column align-items-center">
          <h3 className="mt-2">{selectedEvent.eventName}</h3>
          <p>{selectedEvent.details}</p>
        </div>
      )}
    </div>
  );
}

export default CalendarApp;