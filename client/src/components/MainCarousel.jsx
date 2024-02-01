import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MainCarousel() {
  return (
    <Carousel data-bs-theme="light" interval="7000" wrap="true" pause="false">
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
        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center vh-100 top-0">
          <h5 className="yeseva-font text-uppercase fs-1">Play on a championship course</h5>
          <p className="josefin-font fw-normal fs-4 p-1 w-75">
            Tiger Woods and Door Club welcomes players of all skill levels to join a course set
            against the stunning backdrop of Black Mountain.
          </p>
          <div>
            <Link to="/services/golf">
              <Button className="btn" size="lg">
                BOOK TEE TIME
              </Button>
            </Link>
          </div>
        </div>
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
        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center vh-100 top-0">
          <h5 className="yeseva-font text-uppercase fs-1">spend time with us in Eden</h5>
          <p className="josefin-font fw-normal fs-4 p-1 w-75">
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
        </div>
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
        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center vh-100 top-0">
          <h5 className="yeseva-font text-uppercase fs-1">We have 4 professional courses</h5>
          <p className="josefin-font fw-normal fs-4 p-1 w-75">
            Discover the beauty of the Black Hill at some of NATURE&apos;S FINEST™ courses that Door
            Club has to offer
          </p>
          <div>
            <Link to="/services/golf">
              <Button className="btn" size="lg">
                BOOK TEE TIME
              </Button>
            </Link>
          </div>
        </div>
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
        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center vh-100 top-0">
          <h5 className="yeseva-font text-uppercase fs-1">Taste the world&apos;s finest wines</h5>
          <p className="josefin-font fw-normal fs-4 p-1 w-75">
            Among our events, wine tastings often feature where you can sample excellent beverages
            from various renowned wine regions worldwide, guided by sommeliers.
          </p>
          <div>
            <Link to="/events">
              <Button className="btn-primary" size="lg">
                EXPLORE OUR EVENTS
              </Button>
            </Link>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
