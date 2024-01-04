import { Row, Col } from 'react-bootstrap';
import AboutUsCharityCard from './AboutUsCharityCard';

export default function AboutUsCharityCards() {
  return (
    <div className="d-flex align-items-center">
      <Row>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsCharityCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsCharityCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsCharityCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsCharityCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsCharityCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsCharityCard />
        </Col>
      </Row>
    </div>
  );
}
