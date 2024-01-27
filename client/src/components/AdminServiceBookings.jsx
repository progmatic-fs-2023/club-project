import React, { useState, useEffect } from 'react';
import { Button, Table, NavLink, Modal } from 'react-bootstrap';
import { API_URL } from '../constants';
import AdminServiceBookingSearch from './AdminServiceBookingSearch';
import { formatDate, formatDateLong } from '../utils/dateUtils';

function AdminServiceBookings() {
  const [serviceBookings, setServiceBookings] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchLastName, setSearchLastName] = useState('');
  const [searchServiceName, setSearchServiceName] = useState('');
  const [searchStartTime, setSearchStartTime] = useState('');
  const [searchEndTime, setSearchEndTime] = useState('');
  const [filteredBookings, setFilteredBookings] = useState(serviceBookings);
  const [showModal, setShowModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchServiceBookings = async () => {
      try {
        const response = await fetch(`${API_URL}/api/servicebookings`);
        const result = await response.json();
        setServiceBookings(result);
        setFilteredBookings(result);
        setLoading(false);
      } catch (error) {
        /* console.error('Error fetching service bookings:', error); */
      }
    };

    fetchServiceBookings();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const handleDelete = async (bookingId) => {
    setSelectedBookingId(bookingId);
    setShowModal(true);
  };

  const handleConfirmation = async (confirmed) => {
    setShowModal(false);

    if (confirmed) {
      try {
        const deleteResponse = await fetch(`${API_URL}/api/servicebookings/${selectedBookingId}`, {
          method: 'DELETE',
        });

        if (deleteResponse.ok) {
          setServiceBookings((prevBookings) =>
            prevBookings.filter((booking) => booking.serviceBookingId !== selectedBookingId),
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
    'Username',
    'Service id',
    'Service name',
    'Start time',
    'End time',
  ];

  const onSearch = (searchValue, fieldName) => {
    const filteredList = serviceBookings.filter((booking) => {
      const fieldValue = booking[fieldName];

      const searchDate = new Date(searchValue);
      if (fieldName === 'startTime') {
        const formattedStartTime = formatDate(fieldValue);
        return formattedStartTime >= formatDate(searchDate);
      }
      if (fieldName === 'endTime') {
        const formattedEndTime = formatDate(fieldValue);
        return formattedEndTime <= formatDate(searchDate);
      }

      if (typeof fieldValue === 'string') {
        return fieldValue.toLowerCase().includes(searchValue.toLowerCase());
      }

      return false;
    });

    setFilteredBookings(filteredList);
  };

  const resetSearch = () => {
    setSearchId('');
    setSearchFirstName('');
    setSearchLastName('');
    setSearchServiceName('');
    setSearchStartTime('');
    setSearchEndTime('');
    setFilteredBookings(serviceBookings);
  };

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex justify-content-between text-dark p-1">
        <h3 className="josefin-font fw-bold">BOOKINGS FOR SERVICES</h3>
      </div>

      <AdminServiceBookingSearch
        onSearch={onSearch}
        searchId={searchId}
        setSearchId={setSearchId}
        searchFirstName={searchFirstName}
        setSearchFirstName={setSearchFirstName}
        searchLastName={searchLastName}
        setSearchLastName={setSearchLastName}
        searchServiceName={searchServiceName}
        setSearchServiceName={setSearchServiceName}
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
                  key={`serviceBookings-key-${header}`}
                >
                  {header}
                </th>
              ))}
              <th className="py-2 px-2 bg-dark text-dark fw-normal fs-6 text-uppercase text-center">
                \
              </th>
              <th className="py-2 px-2 bg-dark text-dark fw-normal fs-6 text-uppercase text-center">
                \
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((serviceBooking) => (
              <tr key={serviceBooking.serviceBookingId}>
                {modifiedHeaders.map((header) => (
                  <td
                    className="p-4 text-center"
                    key={`${serviceBooking.serviceBookingId}-${header}`}
                  >
                    {header === 'Booking id' && (
                      <div>
                        <div>{serviceBooking.serviceBookingId}</div>
                      </div>
                    )}
                    {header === 'First name' && (
                      <div>
                        <div>{serviceBooking.firstName}</div>
                      </div>
                    )}
                    {header === 'Last name' && (
                      <div>
                        <div>{serviceBooking.lastName}</div>
                      </div>
                    )}
                    {header === 'Service name' && (
                      <div>
                        <div>{serviceBooking.serviceName}</div>
                      </div>
                    )}
                    {header === 'Start time' && (
                      <div>
                        <div>{formatDateLong(serviceBooking.startTime)}</div>
                      </div>
                    )}
                    {header === 'End time' && (
                      <div>
                        <div>{formatDateLong(serviceBooking.endTime)}</div>
                      </div>
                    )}
                  </td>
                ))}
                <td className="p-3 text-center">
                  <NavLink
                    to={`/admin/servicebookings/${serviceBooking.serviceBookingId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">Details</Button>
                  </NavLink>
                </td>
                <td className="p-3 text-center">
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(serviceBooking.serviceBookingId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this booking?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleConfirmation(false)}>
            No
          </Button>
          <Button variant="danger" onClick={() => handleConfirmation(true)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

export default AdminServiceBookings;
