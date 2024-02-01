import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Bs4CircleFill } from 'react-icons/bs';
import { MdDeleteForever, MdCancel } from 'react-icons/md';
import { Col } from 'react-bootstrap';
import { formatDateLong } from '../utils/dateUtils';
import { useAuth } from '../contexts/AuthContext';
import { API_URL } from '../constants';
import ConfirmBookingModal from './ConfirmBookingModal';

function CurrentBookingWindow({
  currentBookingItems,
  handleDeleteItemFromBooking,
  handleResetBooking,
}) {
  const { user } = useAuth();
  const [showConfirmBookingModal, setShowConfirmBookingModal] = useState(false);

  const handleShowModal = () => {
    setShowConfirmBookingModal(true);
  };

  const handleBookingSubmit = () => {
    currentBookingItems.forEach(async (booking) => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timeSlotId: booking.time_slot_id,
          memberId: user.id,
          isReserved: true,
        }),
      };

      try {
        await fetch(`${API_URL}/api/booking`, requestOptions);
        /* const result = await response.json();
        if (result) {
          window.location.reload();
        } */
      } catch (error) {
        // console.error('Error during booking:', error);
      }
    });
  };

  return (
    currentBookingItems.length > 0 && (
      <div>
        <div className="d-flex align-items-center fs-5 fw-light pt-5 py-2">
          <Bs4CircleFill className="me-2 " /> Confirm your booking!
        </div>
        <Col xs={12} lg={9} className="">
          {currentBookingItems.map((item) => (
            <div
              key={item.time_slot_id}
              className="d-flex justify-content-between align-items-center border border-light-gray p-3 mb-2"
            >
              <div className="p-2">
                <span className="fw-bold">{item.serviceName}</span>
                <span> - {formatDateLong(item.start_time)} - </span>
                <span>{formatDateLong(item.end_time)}</span>
              </div>
              <button
                type="button"
                className="btn btn-danger btn-sm d-flex align-items-center"
                onClick={() => handleDeleteItemFromBooking(item.time_slot_id)}
              >
                <MdDeleteForever className="me-2" />
                DELETE
              </button>
            </div>
          ))}
        </Col>
        <div className="d-flex flex-row">
          <div className="d-flex justify-content-start mt-3">
            <button
              type="button"
              className="btn btn-dark d-flex align-items-center m-2"
              onClick={handleResetBooking}
            >
              <MdCancel className="me-2" />
              RESET
            </button>
          </div>

          <div className="d-flex justify-content-start mt-3">
            <button
              type="button"
              className="btn btn-success d-flex align-items-center m-2"
              onClick={() => {
                handleBookingSubmit();
                handleShowModal();
              }}
            >
              <MdCancel className="me-2" />
              CONFIRM BOOKING
            </button>
          </div>
        </div>{' '}
        <ConfirmBookingModal
          show={showConfirmBookingModal}
          handleClose={() => setShowConfirmBookingModal(false)}
        />
      </div>
    )
  );
}

CurrentBookingWindow.propTypes = {
  currentBookingItems: PropTypes.PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  ).isRequired,
  handleDeleteItemFromBooking: PropTypes.func.isRequired,
  handleResetBooking: PropTypes.func.isRequired,
};

export default CurrentBookingWindow;
