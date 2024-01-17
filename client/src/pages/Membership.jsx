import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Membership() {
  const [showModal, setShowModal] = useState(false);

  const membershipPlans = [
    {
      title: 'SILVER',
      price: '50.000 HUF',
      priceFrequency: '/month',
      description: 'To discover our events and exlusive services.',
      features: ['Use of all Services', 'Participation in Events', 'Discounts'],
      cardColor: 'bg-silver text-black',
      buttonColor: 'btn-primary',
    },
    {
      title: 'GOLD',
      price: '80.000 HUF',
      priceFrequency: '/month',
      description: 'The best option to fully experience everything we can offer.',
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
      description: 'Show your potential!',
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
    <section className="bg-services pt-20 pb-10 text-dark min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold lg:text-5xl mb-5 mb-lg-8">Choose your best plan</h2>
          </div>
          <div className="row g-5 justify-content-center">
            {membershipPlans.map((plan) => (
              <div key={plan.title} className="col-md-4 mb-4">
                <div
                  className={`d-flex flex-column p-6 space-y-6 rounded shadow ${
                    plan.cardColor
                  } text-${plan.title.toLowerCase()}`}
                  style={{ minHeight: '500px' }}
                >
                  <div className="d-flex flex-column align-items-start ms-3 mt-2">
                    <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
                    <span className="fs-1 text-dark text fw-bold font-bold">{plan.price}</span>
                    <p className="fs-5 text">{plan.priceFrequency}</p>
                  </div>
                  <p className="fs-4 mt-3 text-center fst-italic">{plan.description}</p>
                  <ul className="flex-1 mb-6 list-unstyled">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex mb-2 space-x-2 text-center">
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
                  <div className="mb-5 mt-auto text-center">
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
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to subscribe?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleSubscribe} className="ms-2 w-25">
            Yes
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)} className="me-2 w-25">
            No
          </Button>
        </Modal.Body>
      </Modal>
      <footer className="mt-auto text-center py-4 bg-gray-800 text-violet-400" />
    </section>
  );
}

export default Membership;
