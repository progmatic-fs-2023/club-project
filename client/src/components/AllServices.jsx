import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';
import CategoryHeader from './CategoryHeader';
import ScrollToTopButton from './ScrollToTopButton';

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
        <div key={category}>
          <CategoryHeader categoryName={category} />
          <div className="container text-left p-3">
            <Row xs={1} md={2} lg={3} xl={4}>
              {items.map((item) => (
                <Col className="p-3" key={item.service.name}>
                  <ServiceCard
                    name={item.service.name}
                    serviceImg={item.service.serviceImg}
                    details={item.service.details}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ))}
      <ScrollToTopButton />
    </div>
  );
}

AllServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};

export default AllServices;
