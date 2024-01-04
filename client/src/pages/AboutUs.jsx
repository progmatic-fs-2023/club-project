import Container from 'react-bootstrap/Container';
import AboutUsStoryCards from '../components/AboutUsStoryCards';
import AboutUsFameCards from '../components/AboutUsFameCards';

export default function AboutUs() {
  return (
    <div className="d-flex flex-column align-items-center h-100">
      <Container fluid className="about-us-story d-flex flex-column align-items-center text-center">
        <div>
          <h2 className="mt-5">The story of the club</h2>
          <AboutUsStoryCards />
        </div>
      </Container>
      <Container className="d-flex flex-column text-center align-items-center">
        <h2 className="m-4">Wall of fame</h2>
        <p className="m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum, facere error
          iste non harum rerum aut accusantium ratione expedita recusandae, perferendis illo unde
          iusto, voluptas odit soluta dolores similique. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Hic rem quam voluptatum totam praesentium, non quidem officia quis ea,
          nostrum ipsum nobis perspiciatis id repellendus quos inventore harum cumque architecto.
        </p>
        <AboutUsFameCards />
      </Container>
      <Container className="d-flex flex-column text-center align-items-center">
        <h2 className="m-4">Charity</h2>
        <p className="m-4 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum, facere error
          iste non harum rerum aut accusantium ratione expedita recusandae, perferendis illo unde
          iusto, voluptas odit soluta dolores similique. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Hic rem quam voluptatum totam praesentium, non quidem officia quis ea,
          nostrum ipsum nobis perspiciatis id repellendus quos inventore harum cumque architecto.
        </p>
      </Container>
    </div>
  );
}
