import React, { useState, useEffect } from 'react';
import { Button, Table, NavLink } from 'react-bootstrap';
import { API_URL } from '../constants';

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchEventBookings = async () => {
      try {
        const response = await fetch(`${API_URL}/api/bookings`);
        const result = await response.json();
        setBookings(result);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching events:', error);
        setLoading(false);
      }
    };
    fetchEventBookings();
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
    'Event id',
    'Event name',
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
                  key={`members-key-${header}`}
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
            {bookings.map((booking) => (
              <tr>
                {modifiedHeaders.map((header) => (
                  <td className="p-3 text-center">
                    {header === 'Booking id' && (
                      <div>
                        <div>{booking.bookingId}</div>
                      </div>
                    )}
                    {header === 'Member id' && (
                      <div>
                        <div>{booking.member_id}</div>
                      </div>
                    )}
                    {header === 'First name' && (
                      <div>
                        <div>{booking.first_name}</div>
                      </div>
                    )}
                    {header === 'Last name' && (
                      <div>
                        <div>{booking.last_name}</div>
                      </div>
                    )}
                    {header === 'Username' && (
                      <div>
                        <div>{booking.username}</div>
                      </div>
                    )}
                    {header === 'Event id' && (
                      <div>
                        <div>{booking.event_id}</div>
                      </div>
                    )}
                    {header === 'Event name' && (
                      <div>
                        <div>{booking.event_name}</div>
                      </div>
                    )}
                    {header === 'Start time' && (
                      <div>
                        <div>{booking.start_time}</div>
                      </div>
                    )}
                    {header === 'End time' && (
                      <div>
                        <div>{booking.end_time}</div>
                      </div>
                    )}
                  </td>
                ))}
                <td className="p-3 text-center">
                  <NavLink
                    to={`/admin/bookings/${booking.bookingId}`}
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

export default AdminBookings;
