import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import CategoryHeader from './CategoryHeader';
import ScrollToTopButton from './ScrollToTopButton';
import { useAuth } from '../contexts/AuthContext';

function AllServices({ services }) {
  const { user } = useAuth();

  const syncServicesWithMembership = services.map((item) => {
    if (user) {
      if (user.membership && item.membership === 'silver') {
        return { ...item, membership: '' };
      }
      if (
        user.membership === 'gold' &&
        (item.membership === 'gold' || item.membership === 'silver')
      ) {
        return { ...item, membership: '' };
      }
      if (user.membership === 'platinum') {
        return { ...item, membership: '' };
      }

      return item;
    }
    return { ...item };
  });

  const groupedByCategory = syncServicesWithMembership.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = { id: uuidv4(), items: [] };
    }
    acc[category].items.push(item);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedByCategory).map(([category, { id, items }]) => (
        <div key={`category-${id}`}>
          <CategoryHeader categoryName={category} />
          <div className="container text-left p-3">
            <Row xs={1} md={2} lg={3} xl={3}>
              {items.map((item) => (
                <Col className="p-3" key={`card-${item.id}`}>
                  <NavLink to={item.slugName}>
                    <ServiceCard
                      name={item.name}
                      serviceImg={item.serviceImg}
                      details={item.details}
                      membership={item.membership}
                    />
                  </NavLink>
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
