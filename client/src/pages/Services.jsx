import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import AllServices from '../components/AllServices';
import SearchBar from '../components/SearchBar';

/*   useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("URL");
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }
      fetchServices();
   },[]) */

function Services({ servicesList }) {
  const [services, setServices] = useState(servicesList);
  const [noResults, setNoResults] = useState(false);

  const onSearch = (searchText) => {
    let filteredList = [...servicesList];

    if (searchText.length >= 2) {
      filteredList = filteredList.filter(
        (service) =>
          service.service.name.toLowerCase().includes(searchText.toLowerCase()) ||
          service.service.details.toLowerCase().includes(searchText.toLowerCase()) ||
          service.service.moreDetails.toLowerCase().includes(searchText.toLowerCase()),
      );

      setNoResults(filteredList.length === 0);
    } else {
      setNoResults(false);
    }

    setServices(filteredList);
  };

  const containerStyle = {
    backgroundImage: 'url(./src/assets/services_bg.webp)',
    backgroundSize: 'cover',
  };

  return (
    <div style={containerStyle}>
      <Container>
        <div style={{ marginTop: '10vh' }}>
          <SearchBar onSearch={onSearch} />
          <p className="m-3">Type at least 2 characters to initiate the search.</p>
          {noResults && <p style={{ margin: '0 1rem', paddingBottom: '1rem' }}>No results found</p>}
          <AllServices services={services} />
        </div>
      </Container>
    </div>
  );
}

Services.propTypes = {
  servicesList: PropTypes.string.isRequired,
};

export default Services;
