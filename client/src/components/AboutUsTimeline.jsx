import { Container } from 'react-bootstrap';
import {
  AboutUsTimelineCardLeft1,
  AboutUsTimelineCardRight1,
  AboutUsTimelineCardLeft2,
  AboutUsTimelineCardRight2,
} from './AboutUsTimelineCard';

export default function AboutUsTimeline() {
  return (
    <Container className="py-5">
      <h1 className="m-5 text-center">The story of the club</h1>
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <AboutUsTimelineCardLeft1 />
        </div>
        <div className="timeline-2 right-2">
          <AboutUsTimelineCardRight1 />
        </div>
        <div className="timeline-2 left-2">
          <AboutUsTimelineCardLeft2 />
        </div>
        <div className="timeline-2 right-2">
          <AboutUsTimelineCardRight2 />
        </div>
      </div>
    </Container>
  );
}
