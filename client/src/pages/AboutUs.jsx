import Container from 'react-bootstrap/Container';
import AboutUsTimeline from '../components/AboutUsTimeline';
import AboutUsWallOfFame from '../components/AboutUsWallOfFame';
import AboutUsCharity from '../components/AboutUsCharity';
import { useAppContext } from '../contexts/AppContext';

export default function AboutUs() {
  const { famous } = useAppContext();
  const { charity } = useAppContext();

  return (
    <div className="d-flex flex-grow-1 pt-5 w-100 bg-light">
      <Container>
        <div>
          <AboutUsTimeline />
          <AboutUsWallOfFame famous={famous} />
          <AboutUsCharity charity={charity} />
        </div>
      </Container>
    </div>
  );
}
