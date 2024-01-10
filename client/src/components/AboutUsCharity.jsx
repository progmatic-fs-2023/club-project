import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function AboutUsCharity(props) {
  const { charity } = props;

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="m-4 text-center">Charity</h2>
      <p className="m-4 mb-5 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum, facere error
        iste non harum rerum aut accusantium ratione expedita recusandae, perferendis illo unde
        iusto, voluptas odit soluta dolores similique. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Hic rem quam voluptatum totam praesentium, non quidem officia quis ea,
        nostrum ipsum nobis perspiciatis id repellendus quos inventore harum cumque architecto.
      </p>

      <Row className="d-flex justify-contet-center">
        {charity.map((org) => (
          <Col className="d-flex justify-content-center" key={org.id}>
            <div className="d-flex flex-column align-items-center" style={{ height: '500px' }}>
              <div className="about-us-fame-card shadow rounded d-flex flex-column align-items-center bg-light pt-3">
                <div className="about-us-card-image">
                  <img src="https://picsum.photos/300" alt="anything" />
                </div>
                <div>
                  <h3 className="pt-5 text-center">{org.organization}</h3>
                </div>
                <div className="about-us-card-content position-relative px-1 text-center">
                  <h6>Amount of donated money so far: {org.money}</h6>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

AboutUsCharity.propTypes = {
  charity: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      money: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
