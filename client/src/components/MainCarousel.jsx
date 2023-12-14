import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function MainCarousel() {
  return (
    <Carousel data-bs-theme="dark" interval="3000" wrap="true" pause="false">
      <Carousel.Item>
        <img className="d-flex w-100" src=".\src\assets\golf_1.jpg" alt="First slide" />
        <Carousel.Caption >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <div>
            <Button variant="secondary" size="lg">
              Secondary
            </Button>{' '}
            <div className="pt-2">
              <Button variant="outline-light">Light</Button>{' '}
              <Button variant="outline-light">Light</Button>{' '}
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-flex w-100" src=".\src\assets\golf_2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <Button variant="secondary" size="lg">
              Secondary
            </Button>{' '}
            <div className="pt-2">
              <Button variant="outline-light">Light</Button>{' '}
              <Button variant="outline-light">Light</Button>{' '}
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-flex w-100" src=".\src\assets\golf_3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <div>
            <Button variant="secondary" size="lg">
              Secondary
            </Button>{' '}
            <div className="pt-2">
              <Button variant="outline-light">Light</Button>{' '}
              <Button variant="outline-light">Light</Button>{' '}
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
