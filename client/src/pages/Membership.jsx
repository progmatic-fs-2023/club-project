import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FaArrowCircleUp } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useAuth } from '../contexts/AuthContext';
import { API_URL } from '../constants';

function Membership() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [upgradeSuccessful, setUpgradeSuccessful] = useState(false);
  const { user, isAuthenticated, setUser } = useAuth();

  const membershipPlans = [
    {
      title: 'silver',
      price: '50.000 HUF',
      priceFrequency: '/month',
      description: 'To discover our events & exlusive services.',
      features: [
        'Horse riding',
        ' Bowling',
        'Pool',
        'Squash',
        'Yoga',
        'Library',
        'Restaurant & Bar',
      ],
      cardColor: 'membership-bg-silver text-black',
    },
    {
      title: 'gold',
      price: '80.000 HUF',
      priceFrequency: '/month',
      description: 'Fully experience everything we can offer.',
      features: ['Everything in Silver', 'Tennis', 'Archery', 'Gym', 'Massage', 'Sauna', 'Cricket'],
      cardColor: 'membership-bg-gold text-black',
    },
    {
      title: 'platinum',
      price: '120.000 HUF',
      priceFrequency: '/month',
      description: `Show your untapped limitless potential!`,
      features: [
        'Everything in Silver and Gold',
        'Golf',
        'Manicure & Pedicure',
        'Hairdressing',
        'Cosmetic',
        'Day spa',
        'Cigar room',
        'Cinema hall',
        'Driver service',
        'Biggest Péló inda House',
      ],
      cardColor: 'membership-bg-platinum text-black',
    },
  ];

  const handleSubscribe = async () => {
    try {
      if (!selectedPlan) {
        // console.error('No membership selected');
        return;
      }

      const response = await fetch(`${API_URL}/api/membership`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          membership: selectedPlan,
          id: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
      if (response.ok) {
        const result = await response.json();
        // console.log(`Membership: ${result}`)
        setUser(result);
        localStorage.setItem('user', JSON.stringify(result));
        setUpgradeSuccessful(true);
        setTimeout(() => {
          setShowModal(false);
          setUpgradeSuccessful(false);
        }, 3000);
      }
      // localStorage.setItem('user', JSON.stringify(result.data));
    } catch (error) {
      // console.error('Error subscribing:', error.message);
    }
  };

  const syncSubscribeButtonWithMembership = (planTitle) => {
    if (user) {
      if (user.membership === 'silver' && planTitle === 'silver') {
        return false;
      }
      if (user.membership === 'gold' && planTitle === 'gold') {
        return false;
      }
      if (user.membership === 'platinum' && planTitle === 'platinum') {
        return false;
      }
      return true;
    }
    return false;
  };

  return (
    <div className="d-flex py-5 w-100">
      <Container className="d-flex flex-column justify-content-center align-items-center py-5">
        <div>
          <h1 className="text-uppercase fw-bold yeseva-font text-primary p-4">
            CHOOSE YOUR BEST PLAN
          </h1>
        </div>
        <Container className="col-xs-8 col-sm-12 d-flex justify-content-center align-items-center flex-column flex-lg-row ">
          {membershipPlans.map((plan) => (
            <div
              key={plan.title}
              className=" col-xs-8 col-sm-9 col-md-7 col-lg-4 col-xl-4 m-2 position-relative d-inline-block text-uppercase"
            >
              <div className="ribbon ribbon-top-right text-uppercase text-center josefin-font fs-6 lh-1 z-1">
                {' '}
                <span className={`bg-${plan.title}`} style={{ backgroundColor: plan.title }}>
                  {plan.title}
                </span>
              </div>
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
                  <div className="p-3 d-flex align-items-center justify-content-center">
                    {isAuthenticated && syncSubscribeButtonWithMembership(plan.title) ? (
                      <Button
                        onClick={() => {
                          setSelectedPlan(plan.title);
                          setShowModal(true);
                        }}
                        className="btn-primary fs-5 max-vw-25 d-flex align-items-center gap-1"
                      >
                        <FaArrowCircleUp /> SUBSCRIBE
                      </Button>
                    ) : (
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">
                            {isAuthenticated ? 'CURRENT' : 'LOG IN TO SUBSCRIBE!'}
                          </Tooltip>
                        }
                      >
                        <span className="d-inline-block">
                          <Button
                            className="btn-primary fs-5 max-vw-25 d-flex align-items-center gap-1"
                            disabled
                            style={{ pointerEvents: 'none' }}
                          >
                            {isAuthenticated ? (
                              'CURRENT MEMBERSHIP'
                            ) : (
                              <span>
                                SUBSCRIBE <FaArrowCircleUp />
                              </span>
                            )}
                          </Button>
                        </span>
                      </OverlayTrigger>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-light-gray josefin-font text-white" closeButton>
          <Modal.Title className="josefin-font px-2">
            {upgradeSuccessful ? '' : `Are you sure you want to subscribe to ${selectedPlan}?`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-evenly">
          {upgradeSuccessful ? (
            <div className="fw-bold text-success">SUCCESSFUL UPGRADE</div>
          ) : (
            <>
              <Button variant="secondary" onClick={() => setShowModal(false)} className="me-2 w-25">
                NO
              </Button>
              <Button
                variant="primary"
                onClick={() => handleSubscribe(selectedPlan)}
                className="ms-2 w-25"
              >
                YES
              </Button>{' '}
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Membership;
