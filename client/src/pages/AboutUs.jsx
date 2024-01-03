import Container from 'react-bootstrap/Container';
import AboutUsCharityCards from '../components/AboutUsCharityCards';
import AboutUsFameCards from '../components/AboutUsFameCards';

export default function AboutUs() {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        padding: '110px 110px',
        backgroundImage: 'linear-gradient(45deg, lightsteelblue, whitesmoke)',
      }}
    >
      <Container
        fluid
        className="d-flex flex-column align-items-center text-center "
        style={{
          margin: '50px 50px',
          backgroundColor: 'linen',
        }}
      >
        <div style={{ width: '80%' }}>
          <p className="m-4" style={{ fontSize: '40px' }}>
            The story of the club
          </p>
          <AboutUsCharityCards />
        </div>
      </Container>
      <Container className="d-flex flex-column text-center align-items-center">
        <p className="m-4" style={{ fontSize: '40px' }}>
          Wall of fame
        </p>
        <p className="m-4" style={{ fontSize: '20px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum, facere error
          iste non harum rerum aut accusantium ratione expedita recusandae, perferendis illo unde
          iusto, voluptas odit soluta dolores similique. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Hic rem quam voluptatum totam praesentium, non quidem officia quis ea,
          nostrum ipsum nobis perspiciatis id repellendus quos inventore harum cumque architecto.
        </p>
        <AboutUsFameCards />
      </Container>
      <Container className="d-flex flex-column text-center align-items-center">
        <p className="m-4" style={{ fontSize: '40px' }}>
          Charity
        </p>
        <p className="m-4 mb-5" style={{ fontSize: '20px' }}>
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
