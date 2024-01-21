import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Bs3CircleFill } from 'react-icons/bs';
import { GrNext, GrPrevious } from 'react-icons/gr';
import PropTypes from 'prop-types';
import { API_URL } from '../constants';
import CurrentBookingWindow from './CurrentBookingWindow';

function BookingWeeklyView({ selectedServiceId, selectedServiceName }) {
  const [selectedDayData, setSelectedDayData] = useState(null);
  const [selectedTimeSlotIds, setSelectedTimeSlotIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weekData, setWeekData] = useState([]);
  const [currentWeekStartDate, setCurrentWeekStartDate] = useState(new Date());
  const [currentBookingItems, setCurrentBookingItems] = useState([]);
  const { serviceIdFromParams } = useParams();
  const serviceIdFromState = selectedServiceId;

  const serviceId = serviceIdFromState || serviceIdFromParams || null;

  useEffect(() => {
    const fetchWeekData = async () => {
      try {
        if (serviceId !== null) {
          const response = await fetch(
            `${API_URL}/api/booking/${serviceId}?start_date=${
              currentWeekStartDate.toISOString().split('T')[0]
            }`,
          );
          const result = await response.json();

          setWeekData(result);
          setLoading(false);
        }
      } catch (error) {
        // console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchWeekData();
  }, [serviceIdFromParams, serviceIdFromState, currentWeekStartDate]);

  if (loading && serviceId != null) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const currentDate = new Date();
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const groupedByDay = weekData.reduce((acc, item) => {
    const date = new Date(item.start_time).toLocaleDateString('en-US');
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  const groupedArray = Object.values(groupedByDay).sort(
    (a, b) => new Date(a.start_time) - new Date(b.start_time),
  );

  const handleDayClick = (dayData) => {
    setSelectedDayData(dayData);
  };

  const handlePrevWeek = () => {
    const newStartDate = new Date(currentWeekStartDate);
    newStartDate.setDate(newStartDate.getDate() - 7);
    setCurrentWeekStartDate(newStartDate);
  };

  const handleNextWeek = () => {
    const newStartDate = new Date(currentWeekStartDate);
    newStartDate.setDate(newStartDate.getDate() + 7);
    setCurrentWeekStartDate(newStartDate);
  };

  const handleTimeSlotClick = (slotId) => {
    const selectedSlot = weekData.find((slot) => slot.id === slotId && !slot.is_reserved);

    if (selectedSlot) {
      const isSelected = selectedTimeSlotIds.includes(slotId);
      const isSelectedBooking = currentBookingItems.some((item) => item.time_slot_id === slotId);

      if (!isSelected && !isSelectedBooking) {
        const newBookingItem = {
          serviceName: selectedServiceName,
          time_slot_id: slotId,
          start_time: selectedSlot.start_time,
          end_time: selectedSlot.end_time,
        };

        setCurrentBookingItems((prevItems) => [...prevItems, newBookingItem]);
        setSelectedTimeSlotIds((prevIds) => [...prevIds, slotId]);
      }
    }
  };

  const handleDeleteItemFromBooking = (timeSlotId) => {
    setCurrentBookingItems((prevItems) =>
      prevItems.filter((item) => item.time_slot_id !== timeSlotId),
    );

    setSelectedTimeSlotIds((prevItems) => prevItems.filter((item) => item !== timeSlotId));
  };

  const handleResetBooking = () => {
    setCurrentBookingItems([]);
    setSelectedTimeSlotIds([]);
  };

  return (
    <Col>
      <div className="d-flex flex-column flex-lg-row justify-content-between">
        <Col
          xs={12}
          md={11}
          lg={9}
          xl={8}
          className="cards-container d-flex flex-column flex-md-row justify-content-center align-items-start justify-content-md-start order-2 order-lg-1"
        >
          {groupedArray.map((data) => {
            const dayOfWeek = new Date(data.start_time).getDay();
            const isCurrentDate =
              new Date(data.start_time).toLocaleDateString('en-US') ===
              currentDate.toLocaleDateString('en-US');

            const cardClassName = isCurrentDate
              ? 'bg-primary text-white border border-info'
              : (new Date(data.start_time).setHours(0, 0, 0, 0) >
                  currentDate.setHours(0, 0, 0, 0) &&
                  'bg-primary') ||
                'bg-light-gray inactive';

            return (
              <div
                role="button"
                tabIndex={0}
                key={data.start_time}
                className={`day-card w-100 text-white text-center border border-transparent p-2 p-md-4 d-flex justify-content-evenly align-items-center flex-row flex-md-column ${cardClassName} ${
                  selectedDayData === data.start_time ? 'selected-day' : ''
                }`}
                onClick={() => {
                  if (new Date(data.start_time) >= currentDate) {
                    handleDayClick(data.start_time);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && new Date(data.start_time) >= currentDate) {
                    handleDayClick(data.start_time);
                  }
                }}
              >
                <div className="card-text fs-6 fw-bold">{daysOfWeek[dayOfWeek]}</div>
                <div className="card-title fw-light fs-5 text-nowrap">
                  {new Date(data.start_time).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>
            );
          })}
        </Col>
        {serviceId && (
          <div className="col-xs-3 text-light-dark text-center m-1 d-flex justify-content-center align-items-center flex-row order-1 order-lg-2 m-3">
            <div
              className="week-button d-flex justify-content-center align-items-center px-3 py-1 m-1 border border-dark"
              onClick={handlePrevWeek}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handlePrevWeek();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <GrPrevious className="" />
              PREV WEEK
            </div>
            <div
              className="week-button d-flex justify-content-center align-items-center px-3 py-1 m-1 border border-dark"
              onClick={handleNextWeek}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleNextWeek();
                }
              }}
              role="button"
              tabIndex={0}
            >
              NEXT WEEK
              <GrNext />
            </div>
          </div>
        )}
      </div>
      <Col
        xs={11}
        md={10}
        lg={8}
        xl={8}
        className="d-flex flex-column justify-content-center align-items-start"
      >
        {selectedDayData && (
          <>
            <div className="d-flex align-items-center d-flex fs-5 fw-light pt-5 py-2">
              <Bs3CircleFill className="me-2" /> Choose available time slots!
            </div>
            <div className="time-slot-container text-white text-center d-flex justify-content-start align-items-center flex-wrap">
              {weekData
                .filter((timeSlot) => {
                  const timeSlotDate = new Date(timeSlot.start_time);
                  const todayDate = new Date(selectedDayData);
                  const currentTime = new Date();
                  const isSameDay = timeSlotDate.getDate() === todayDate.getDate();
                  const isFutureSlot = timeSlotDate > currentTime;
                  return isSameDay && isFutureSlot;
                })
                .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
                .map((timeSlot) => (
                  <Col
                    xs={3}
                    md={2}
                    lg={2}
                    xl={3}
                    key={timeSlot.id}
                    onClick={() => handleTimeSlotClick(timeSlot.id)}
                    className={`${timeSlot.is_reserved ? 'bg-danger reserved' : 'bg-dark'} ${
                      selectedTimeSlotIds.includes(timeSlot.id)
                        ? 'time-slot-card d-flex justify-content-center align-items-center selected text-white p-3 m-1'
                        : 'time-slot-card d-flex justify-content-center align-items-center text-white p-3 m-1'
                    }`}
                  >
                    <div>
                      {new Date(timeSlot.start_time).toLocaleTimeString('en-US', {
                        hour12: false,
                        hour: 'numeric',
                        minute: 'numeric',
                      })}
                    </div>
                    <div>-</div>
                    <div>
                      {new Date(timeSlot.end_time).toLocaleTimeString('en-US', {
                        hour12: false,
                        hour: 'numeric',
                        minute: 'numeric',
                      })}
                    </div>
                  </Col>
                ))}
            </div>
          </>
        )}
      </Col>
      <Col
        xs={12}
        md={11}
        lg={9}
        xl={8}
        className="cards-container d-flex flex-column flex-md-row justify-content-center align-items-start justify-content-md-start order-2 order-lg-1"
      />
      <Col>
        <CurrentBookingWindow
          handleResetBooking={handleResetBooking}
          handleDeleteItemFromBooking={handleDeleteItemFromBooking}
          currentBookingItems={currentBookingItems}
        />
      </Col>
    </Col>
  );
}

BookingWeeklyView.propTypes = {
  selectedServiceId: PropTypes.string.isRequired,
  selectedServiceName: PropTypes.string.isRequired,
};

export default BookingWeeklyView;
