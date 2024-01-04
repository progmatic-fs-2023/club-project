import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import AllEvents from '../components/AllEvents';

function Events({ eventsList }) {
  const [events, setEvents] = useState(eventsList);
  const [noResults, setNoResults] = useState(false);

  const onSearch = (searchText) => {
    let filteredList = [...eventsList];

    if (searchText.length >= 2) {
      filteredList = filteredList.filter(
        (event) =>
          event.name.toLowerCase().includes(searchText.toLowerCase()) ||
          event.details.toLowerCase().includes(searchText.toLowerCase()) ||
          event.moreDetails.toLowerCase().includes(searchText.toLowerCase()),
      );

      setNoResults(filteredList.length === 0);
    } else {
      setNoResults(false);
    }

    setEvents(filteredList);
  };


  return (
    <div className='py-5 bg-services d-flex grow-1'>
      <Container>
        <div>
          <SearchBar onSearch={onSearch} />
          <p className="m-3">Type at least 2 characters to initiate the search.</p>
          {noResults && <p className='m-3 text-danger'>No results found</p>}
          <AllEvents events={events} />
        </div>
      </Container>
    </div>
  );
}

Events.propTypes = {
  eventsList: PropTypes.string.isRequired,
};

export default Events;
