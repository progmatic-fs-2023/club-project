import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function MainCarousel() {
  return (
    <Carousel data-bs-theme="light" interval="7000" wrap="true" pause="false">
      <Carousel.Item>
        <img
          className="w-100 object-fit-cover vh-100"
          src=".\src\assets\main_carousel_1.webp"
          alt="country club"
        />
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5 style={{ fontFamily: "'Yeseva One', cursive" }} className="text-uppercase fs-1">
            Play on a championship course
          </h5>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="fw-normal fs-4">
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
        <img
          className="w-100 object-fit-cover vh-100"
          src=".\src\assets\main_carousel_2.jpg"
          alt="nordic spa"
        />
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5 style={{ fontFamily: "'Yeseva One', cursive" }} className="text-uppercase fs-1">
            spend time with us in Eden
          </h5>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="fw-normal fs-4">
            Our comprehensive services are at your disposal so that you can find any relaxation you
            desire at the DOOR Club.
          </p>
          <div>
            <Button className="navyblue-btn" size="lg">
              Explore our services
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 object-fit-cover vh-100"
          src=".\src\assets\main_carousel_3.webp"
          alt="golf court"
        />
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5 style={{ fontFamily: "'Yeseva One', cursive" }} className="text-uppercase fs-1">
            Third slide label
          </h5>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="fw-normal fs-4">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <div>
            <Button className="navyblue-btn text-uppercase" size="lg">
              ONLINE BOOKING
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 object-fit-cover vh-100"
          src=".\src\assets\main_carousel_4.webp"
          alt="golf court"
        />
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5 style={{ fontFamily: "'Yeseva One', cursive" }} className="text-uppercase fs-1">
            Taste the world&apos;s finest wines
          </h5>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="fw-normal fs-4">
            Among our events, wine tastings often feature where you can sample excellent beverages
            from various renowned wine regions worldwide, guided by sommeliers.
          </p>
          <div>
            <Button className="navyblue-btn text-uppercase" size="lg">
              Explore our events
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
