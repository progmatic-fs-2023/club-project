import React from 'react';
import PropTypes from 'prop-types';
import { Bs4CircleFill } from 'react-icons/bs';
import { MdDeleteForever, MdCancel } from 'react-icons/md';
import { Button, Col } from 'react-bootstrap';
import { formatDateLong } from '../utils/dateUtils';

function CurrentBookingWindow({
  currentBookingItems,
  handleDeleteItemFromBooking,
  handleResetBooking,
}) {
  return (
    currentBookingItems.length > 0 && (
      <div>
        <div className="d-flex align-items-center fs-5 fw-light pt-5 py-2">
          <Bs4CircleFill className="me-2 " /> Confirm your booking!
        </div>
        <Col xs={12} md={9} className="">
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
              <Button
                className="btn btn-danger btn-sm d-flex align-items-center"
                onClick={() => handleDeleteItemFromBooking(item.time_slot_id)}
              >
                <MdDeleteForever className="me-2" />
                DELETE
              </Button>
            </div>
          ))}
        </Col>
        <div className="d-flex flex-row">
          <div className="d-flex justify-content-start mt-3">
            <Button
              className="btn btn-dark d-flex align-items-center m-2"
              onClick={handleResetBooking}
            >
              <MdCancel className="me-2" />
              RESET
            </Button>
          </div>

          <div className="d-flex justify-content-start mt-3">
            <Button className="btn btn-success d-flex align-items-center m-2">
              <MdCancel className="me-2" />
              CONFIRM BOOKING
            </Button>
          </div>
        </div>{' '}
      </div>
    )
  );
}

CurrentBookingWindow.propTypes = {
  currentBookingItems: PropTypes.string.isRequired,
  handleDeleteItemFromBooking: PropTypes.func.isRequired,
  handleResetBooking: PropTypes.func.isRequired,
};

export default CurrentBookingWindow;
