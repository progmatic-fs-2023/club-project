import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { API_URL } from '../constants';

function AboutUsWallOfFame() {
  const [famous, setFamous] = useState([]);

  useEffect(() => {
    const fetchFamous = async () => {
      try {
        const response = await fetch(`${API_URL}/api/aboutus`);
        const result = await response.json();

        const famousData = result.famous;

        setFamous(famousData);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchFamous();
  }, []);

  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center">Wall of fame</h2>
        <p className="m-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum, facere error
          iste non harum rerum aut accusantium ratione expedita recusandae, perferendis illo unde
          iusto, voluptas odit soluta dolores similique. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Hic rem quam voluptatum totam praesentium, non quidem officia quis ea,
          nostrum ipsum nobis perspiciatis id repellendus quos inventore harum cumque architecto.
        </p>

        <Row>
          {famous.map((person) => (
            <Col className="d-flex justify-content-center" key={person.id}>
              <div className="flip-card bg-transparent m-4">
                <div className="flip-card-inner position-relative w-100 h-100 text-center">
                  <div className="flip-card-front w-100 h-100 position-absolute">
                    <img src="https://picsum.photos/300" alt="Avatar" />
                  </div>
                  <div className="flip-card-back position-relative w-100 h-100 pt-5 text-white">
                    <h1 className="pt-3">{person.name}</h1>
                    <h4 className="pt-3">{person.profession}</h4>
                    <p className="pt-4">Member of the club since: {person.year}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default AboutUsWallOfFame;
