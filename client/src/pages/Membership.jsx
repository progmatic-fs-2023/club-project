import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Membership() {
  const [showModal, setShowModal] = useState(false);

  const membershipPlans = [
    {
      title: 'SILVER',
      price: '50.000 HUF',
      priceFrequency: '/month',
      description: 'To discover our events & exlusive services.',
      features: ['Use of all Services', 'Participation in Events', 'Discounts'],
      cardColor: 'bg-silver text-black',
      buttonColor: 'btn-primary',
    },
    {
      title: 'GOLD',
      price: '80.000 HUF',
      priceFrequency: '/month',
      description: 'Fully experience everything we can offer.',
      features: [
        'Everything in Silver',
        'Advance appointment booking',
        'Discounts for family members',
      ],
      cardColor: 'bg-gold text-black',
      buttonColor: 'btn-primary',
    },
    {
      title: 'PLATINUM',
      price: '120.000 HUF',
      priceFrequency: '/month',
      description: `Show your untapped limitless potential!`,
      features: [
        'Everything in Silver and Gold',
        'Free chauffeur service',
        'Biggest Péló inda House',
      ],
      cardColor: 'bg-platinum text-black',
      buttonColor: 'btn-primary',
    },
  ];

  const handleSubscribe = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex py-5 w-100">
      <Container className="d-flex flex-column justify-content-center align-items-center py-5">
        <div>
          <h2 className="text-uppercase fs-1 fw-bold yeseva-font text-primary p-4">
            CHOOSE YOUR BEST PLAN
          </h2>
        </div>
        <Container className="col-xs-8 col-sm-12 d-flex justify-content-center align-items-center flex-column flex-lg-row ">
          {membershipPlans.map((plan) => (
            <div key={plan.title} className="col-xs-8 col-sm-9 col-md-7 col-lg-4 col-xl-4 m-2">
              <div
                className={`d-flex flex-column p-3 rounded shadow ${
                  plan.cardColor
                } text-${plan.title.toLowerCase()}`}
              >
                <div className="d-flex flex-column align-items-center justify-content-center m-2">
                  <h2 className="m-2 text-white yeseva-font">{plan.title}</h2>
                  <span className="fs-3 text-dark fw-bold">{plan.price}</span>
                  <p className="fs-5 text-dark">{plan.priceFrequency}</p>
                </div>
                <p className="fs-5 text-center text-dark fst-italic">{plan.description}</p>
                <ul className="mb-4 list-unstyled flex-nowrap">
                  {plan.features.map((feature) => (
                    <li key={feature} className="mb-1 text-center text-white ">
                      <span> {feature}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="green"
                        className="bi bi-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                      </svg>
                    </li>
                  ))}
                </ul>
                <div className="mb-4 text-center">
                  <button
                    type="button"
                    className={`btn btn-lg btn-block ${plan.buttonColor}`}
                    onClick={() => setShowModal(true)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-light-gray josefin-font text-white" closeButton>
          <Modal.Title className="josefin-font px-2">
            Are you sure you want to subscribe?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleSubscribe} className="ms-2 w-25">
            YES
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)} className="me-2 w-25">
            NO
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Membership;
