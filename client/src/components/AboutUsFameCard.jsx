import { Container } from 'react-bootstrap';

export default function AboutUsFameCard() {
  return (
    <Container className="d-flex flex-column align-items-center" style={{ height: '500px' }}>
      <div className="about-us-fame-card shadow rounded d-flex flex-column align-items-center bg-light pt-3">
        <div className="about-us-card-image">
          <img src="https://picsum.photos/300" alt="anything" />
        </div>
        <div>
          <h3 className="pt-5">Name</h3>
        </div>
        <div className="about-us-card-content position-relative px-1 text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </Container>
  );
}
