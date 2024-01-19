import React, { useState, useEffect } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { API_URL } from '../constants';

function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    startTime: '',
    endTime: '',
    availableSeats: '',
    eventImg: null,
    headerImg: null,
    details: '',
    moreDetails: '',
    slugName: '',
  });

  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      // console.error('Error fetching events:', error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`${API_URL}/api/events/${eventId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // const deletedEventData = await response.json();
        fetchEvents();
      } else {
        // console.error('Error deleting event');
      }
    } catch (error) {
      // console.error('Error deleting event:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, type } = e.target;
    let newValue;

    if (type === 'file') {
      const [file] = e.target.files || [];
      newValue = file;
    } else if (name === 'availableSeats') {
      newValue = Math.max(0, parseInt(e.target.value, 10));
    } else {
      newValue = e.target.value;
    }

    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: newValue }));
  };

  const handleAddEvent = async () => {
    try {
      const formData = new FormData();

      Object.keys(newEvent).forEach((key) => {
        formData.append(key, newEvent[key]);
      });

      const response = await fetch(`${API_URL}/api/events`, {
        method: 'POST',
        body: JSON.stringify(newEvent),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // const newEventData = await response.json();
        setNewEvent({
          name: '',
          startTime: '',
          endTime: '',
          availableSeats: '',
          details: '',
          moreDetails: '',
          slugName: '',
          eventImg: null,
          headerImg: null,
        });

        fetchEvents();

        // console.log('New event created with ID:', newEventData.event.id);
      } else {
        // console.error('Error adding event');
      }
    } catch (error) {
      // console.error('Error adding event:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <h2>Add New Event</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newEvent.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Slug Name:</Form.Label>
          <Form.Control
            type="text"
            name="slugName"
            value={newEvent.slugName}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Start Time:</Form.Label>
          <Form.Control
            type="datetime-local"
            name="startTime"
            value={newEvent.startTime}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End Time:</Form.Label>
          <Form.Control
            type="datetime-local"
            name="endTime"
            value={newEvent.endTime}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Available Seats:</Form.Label>
          <Form.Control
            type="number"
            name="availableSeats"
            value={newEvent.availableSeats}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Event Image:</Form.Label>
          <Form.Control type="file" accept="image/*" name="eventImg" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Header Image:</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            name="headerImg"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Details:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="details"
            value={newEvent.details}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>More Details:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="moreDetails"
            value={newEvent.moreDetails}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddEvent}>
          Add Event
        </Button>
      </Form>

      <h2 className="mt-4">Existing Events</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Available Seats</th>
            <th>Delete Event</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.startTime}</td>
              <td>{event.endTime}</td>
              <td>{event.availableSeats}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteEvent(event.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminEvents;
