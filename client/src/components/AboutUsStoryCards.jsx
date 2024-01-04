import { Row, Col } from 'react-bootstrap';
import AboutUsStoryCard from './AboutUsStoryCard';

export default function AboutUsCharityCards() {
  return (
    <div className="d-flex align-items-center">
      <Row>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsStoryCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsStoryCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsStoryCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsStoryCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsStoryCard />
        </Col>
        <Col className="m-4 d-flex justify-content-center">
          <AboutUsStoryCard />
        </Col>
      </Row>
    </div>
  );
}
