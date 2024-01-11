import Container from 'react-bootstrap/Container';
import AboutUsTimeline from '../components/AboutUsTimeline';
import AboutUsWallOfFame from '../components/AboutUsWallOfFame';
import AboutUsCharity from '../components/AboutUsCharity';

 function AboutUs() {
 
  return (
    <div className="d-flex flex-column pt-5 w-100">
      <Container>
        <div>
          <AboutUsTimeline />
          <AboutUsWallOfFame  />
        </div>
      </Container>
          <AboutUsCharity  />
    </div>
  );
}
export default AboutUs;