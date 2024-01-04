import { Row, Col } from 'react-bootstrap';
import AboutUsFameCard from './AboutUsFameCard';

export default function AboutUsFameCards() {
  return (
    <div className="d-flex align-items-center">
      <Row>
        <Col className="m-4">
          <AboutUsFameCard />
        </Col>
        <Col className="m-4">
          <AboutUsFameCard />
        </Col>
        <Col className="m-4">
          <AboutUsFameCard />
        </Col>
        <Col className="m-4">
          <AboutUsFameCard />
        </Col>
      </Row>
    </div>
  );
}
