import React, { useState, useEffect } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import { API_URL } from '../constants';
import AdminBookingSearch from './AdminBookingSearch';
import { formatDate, formatDateLong } from '../utils/dateUtils';

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchLastName, setSearchLastName] = useState('');
  const [searchEventName, setSearchEventName] = useState('');
  const [searchStartTime, setSearchStartTime] = useState('');
  const [searchEndTime, setSearchEndTime] = useState('');
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const [showModal, setShowModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchEventBookings = async () => {
      try {
        const response = await fetch(`${API_URL}/api/bookings`);
        const result = await response.json();
        setBookings(result);
        setFilteredBookings(result);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching events:', error);
      }
    };
    fetchEventBookings();
  }, []);

  const fetchOriginalBookings = async () => {
    try {
      const response = await fetch(`${API_URL}/api/bookings`);
      const result = await response.json();
      setBookings(result);
      setFilteredBookings(result);
    } catch (error) {
      // Handle error
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // console.log(bookings);

  const handleDelete = async (bookingId) => {
    setSelectedBookingId(bookingId);
    setShowModal(true);
  };

  const handleConfirmation = async (confirmed) => {
    setShowModal(false);

    if (confirmed) {
      try {
        const deleteResponse = await fetch(`${API_URL}/api/bookings/${selectedBookingId}`, {
          method: 'DELETE',
        });

        if (deleteResponse.ok) {
          setBookings((prevBookings) =>
            prevBookings.filter((booking) => booking.bookingId !== selectedBookingId),
          );
        } else {
          /* console.error('Error deleting service booking'); */
        }
      } catch (error) {
        /* console.error('Error deleting service booking:', error); */
      }
    }
  };

  const modifiedHeaders = [
    'Booking id',
    'First name',
    'Last name',
    'User id',
    'Event id',
    'Event name',
    'Start time',
    'End time',
  ];

  const onSearch = (searchValue, fieldName) => {
    const filteredList = bookings.filter((booking) => {
      const fieldValue = booking[fieldName];

      const searchDate = new Date(searchValue);
      if (fieldName === 'start_time') {
        const formattedStartTime = formatDate(fieldValue);
        return formattedStartTime >= formatDate(searchDate);
      }
      if (fieldName === 'end_time') {
        const formattedEndTime = formatDate(fieldValue);
        return formattedEndTime <= formatDate(searchDate);
      }

      if (fieldName === 'bookingId') {
        const fieldValueString = fieldValue.toString();
        return fieldValueString.includes(searchValue);
      }

      if (typeof fieldValue === 'string') {
        return fieldValue.toLowerCase().includes(searchValue.toLowerCase());
      }

      return false;
    });

    setBookings(filteredList);
    setFilteredBookings(filteredList);
  };

  const resetSearch = () => {
    setSearchId('');
    setSearchFirstName('');
    setSearchLastName('');
    setSearchEventName('');
    setSearchStartTime('');
    setSearchEndTime('');
    fetchOriginalBookings();
  };

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex justify-content-between text-dark p-1">
        <h3 className="josefin-font fw-bold">BOOKINGS FOR EVENTS</h3>
      </div>

      <AdminBookingSearch
        onSearch={onSearch}
        searchId={searchId}
        setSearchId={setSearchId}
        searchFirstName={searchFirstName}
        setSearchFirstName={setSearchFirstName}
        searchLastName={searchLastName}
        setSearchLastName={setSearchLastName}
        searchEventName={searchEventName}
        setSearchEventName={setSearchEventName}
        searchStartTime={searchStartTime}
        setSearchStartTime={setSearchStartTime}
        searchEndTime={searchEndTime}
        setSearchEndTime={setSearchEndTime}
        resetSearch={resetSearch}
      />

      <div className="mt-3 w-100">
        <Table striped bordered hover responsive className=" text-nowrap shadow-sm">
          <thead className="table-dark">
            <tr>
              {modifiedHeaders.map((header) => (
                <th
                  className="py-3 px-2 text-white fw-normal fs-6 text-uppercase text-center"
                  key={`bookings-key-${header}`}
                >
                  {header}
                </th>
              ))}

              <th className="py-3 px-2 bg-dark text-white fw-normal fs-6 text-uppercase text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.bookingId}>
                {modifiedHeaders.map((header) => (
                  <td className="p-4 text-center" key={`${booking.bookingId}-${header}`}>
                    {header === 'Booking id' && <div>{booking.bookingId}</div>}
                    {header === 'First name' && <div>{booking.first_name}</div>}
                    {header === 'Last name' && <div>{booking.last_name}</div>}
                    {header === 'User id' && <div>{booking.user_id}</div>}
                    {header === 'Event id' && <div>{booking.event_id}</div>}
                    {header === 'Event name' && <div>{booking.event_name}</div>}
                    {header === 'Start time' && <div>{formatDateLong(booking.start_time)}</div>}
                    {header === 'End time' && <div>{formatDateLong(booking.end_time)}</div>}
                  </td>
                ))}

                <td className="p-3 text-center">
                  <Button variant="danger" onClick={() => handleDelete(booking.bookingId)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this booking?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleConfirmation(false)}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleConfirmation(true);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

export default AdminBookings;
