import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
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
  const currentDateFormatted = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  const groupedByDay = weekData.reduce((acc, item) => {
    const date = new Date(item.start_time).toLocaleDateString('en-US');
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  const datesArray = Object.keys(groupedByDay).map((date) =>
    new Date(groupedByDay[date].start_time).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }),
  );

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
    setSelectedDayData(null);
  };

  const handleNextWeek = () => {
    const newStartDate = new Date(currentWeekStartDate);
    newStartDate.setDate(newStartDate.getDate() + 7);
    setCurrentWeekStartDate(newStartDate);
    setSelectedDayData(null);
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

  const filteredTimeSlots = weekData.filter((timeSlot) => {
    const timeSlotDate = new Date(timeSlot.start_time);
    const todayDate = new Date(selectedDayData);
    const currentTime = new Date();
    const isSameDay = timeSlotDate.getDate() === todayDate.getDate();
    const isFutureSlot = timeSlotDate > currentTime;
    return isSameDay && isFutureSlot;
  });

  return (
    <Col>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <Col
          xs={12}
          md={11}
          lg={9}
          xl={9}
          className="cards-container d-flex flex-column flex-md-row justify-content-center align-items-start justify-content-md-center order-2 order-lg-1"
        >
          {groupedArray.map((data) => {
            const dayOfWeek = new Date(data.start_time).getDay();
            const isCurrentDate =
              new Date(data.start_time).toLocaleDateString('en-US') ===
              currentDate.toLocaleDateString('en-US');

            const cardClassName = isCurrentDate
              ? 'bg-primary text-white border border-warning border-1'
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
          <Col
            xs={10}
            sm={8}
            md={5}
            lg={3}
            className="text-light-dark text-center m-1 d-flex justify-content-center align-items-center flex-row order-1 order-lg-2 m-3"
          >
            <div
              className={`week-button d-flex justify-content-center align-items-center px-3 py-1 m-1 border border-dark ${
                !datesArray.includes(currentDateFormatted) ||
                currentWeekStartDate >= currentDateFormatted
                  ? ''
                  : 'd-none'
              }`}
              onClick={handlePrevWeek}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && currentWeekStartDate > currentDateFormatted) {
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
              className={`week-button d-flex justify-content-center align-items-center px-3 py-1 m-1 border border-dark ${
                weekData.length === 0 ? 'd-none' : ''
              }`}
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
          </Col>
        )}
      </div>

      {selectedDayData && (
        <div>
          {filteredTimeSlots.length > 0 ? (
            <Row
              xs={10}
              className="time-slot-main-container d-flex flex-column justify-content-center align-items-start w-100"
            >
              <div className="d-flex flex-row align-items-center fs-5 fw-light pt-5 py-2">
                <Bs3CircleFill className="me-2" /> Choose available time slots!
              </div>
              <Col
                xs={12}
                md={12}
                lg={10}
                xl={10}
                className="time-slot-container d-flex justify-content-start align-items-center flex-wrap text-white text-center"
              >
                {filteredTimeSlots
                  .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))
                  .map((timeSlot) => (
                    <Col
                      xs={5}
                      md={3}
                      lg={2}
                      xl={2}
                      key={timeSlot.id}
                      onClick={() => {
                        if (!selectedTimeSlotIds.includes(timeSlot.id))
                          handleTimeSlotClick(timeSlot.id);
                        else handleDeleteItemFromBooking(timeSlot.id);
                      }}
                      className={`time-slot-card d-flex justify-content-center align-items-center text-white p-3 m-1 ${
                        timeSlot.is_reserved ? 'bg-danger reserved' : 'bg-dark'
                      } ${selectedTimeSlotIds.includes(timeSlot.id) ? 'selected' : ''}`}
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
              </Col>
            </Row>
          ) : (
            <div className="fs-5 mt-3">No available time slots for today.</div>
          )}
        </div>
      )}
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
