import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import AllEvents from '../components/AllEvents';

function Events({ eventsList }) {
  const [events, setEvents] = useState(eventsList);
  const [noResults, setNoResults] = useState(false);
  const [sortBy, setSortBy] = useState('startDate'); // Default sorting by startDate

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

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);

    const sortedList = [...events];

    if (selectedSortBy === 'EarliestStartDate') {
      sortedList.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
    } else if (selectedSortBy === 'LatestStartDate') {
      sortedList.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
    } else if (selectedSortBy === 'ascName') {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSortBy === 'descName') {
      sortedList.sort((a, b) => b.name.localeCompare(a.name));
    }

    setEvents(sortedList);
  };

  return (
    <div className="py-5 d-flex">
      <Container>
        <Container>
          <p className="pt-5">Type at least 2 characters to initiate the search.</p>
        </Container>
        <div className="d-flex justify-content-between align-items flex-column flex-md-row">
          <SearchBar className="search-bar" onSearch={onSearch} />
          <FilterBar
            className="mt-md-2"
            onSearch={onSearch}
            onSortChange={handleSortChange}
            sortBy={sortBy}
          />
        </div>
        {noResults && <p className="m-3 text-danger">No results found</p>}
        <AllEvents events={events} />
      </Container>
    </div>
  );
}

Events.propTypes = {
  eventsList: PropTypes.string.isRequired,
};

export default Events;
