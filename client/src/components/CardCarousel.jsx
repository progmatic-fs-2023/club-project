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
  border: '2px solid #fff',
  borderRadius: '8px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'fill',
};

const contentStyle = {
  padding: '20px',
  background: '#f2f2f2',
};

const sliderStyle = {
  background: '#EFE1CE',
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
      image: './src/assets/image1.jpg',
      title: 'Doors New Years Party',
      description: '2023.12.31',
      buttonText: 'Időpontfoglalás',
    },
    {
      image: './src/assets/image2.jpg',
      title: 'Álarcosbál',
      description: 'Rövid leírás az eseményről.',
      buttonText: 'Időpontfoglalás',
    },
    {
      image: './src/assets/image3.jpg',
      title: 'Vonósnégyes koncert',
      description: 'Rövid leírás az eseményről.',
      buttonText: 'Időpontfoglalás',
    },
    {
      image: './src/assets/image4.jpg',
      title: 'Borkóstolás',
      description: 'Rövid leírás az eseményről.',
      buttonText: 'Időpontfoglalás',
    },
    {
      image: './src/assets/image5.jpg',
      title: 'Olvasóklub',
      description: 'Rövid leírás az eseményről.',
      buttonText: 'Időpontfoglalás',
    },
    {
      image: './src/assets/image6.jpg',
      title: 'Golf bajnokság',
      description: 'Rövid leírás az eseményről.',
      buttonText: 'Időpontfoglalás',
    },
  ];

  return (
    <Slider
      dots={false}
      infinite
      speed={4000}
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
              width: '300px',
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
  );
}

export default CardCarousel;
