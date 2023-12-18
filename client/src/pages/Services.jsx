
import Container from 'react-bootstrap/Container';
import AllServices from '../components/AllServices';
import ServiceSearchBar from '../components/ServiceSearchBar';

function Services() {
  return (
    <Container>
      <div className="mt-5">
        <ServiceSearchBar />
        <AllServices />
      </div>
    </Container>
  );
}

export default Services;
