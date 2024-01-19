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
        <h1 className="text-center yeseva-font mt-5 fw-bold">Wall of fame</h1>
        <p className="m-4 text-center fs-5 josefin-font w-75">
          We take pride in welcoming outstanding personalities for generations.
          <br />
          Join us and be part of a unique community that epitomizes the highest standards.
        </p>

        <Row>
          {famous.map((person) => (
            <Col className="d-flex justify-content-center" key={person.id}>
              <div className="flip-card bg-transparent m-4">
                <div className="flip-card-inner position-relative w-100 h-100 text-center">
                  <div className="flip-card-front w-100 h-100 position-absolute">
                    <img src={person.famousImg} alt="Avatar" />
                  </div>
                  <div className="flip-card-back position-relative w-100 h-100 pt-5 p-2 text-white">
                    <h1 className="yeseva-font">{person.name}</h1>
                    <h4 className="pt-1 fw-light">{person.profession}</h4>
                    <p className="pt-5">
                      Member of the club since: <br />
                      {person.year}
                    </p>
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
