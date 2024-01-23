import React, { useState, useEffect } from 'react';
import { Button, Table, NavLink } from 'react-bootstrap';
import { API_URL } from '../constants';

function AdminServiceBookings() {
  const [serviceBookings, setServiceBookings] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchServiceBookings = async () => {
      try {
        const response = await fetch(`${API_URL}/api/servicebookings`);
        const result = await response.json();
        setServiceBookings(result);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching events:', error);
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

  const modifiedHeaders = [
    'Booking id',
    'Member id',
    'First name',
    'Last name',
    'Userame',
    'Service id',
    'Service name',
    'Time slot id',
    'Start time',
    'End time',
  ];

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex justify-content-between text-dark p-1">
        <h3 className="josefin-font fw-bold">BOOKINGS FOR SERVICES</h3>
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
            </tr>
          </thead>
          <tbody>
            {serviceBookings.map((serviceBooking) => (
              <tr key={serviceBooking.serviceBookingId}>
                {modifiedHeaders.map((header) => (
                  <td className="p-4 text-center">
                    {header === 'Booking id' && (
                      <div>
                        <div>{serviceBooking.serviceBookingId}</div>
                      </div>
                    )}
                    {header === 'Member id' && (
                      <div>
                        <div>{serviceBooking.memberId}</div>
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
                    {header === 'Username' && (
                      <div>
                        <div>{serviceBooking.username}</div>
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
                    {header === 'Time slot id' && (
                      <div>
                        <div>{serviceBooking.timeSlotId}</div>
                      </div>
                    )}
                    {header === 'Start time' && (
                      <div>
                        <div>{serviceBooking.startTime}</div>
                      </div>
                    )}
                    {header === 'End time' && (
                      <div>
                        <div>{serviceBooking.endTime}</div>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </main>
  );
}

export default AdminServiceBookings;
