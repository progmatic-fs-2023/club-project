import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MainCarousel() {
  return (
    <Carousel data-bs-theme="light" interval="10000" wrap="true" pause="false">
      <Carousel.Item>
        <img
          className="position-relative w-100 object-fit-cover vh-100"
          src=".\src\assets\main_carousel_1.webp"
          alt="country club"
        />
        <div className="award-labels position-absolute flex-row m-5 d-none d-lg-flex">
          <img src=".\src\assets\qa_label_1.png" alt="award label" />
          <img className="mx-2" src=".\src\assets\qa_label_2.png" alt="award label" />
          <img src=".\src\assets\qa_label_3.png" alt="award label" />
        </div>
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5 style={{ fontFamily: "'Yeseva One', cursive" }} className="text-uppercase fs-1">
            Play on a championship course
          </h5>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="fw-normal fs-4 p-1">
            Tiger Woods and Door Club offers a course where players of all skill levels are invited
            to come together to experience the breathtaking Black Mountain landscape.
          </p>
          <div>
            <Link to="/services/GOLF">
              <Button className="btn" size="lg">
                BOOK TEE TIME
              </Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 object-fit-cover vh-100"
          src=".\src\assets\main_carousel_2.jpg"
          alt="nordic spa"
        />
        <div className="award-labels position-absolute flex-row m-5 d-none d-lg-flex">
          <img src=".\src\assets\qa_label_1.png" alt="award label" />
          <img className="mx-2" src=".\src\assets\qa_label_2.png" alt="award label" />
          <img src=".\src\assets\qa_label_3.png" alt="award label" />
        </div>
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5 style={{ fontFamily: "'Yeseva One', cursive" }} className="text-uppercase fs-1">
            spend time with us in Eden
          </h5>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="fw-normal fs-4 p-1">
            Our comprehensive services are at your disposal so that you can find any relaxation you
            desire at the DOOR Club.
          </p>
          <div>
            <Link to="/services">
              <Button className="btn" size="lg">
                EXPLORE OUR SERVICES
              </Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 object-fit-cover vh-100"
          src=".\src\assets\main_carousel_3.webp"
          alt="golf court"
        />
        <div className="award-labels position-absolute flex-row m-5 d-none d-lg-flex">
          <img src=".\src\assets\qa_label_1.png" alt="award label" />
          <img className="mx-2" src=".\src\assets\qa_label_2.png" alt="award label" />
          <img src=".\src\assets\qa_label_3.png" alt="award label" />
        </div>
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5 style={{ fontFamily: "'Yeseva One', cursive" }} className="text-uppercase fs-1">
            We have 4 professional courses
          </h5>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="fw-normal fs-4 p-1">
            Discover the beauty of the Black Hill at some of NATURE&apos;S FINEST™ courses that Door
            Club has to offer
          </p>
          <div>
            <Link to="/services/GOLF">
              <Button className="btn" size="lg">
                BOOK TEE TIME
              </Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 object-fit-cover vh-100"
          src=".\src\assets\main_carousel_4.webp"
          alt="golf court"
        />
        <div className="award-labels position-absolute flex-row m-5 d-none d-lg-flex">
          <img src=".\src\assets\qa_label_1.png" alt="award label" />
          <img className="mx-2" src=".\src\assets\qa_label_2.png" alt="award label" />
          <img src=".\src\assets\qa_label_3.png" alt="award label" />
        </div>
        <Carousel.Caption style={{ top: '40vh' }}>
          <h5 style={{ fontFamily: "'Yeseva One', cursive" }} className="text-uppercase fs-1">
            Taste the world&apos;s finest wines
          </h5>
          <p style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="fw-normal fs-4 p-1">
            Among our nteevents, wine tastings often feature where you can sample excellent
            beverages from various renowned wine regions worldwide, guided by sommeliers.
          </p>
          <div>
            <Link to="/events">
              <Button className="btn-primary" size="lg">
                EXPLORE OUR EVENTS
              </Button>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
