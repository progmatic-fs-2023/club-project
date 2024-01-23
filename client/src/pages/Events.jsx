import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import AllEvents from '../components/AllEvents';
import { API_URL } from '../constants';

function Events() {
  const [events, setEvents] = useState([]);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [sortBy, setSortBy] = useState('startDate');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const currentDate = new Date();
        const response = await fetch(`${API_URL}/api/events`);
        const result = await response.json();

        const filteredEvents = result.filter((event) => new Date(event.startTime) > currentDate);

        const sortedEvents = [...filteredEvents].sort(
          (a, b) => new Date(a.startTime) - new Date(b.startTime),
        );

        setEvents(sortedEvents);
        setOriginalEvents(sortedEvents);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const sortedList = [...events];

    if (sortBy === 'EarliestStartDate') {
      sortedList.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
    } else if (sortBy === 'LatestStartDate') {
      sortedList.sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
    } else if (sortBy === 'ascName') {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'descName') {
      sortedList.sort((a, b) => b.name.localeCompare(a.name));
    }

    setEvents(sortedList);
  }, [sortBy]);

  const onSearch = (searchText) => {
    let filteredList = originalEvents;

    if (searchText.length >= 2) {
      filteredList = filteredList.filter((event) =>
        event.name.toLowerCase().includes(searchText.toLowerCase()),
      );

      setNoResults(filteredList.length === 0);
    } else {
      setNoResults(false);
    }
    setEvents(filteredList);
  };

  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
  };

  return (
    <div className="py-5 d-flex">
      <Container>
        <Container>
          <p className="pt-5">Type at least 2 characters to initiate the search.</p>
        </Container>
        <div className="d-flex justify-content-between align-items flex-column flex-md-row">
          <SearchBar className="search-bar" onSearch={onSearch} />
          <FilterBar onSearch={onSearch} onSortChange={handleSortChange} sortBy={sortBy} />
        </div>
        {noResults && <p className="m-3 text-danger">No results found</p>}
        <div>
          <h1 className="header-underline yeseva-font mt-5 fw-bold border-bottom border-warning border-3">
            EVENTS
          </h1>
        </div>
        <AllEvents events={events} />
      </Container>
    </div>
  );
}

export default Events;
