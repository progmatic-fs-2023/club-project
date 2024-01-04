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

  return (
    <div className='bg-services d-flex grow-1 py-5'>
      <Container>
        <div >
          <SearchBar onSearch={onSearch} />
          <p className="m-3">Type at least 2 characters to initiate the search.</p>
          {noResults && <p className='m-3 text-danger'>No results found</p>}
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
