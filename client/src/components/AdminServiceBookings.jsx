import React, { useState, useEffect } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import { API_URL } from '../constants';
import AdminServiceBookingSearch from './AdminServiceBookingSearch';
import { formatDate, formatDateLong } from '../utils/dateUtils';

function AdminServiceBookings() {
  const [serviceBookings, setServiceBookings] = useState([]);
  const [searchServiceBookingId, setSearchServiceBookingId] = useState('');
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchLastName, setSearchLastName] = useState('');
  const [searchServiceName, setSearchServiceName] = useState('');
  const [searchStartTime, setSearchStartTime] = useState('');
  const [searchEndTime, setSearchEndTime] = useState('');
  const [filteredBookings, setFilteredBookings] = useState(serviceBookings);
  const [showModal, setShowModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [selectedBookingTimeSlotId, setSelectedBookingTimeSlotId] = useState(null);
  const [loading, setLoading] = useState([]);
  const [reload, setReload] = useState(false);

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
  }, [reload]);

  const fetchOriginalServiceBookings = async () => {
    try {
      const response = await fetch(`${API_URL}/api/servicebookings`);
      const result = await response.json();
      setServiceBookings(result);
      setFilteredBookings(result);
    } catch (error) {
      /* console.error('Error fetching service bookings:', error); */
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

  const handleDelete = async (bookingId, timeSlotId) => {
    setSelectedBookingId(bookingId);
    setSelectedBookingTimeSlotId(timeSlotId);
    setShowModal(true);
  };

  const handleConfirmation = async (confirmed) => {
    setShowModal(false);

    if (confirmed) {
      try {
        const deleteResponse = await fetch(
          `${API_URL}/api/servicebookings/${selectedBookingId}?timeSlotId=${selectedBookingTimeSlotId}`,
          {
            method: 'DELETE',
          },
        );

        if (deleteResponse.ok) {
          setServiceBookings((prevBookings) =>
            prevBookings.filter((booking) => booking.serviceBookingId !== selectedBookingId),
          );
          await fetch(
            `${API_URL}/api/servicebookings/${selectedBookingTimeSlotId}/send-cancellation-email`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ timeSlotId: selectedBookingTimeSlotId }),
              credentials: 'include',
            },
          );

          setReload(!reload);
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
    'Service id',
    'Service name',
    'Start time',
    'End time',
    'Time slot id',
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

      if (fieldName === 'serviceBookingId') {
        const fieldValueString = fieldValue.toString();
        return fieldValueString.includes(searchValue);
      }

      if (typeof fieldValue === 'string') {
        return fieldValue.toLowerCase().includes(searchValue.toLowerCase());
      }

      return false;
    });

    setServiceBookings(filteredList);
    setFilteredBookings(filteredList);
  };

  const resetSearch = () => {
    setSearchServiceBookingId('');
    setSearchFirstName('');
    setSearchLastName('');
    setSearchServiceName('');
    setSearchStartTime('');
    setSearchEndTime('');
    setFilteredBookings(serviceBookings);
    fetchOriginalServiceBookings();
  };

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex justify-content-between text-dark p-1">
        <h3 className="josefin-font fw-bold">BOOKINGS FOR SERVICES</h3>
      </div>

      <AdminServiceBookingSearch
        onSearch={onSearch}
        searchServiceBookingId={searchServiceBookingId}
        setSearchServiceBookingId={setSearchServiceBookingId}
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
              <th className="py-3 px-2 bg-dark text-white fw-normal fs-6 text-uppercase text-center">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((serviceBooking) => (
              <tr key={`serviceBookigs-key-${serviceBooking.serviceBookingId}`}>
                {modifiedHeaders.map((header) => (
                  <td className="p-4 text-center" key={`serviceBookings-key-table-${header}`}>
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
                    {header === 'User id' && (
                      <div>
                        <div>{serviceBooking.userId}</div>
                      </div>
                    )}
                    {header === 'Service id' && (
                      <div>
                        <div>{serviceBooking.serviceId}</div>
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
                    {header === 'Time slot id' && (
                      <div>
                        <div>{serviceBooking.timeSlotId}</div>
                      </div>
                    )}
                  </td>
                ))}

                <td className="p-3 text-center">
                  <Button
                    variant="danger"
                    onClick={() =>
                      handleDelete(serviceBooking.serviceBookingId, serviceBooking.timeSlotId)
                    }
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
