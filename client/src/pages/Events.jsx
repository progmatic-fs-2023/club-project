import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import SearchBar from '../components/SearchBar';
import AllEvents from '../components/AllEvents';

const eventsList = [
  {
    id: 1,
    name: 'A Tasting of Wines From Italy',
    startTime: '2024-01-11 17:30:0.000',
    endTime: '2024-01-11 20:30:0.000',
    availableSeats: 0,
    eventImg: 'src/assets/as_golf.webp',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
    moreDetails:
      'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
  },
  {
    id: 2,
    name: 'VOICE & THE VIOLIN: Jason Peterson & LARISA Suarez',
    startTime: '2024-01-25 19:00:0.000',
    endTime: '2024-01-25 22:30:0.000',
    availableSeats: 0,
    eventImg: 'src/assets/as_golf.webp',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
    moreDetails:
      'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
  },
  {
    id: 3,
    name: 'The Art of Living: Presentation & Book Signing with Christian Micheals',
    startTime: '2024-01-18 13:00:0.000',
    endTime: '2024-01-18 14:30:0.000',
    availableSeats: 35,
    eventImg: 'src/assets/as_golf.webp',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
    moreDetails:
      'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
  },
];

function Events() {
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
          <AllEvents events={events} />
        </div>
      </Container>
    </div>
  );
}

export default Events;
