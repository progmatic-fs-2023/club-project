import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const cardStyle = {
  margin: '20px auto',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  overflow: 'hidden',
  border: '2px solid black',
  borderRadius: '8px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const contentStyle = {
  padding: '20px',
  background: '#f2f2f2',
};

const sliderStyle = {
  background: '#091d29',
  direction: 'rtr',
};

const buttonContainerStyle = {
  textAlign: 'center',
  background: sliderStyle.background,
};

function generateCardId(title, index) {
  return `${title}-${index}`;
}

function LowerCardCarousel() {
  const sliderRef = useRef(null);

  const handleCardEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleCardLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const cards = [
    {
      image: './src/assets/tennis.jpg',
      title: 'Tennis Courses',
      description: 'Description',
      buttonText: 'Booking',
    },
    {
      image: './src/assets/sauna.jpg',
      title: 'Sauna',
      description: 'Description',
      buttonText: 'Booking',
    },
    {
      image: './src/assets/manicure.jpg',
      title: 'Manicure-Pedicure',
      description: 'Description',
      buttonText: 'Booking',
    },
    {
      image: './src/assets/gym.jpg',
      title: 'Gym',
      description: 'Description',
      buttonText: 'Booking',
    },
    {
      image: './src/assets/horse.jpg',
      title: 'Horse Riding',
      description: 'Description',
      buttonText: 'Booking',
    },
    {
      image: './src/assets/archery.jpg',
      title: 'Archery',
      description: 'Description',
      buttonText: 'Booking',
    },
  ];

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          backgroundColor: '#091d29',
          color: 'white',
        }}
      >
        SERVICES
      </div>

      <Slider
        dots={false}
        infinite
        speed={8000}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={0}
        cssEase="linear"
        pauseOnHover={false}
        centerMode
        centerPadding="0"
        ref={sliderRef}
        onMouseEnter={handleCardEnter}
        onMouseLeave={handleCardLeave}
        style={sliderStyle}
      >
        {cards.map((card, index) => (
          <div key={generateCardId(card.title, index)}>
            <Card
              style={{
                ...cardStyle,
                width: 'auto',
                backgroundImage: `url(${card.image})`,
              }}
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
            >
              <img src={card.image} alt="Event" style={imageStyle} />
              <div style={contentStyle}>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary">{card.buttonText}</Button>
              </div>
            </Card>
          </div>
        ))}
      </Slider>

      <div style={buttonContainerStyle}>
        <Button variant="primary" size="lg">
          All Services
          <span style={{ marginLeft: '5px' }}>&rarr;</span>
        </Button>
      </div>
    </div>
  );
}

export default LowerCardCarousel;
