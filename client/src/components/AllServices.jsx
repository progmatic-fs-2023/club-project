import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';
import CategoryHeader from './CategoryHeader';

function AllServices({ services }) {
  const groupedByCategory = services.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div>
          <CategoryHeader categoryName={category} />
          <div className="container text-left p-3">
            <Row xs={1} md={2} lg={3} xl={4} className="m-1">
              {items.map((item) => (
                <Col>
                  <ServiceCard name={item.service.name} details={item.service.details} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ))}
    </div>
  );
}

AllServices.propTypes = {
  services: PropTypes.string.isRequired,
  reduce: PropTypes.string.isRequired,
};

export default AllServices;
