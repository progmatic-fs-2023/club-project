import React, { useState, useEffect } from 'react';
import { Button, Table, NavLink } from 'react-bootstrap';
import { API_URL } from '../constants';

function AdminServiceBookings() {
  const [serviceBookings, setServiceBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServiceBookings = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/servicebookings`);
        const result = await response.json();
        setServiceBookings(result);
      } catch (error) {
        /* console.error('Error fetching service bookings:', error); */
      } finally {
        setLoading(false);
      }
    };

    fetchServiceBookings();
  }, []);

  const handleDelete = async (bookingId) => {
    try {
      const response = await fetch(`${API_URL}/api/servicebookings/${bookingId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setServiceBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.serviceBookingId !== bookingId),
        );
      } else {
        /* console.error('Error deleting service booking'); */
      }
    } catch (error) {
      /* console.error('Error deleting service booking:', error); */
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

  const modifiedHeaders = [
    'Booking id',
    'Member id',
    'First name',
    'Last name',
    'Username',
    'Service id',
    'Service name',
    'Time slot id',
    'Start time',
    'End time',
  ];

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex justify-content-between text-dark p-1">
        <h3 className="josefin-font fw-bold">BOOKINGS FOR EVENTS</h3>
      </div>

      <div>filter</div>

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
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {serviceBookings.map((serviceBooking) => (
              <tr key={serviceBooking.serviceBookingId}>
                {modifiedHeaders.map((header) => (
                  <td
                    className="p-4 text-center"
                    key={`${serviceBooking.serviceBookingId}-${header}`}
                  >
                    {header === 'Booking id' && <div>{serviceBooking.serviceBookingId}</div>}
                    {header === 'Member id' && <div>{serviceBooking.memberId}</div>}
                    {header === 'First name' && <div>{serviceBooking.firstName}</div>}
                    {header === 'Last name' && <div>{serviceBooking.lastName}</div>}
                    {header === 'Username' && <div>{serviceBooking.username}</div>}
                    {header === 'Service id' && <div>{serviceBooking.serviceId}</div>}
                    {header === 'Service name' && <div>{serviceBooking.serviceName}</div>}
                    {header === 'Time slot id' && <div>{serviceBooking.timeSlotId}</div>}
                    {header === 'Start time' && <div>{serviceBooking.startTime}</div>}
                    {header === 'End time' && <div>{serviceBooking.endTime}</div>}
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
    </main>
  );
}

export default AdminServiceBookings;
