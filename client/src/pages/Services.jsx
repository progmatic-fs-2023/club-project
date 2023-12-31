import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import AllServices from '../components/AllServices';
import ServiceSearchBar from '../components/ServiceSearchBar';

const servicesList = [
  {
    id: 1,
    category: 'SPORT',
    service: {
      name: 'GOLF',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 2,
    category: 'SPORT',
    service: {
      name: 'TENNIS',
      serviceImg: 'src/assets/as_tennis.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 3,
    category: 'SPORT',
    service: {
      name: 'SQUASH',
      serviceImg: 'src/assets/as_squash.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 4,
    category: 'SPORT',
    service: {
      name: 'BOWLING',
      serviceImg: 'src/assets/as_bowling.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 5,
    category: 'SPORT',
    service: {
      name: 'POOL',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 6,
    category: 'SPORT',
    service: {
      name: 'RIDING',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 7,
    category: 'SPORT',
    service: {
      name: 'ARCHERY',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 8,
    category: 'SPORT',
    service: {
      name: 'YOGA',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 9,
    category: 'SPORT',
    service: {
      name: 'CRICKET',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 10,
    category: 'SPORT',
    service: {
      name: 'Gym',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 11,
    category: 'BEAUTY/RELAX',
    service: {
      name: 'Massage',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 12,
    category: 'BEAUTY/RELAX',
    service: {
      name: 'manicure/pedicure',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 13,
    category: 'BEAUTY/RELAX',
    service: {
      name: 'hairdressing',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 14,
    category: 'BEAUTY/RELAX',
    service: {
      name: 'cosmetic',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 15,
    category: 'BEAUTY/RELAX',
    service: {
      name: 'sauna',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 16,
    category: 'BEAUTY/RELAX',
    service: {
      name: 'day spa',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 17,
    category: 'RECREATION',
    service: {
      name: 'RESTAURANT/BAR',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 18,
    category: 'RECREATION',
    service: {
      name: 'LIBRARY',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 19,
    category: 'RECREATION',
    service: {
      name: 'cigar room',
      serviceImg: 'src/assets/as_golf.webp',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 20,
    category: 'RECREATION',
    service: {
      name: 'cinema hall',
      serviceImg: 'src/assets/as_golf.webp',
      details:
        'Movie new actor ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum movie New actor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 21,
    category: 'RECREATION',
    service: {
      name: 'chauffeur service',
      serviceImg: 'src/assets/as_golf.webp',
      details:
        'Movie new actor ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum movie New actor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
];

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

function Services() {
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
          <ServiceSearchBar onSearch={onSearch} />
          <p className="m-3">Type at least 2 characters to initiate the search.</p>
          {noResults && <p style={{ margin: '0 1rem', paddingBottom: '1rem' }}>No results found</p>}
          <AllServices services={services} />
        </div>
      </Container>
    </div>
  );
}

export default Services;
