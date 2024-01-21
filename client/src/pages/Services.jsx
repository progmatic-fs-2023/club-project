import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import AllServices from '../components/AllServices';
import SearchBar from '../components/SearchBar';
import { API_URL } from '../constants';

function Services() {
  const [services, setServices] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/services`);
        const result = await response.json();

        setServices(result);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchServices();
  }, []);

  const onSearch = (searchText) => {
    let filteredList = [...services];

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
    <Container className="d-flex py-5">
      <Container>
        <Container>
          <p className="pt-5">Type at least 2 characters to initiate the search.</p>
        </Container>
        <Col xs={12} md={9} lg={7}>
          <SearchBar className="search-bar" onSearch={onSearch} />
        </Col>
        {noResults && <p className="m-3 text-danger">No results found</p>}
        <AllServices services={services} />
      </Container>
    </Container>
  );
}

export default Services;
