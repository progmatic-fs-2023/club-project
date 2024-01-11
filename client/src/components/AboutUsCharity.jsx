import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { API_URL } from '../constants';

function AboutUsCharity() {
  const [charity, setCharity] = useState([]);

  useEffect(() => {
    const fetchCharity = async () => {
      try {
        const response = await fetch(`${API_URL}/api/aboutus`);
        const result = await response.json();

        const charityData = result.charity;

        setCharity(charityData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharity();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center mt-5 bg-light">
      <div className="d-flex flex-column align-items-center">
        <div className="m-3 mt-5 fs-1 text-center yeseva-font fw-bold">CHARITY</div>
        <div className="fs-5 josefin-font w-50 text-center">
          <p>Supporting others is of utmost importance to us.</p>
          <p>
            We believe that even a small gesture can bring about significant changes in the lives of
            those in need. The foundations we share here represent noble causes that we are deeply
            committed to.
          </p>
        </div>
      </div>

      <Row xs={1} md={3} lg={3} xl={5} className="m-5 d-flex mb-5 justify-content-center">
        {charity.map((org) => (
          <Col
            xs={8}
            md={5}
            lg={4}
            className="px-4 m-2 about-us-fame-card shadow d-flex flex-column align-items-center bg-white"
            key={org.id}
          >
            <div>
              <img src={org.charityImg} alt="charity org logo" />
            </div>
            <div>
              <div className="josefin-font fs-5 pt-2 text-center text-uppercase">
                {org.organization}
              </div>
            </div>
            <div className="d-flex flex-column about-us-card-content position-relative px-1 text-center">
              <div className="text-info fs-6">DONATED AMOUNT</div>
              <span className="fw-bold text-info">{org.money}$</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AboutUsCharity;
