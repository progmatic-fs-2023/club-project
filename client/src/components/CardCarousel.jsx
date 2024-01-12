import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const cards = [
  {
    id: 1,
    image: './src/assets/newyear.jpg',
    title: 'Doors New Years Party',
    description: 'Description 1',
    buttonText: 'Learn more',
  },
  {
    id: 2,
    image: './src/assets/masquerade.jpg',
    title: 'Masquerade',
    description: 'Description 2',
    buttonText: 'Learn more',
  },
  {
    id: 3,
    image: './src/assets/violin.jpg',
    title: 'Violin Concert',
    description: 'Description 3',
    buttonText: 'Learn more',
  },
  {
    id: 4,
    image: './src/assets/wine.jpg',
    title: 'Wine-tasting',
    description: 'Description 4',
    buttonText: 'Learn more',
  },
  {
    id: 5,
    image: './src/assets/reading.jpg',
    title: 'Reading Club',
    description: 'Description 5',
    buttonText: 'Learn more',
  },
];

function CardCarousel() {
  return (
    <section className="wrapper" style={{ backgroundColor: '#212529' }}>
      <Container fluid className="container-fostrap">
        <div className="text-center text-light mb-4">
          <h2>Upcoming Events</h2>
        </div>
        <Row className="justify-content-md-center">
          {cards.map((card) => (
            <Col md={2} key={card.id} className="mb-4">
              <EventCard card={card} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function EventCard({ card }) {
  return (
    <Card className="mx-auto mb-3" style={{ maxWidth: '100%' }}>
      <Card.Img
        variant="top"
        src={card.image}
        alt={card.title}
        className="img-fluid card-image mb-3"
      />

      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Button variant="primary">{card.buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

EventCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardCarousel;
