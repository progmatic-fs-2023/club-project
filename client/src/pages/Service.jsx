import { useParams, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Service({ servicesList }) {
  const { serviceName } = useParams();
  // const service = servicesList[serviceId-1]

  const service = servicesList.find((item) => item.service.name == serviceName);
  console.log(service);
  const servicePrev = servicesList.find((item) => item.id == service.id-1)
  console.log(servicePrev);
  return (
    <>
      <Image
        className="w-100"
        style={{ height: '250px', objectFit: 'cover' }}
        src={service.service.headerImg}
        fluid
      />
      <div className="bg-secondary bg-opacity-25 p-5 d-flex flex-column align-items-center">
        <h3>{service.category}</h3>
        <h1 className="fw-bold" style={{ color: '#0d2241', borderBottom: '5px solid #a5a51e' }}>
          {service.service.name}{' '}
        </h1>
        <div className="d-flex justify-content-evenly p-3">
          <Image
            className="w-25 h-25 mx-3"
            style={{ objectFit: 'cover' }}
            src={service.service.serviceImg}
            fluid
            rounded
          />
          <div className="px-3">
            {/* style={{ backgroundColor: '#0d2241', color: "#a5a51e" }} */}
            <p>{service.service.moreDetails}</p>
            <Nav className="d-flex justify-content-evenly">
              <Nav.Link as={NavLink} to={`/services/${servicePrev.service.name}`}>
                <Button className="fs-5 max-vw-25 bg-secondary" variant="outline-light">
                  Prev
                </Button>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services">
                <Button className="fs-5 max-vw-25 bg-secondary" variant="outline-light">
                  Services
                </Button>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services">
                <Button className="fs-5 max-vw-25 bg-secondary" variant="outline-light">
                  Next
                </Button>
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
