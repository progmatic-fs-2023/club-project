import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const cardStyle = {
  margin: '20px auto',
  height: '350px',
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
  background: '#212529',
};

const buttonContainerStyle = {
  textAlign: 'center',
  background: sliderStyle.background,
};

function generateCardId(title, index) {
  return `${title}-${index}`;
}

function CardCarousel() {
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
      image: './src/assets/newyear.jpg',
      title: 'Doors New Years Party',
      description: 'Description',
      buttonText: 'Learn more',
    },
    {
      image: './src/assets/masquerade.jpg',
      title: 'Masquerade',
      description: 'Description',
      buttonText: 'Learn more',
    },
    {
      image: './src/assets/violin.jpg',
      title: 'Violin Concert',
      description: 'Description',
      buttonText: 'Learn more',
    },
    {
      image: './src/assets/wine.jpg',
      title: 'Wine-tasting',
      description: 'Description',
      buttonText: 'Learn more',
    },
    {
      image: './src/assets/reading.jpg',
      title: 'Reading Club',
      description: 'Description',
      buttonText: 'Learn more',
    },
    {
      image: './src/assets/golfchamp.jpg',
      title: 'Golf Championship',
      description: 'Description',
      buttonText: 'Learn more',
    },
  ];

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          backgroundColor: '#212529',
          color: 'white',
        }}
      >
        EVENTS
      </div>

      <Slider
        dots={false}
        infinite
        speed={5000}
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
          All Events
          <span style={{ marginLeft: '5px' }}>&rarr;</span>
        </Button>
      </div>
    </div>
  );
}

export default CardCarousel;
