import React, { useState, useEffect } from 'react';
import { Button, Form, Table, Modal } from 'react-bootstrap';
import { formatDateLong } from '../utils/dateUtils';
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

  const [editEvent, setEditEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
        fetchEvents();
      } else {
        // console.error('Error deleting event');
      }
    } catch (error) {
      // console.error('Error deleting event:', error);
    }
  };

  const handleEditEvent = (event) => {
    setEditEvent(event);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, type } = e.target;
    let newValue;

    if (type === 'file') {
      const [file] = e.target.files || [];
      newValue = file.name;
    } else if (name === 'availableSeats') {
      newValue = Math.max(0, parseInt(e.target.value, 10));
    } else {
      newValue = e.target.value;
    }

    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: newValue }));
  };

  const handleAddEvent = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events`, {
        method: 'POST',
        body: JSON.stringify(newEvent),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
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
      } else {
        // console.error('Error adding event');
      }
    } catch (error) {
      // console.error('Error adding event:', error);
    }
  };

  const handleUpdateEvent = async () => {
    try {
      const response = await fetch(`${API_URL}/api/events/${editEvent.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editEvent),
      });

      if (response.ok) {
        fetchEvents();
        setIsEditing(false);
      } else {
        // console.error('Error updating event');
      }
    } catch (error) {
      // console.error('Error updating event:', error);
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
            <th>Edit Event</th>
            <th>Delete Event</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{formatDateLong(event.startTime)}</td>
              <td>{formatDateLong(event.endTime)}</td>
              <td>
                {event.availableSeats}/{event.modifiedAvailableSeats}
              </td>
              <td>
                <Button variant="primary" onClick={() => handleEditEvent(event)}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteEvent(event.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={isEditing} onHide={() => setIsEditing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editEvent?.name || ''}
                onChange={(e) => setEditEvent({ ...editEvent, name: e.target.value })}
              />
            </Form.Group>
            <div>
              <div className="original-date">
                <span style={{ fontSize: '12px' }}>original: </span>
                {formatDateLong(editEvent?.startTime)}
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Start Time:</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="startTime"
                  value={editEvent?.startTime || ''}
                  onChange={(e) => setEditEvent({ ...editEvent, startTime: e.target.value })}
                />
              </Form.Group>
            </div>
            <div>
              <div className="original-date">
                <span style={{ fontSize: '12px' }}>original: </span>
                {formatDateLong(editEvent?.endTime)}
              </div>
              <Form.Group className="mb-3">
                <Form.Label>End Time:</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="endTime"
                  value={editEvent?.endTime || ''}
                  onChange={(e) => setEditEvent({ ...editEvent, endTime: e.target.value })}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Available Seats:</Form.Label>
              <Form.Control
                type="number"
                name="availableSeats"
                value={editEvent?.availableSeats || ''}
                onChange={(e) => setEditEvent({ ...editEvent, availableSeats: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Details:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="details"
                value={editEvent?.details || ''}
                onChange={(e) => setEditEvent({ ...editEvent, details: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Details:</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="moreDetails"
                value={editEvent?.moreDetails || ''}
                onChange={(e) => setEditEvent({ ...editEvent, moreDetails: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdateEvent()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminEvents;
