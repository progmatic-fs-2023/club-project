import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function MainCarousel() {
  return (
    <Carousel data-bs-theme="light" interval="4000" wrap="true" pause="false">
      <Carousel.Item>
        <img className="d-flex w-100" src=".\src\assets\golf_5.webp" alt="door club" />
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5
            style={{ fontFamily: "'Yeseva One', cursive", fontSize: '2.5em' }}
            className="text-uppercase"
          >
            Play on a championship course
          </h5>
          <p
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '1.5em' }}
          >
            Tiger Woods and Door Club offers a course where players of all skill levels are invited
            to come together to experience the breathtaking Black Mountain landscape.
          </p>
          <div>
            <Button className="btn navyblue-btn" size="lg">
              BOOK TEE TIME
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-flex w-100" src=".\src\assets\golf_1.webp" alt="Second slide" />
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5
            style={{ fontFamily: "'Yeseva One', cursive", fontSize: '2.5em' }}
            className="text-uppercase"
          >
            Second slide label
          </h5>
          <p
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '1.5em' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div>
            <Button variant="secondary" size="lg">
              ONLINE BOOKING
            </Button>{' '}
            <div className="pt-2">
              <Button variant="outline-light">Light</Button>
              <Button variant="outline-light">Light</Button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-flex w-100" src=".\src\assets\golf_3.webp" alt="Third slide" />
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5
            style={{ fontFamily: "'Yeseva One', cursive", fontSize: '2.5em' }}
            className="text-uppercase"
          >
            Third slide label
          </h5>
          <p
            style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '1.5em' }}
          >
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <div>
            <Button variant="secondary" size="lg">
              ONLINE BOOKING
            </Button>
            <div className="pt-2">
              <Button variant="outline-light">Light</Button>
              <Button variant="outline-light">Light</Button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
