import { Container } from 'react-bootstrap';
import './AboutUsCard.css';

export default function AboutUsFameCard() {
  return (
    <Container className="d-flex flex-column align-items-center" style={{ height: '500px' }}>
      <div
        className="AboutUsCard d-flex flex-column align-items-center bg-light pt-3"
        style={{
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
          transition: '0.2s ease-in-out',
          borderRadius: '15px',
          width: '360px',
        }}
      >
        <div className="AboutUsCardImage">
          <img src="https://picsum.photos/300" alt="anything" />
        </div>
        <div>
          <h3 className="pt-5">Name</h3>
        </div>
        <div
          className="AboutUsCardContent text-center"
          style={{
            position: 'relative',
            top: '-20px',
            padding: '0 10px',
          }}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </Container>
  );
}
