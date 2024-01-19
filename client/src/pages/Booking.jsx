import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Bs1CircleFill, Bs2CircleFill } from 'react-icons/bs';
import BookingServiceSelector from '../components/BookingServiceSelector';
import BookingWeeklyView from '../components/BookingWeeklyView';

function Booking() {
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  return (
    <Container className="d-flex flex-column py-5">
      <div className="fs-1 header-underline yeseva-font mt-5 fw-bold border-bottom border-warning border-3">
        BOOKING
      </div>
      <div className="d-flex align-items-center d-flex fs-5 fw-light pt-5 py-2">
        <Bs1CircleFill className="me-2" /> Choose the type of service!
      </div>

      <div className="d-flex justify-content-center justify-content-md-start">
        <BookingServiceSelector setSelectedServiceId={setSelectedServiceId} />
      </div>

      <div className="d-flex align-items-center d-flex fs-5 fw-light pt-5 py-2">
        <Bs2CircleFill className="me-2" /> Choose the day of your arrival!
      </div>

      <div className="d-flex justify-content-center justify-content-md-start">
        <BookingWeeklyView selectedServiceId={selectedServiceId} />
      </div>
    </Container>
  );
}

export default Booking;
