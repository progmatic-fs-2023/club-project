import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Col } from 'react-bootstrap';
import { API_URL } from '../constants';

function BookingServiceSelector({ setSelectedServiceId, setSelectedServiceName }) {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);
  const { serviceIdFromParams } = useParams();

  let memberMembership = 'platinum';

  if (memberMembership === 'gold') {
    memberMembership = 'silvergold';
  } else if (memberMembership === 'platinum') {
    memberMembership = 'silvergoldplatinum';
  }

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/membership?membership=${memberMembership}`);
        const result = await response.json();

        const filteredServices = result.filter(
          (service) => !['LIBRARY', 'GYM', 'CIGAR ROOM'].includes(service.name),
        );

        setServices(filteredServices);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const defaultSelectedService = services.find(
    (service) => service.id === parseInt(serviceIdFromParams, 10),
  );

  const groupedByCategory = services.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = { id: uuidv4(), items: [] };
    }
    acc[category].items.push(item);
    return acc;
  }, {});

  if (!selectedService && serviceIdFromParams) {
    const defaultSelectedServiceNameByParams = services.find(
      (service) => service.id === Number(serviceIdFromParams),
    );
    setSelectedServiceName(defaultSelectedServiceNameByParams.name);
  }

  const handleSelectedService = (event) => {
    const selectedItemId = event.target.value;
    const selectedItemName = services.find((service) => service.id === Number(event.target.value));
    setSelectedService(event.target.value);
    setSelectedServiceId(selectedItemId);
    setSelectedServiceName(selectedItemName.name);
  };

  return (
    <Col xs={11} md={6} className="py-2">
      <select
        className="form-select"
        aria-label="Default select example"
        value={
          selectedService
            ? selectedService.id
            : (defaultSelectedService && defaultSelectedService.id) || ''
        }
        onChange={handleSelectedService}
      >
        <option disabled value="" hidden>
          CHOOSE SERVICE
        </option>
        {Object.entries(groupedByCategory).map(([category, { items }]) => (
          <optgroup key={category} label={category}>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </Col>
  );
}

BookingServiceSelector.propTypes = {
  setSelectedServiceId: PropTypes.func.isRequired,
  setSelectedServiceName: PropTypes.func.isRequired,
};

export default BookingServiceSelector;
