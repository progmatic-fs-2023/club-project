import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import AllServices from '../components/AllServices';
import ServiceSearchBar from '../components/ServiceSearchBar';

const servicesList = [
  {
    id: 1,
    category: 'SPORT',
    service: {
      name: 'TENNIS',
      serviceImg: 'https://placekitten.com/g/400/400',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 2,
    category: 'SPORT',
    service: {
      name: 'POOL',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 3,
    category: 'SPORT',
    service: {
      name: 'FITNESS',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 4,
    category: 'SPORT',
    service: {
      name: 'GOLF',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 5,
    category: 'BEAUTY/RELAXATION',
    service: {
      name: 'SPA',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit new consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 6,
    category: 'BEAUTY/RELAXATION',
    service: {
      name: 'MASSAGE',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 7,
    category: 'BEAUTY/RELAXATION',
    service: {
      name: 'HAIRDRESSING',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 8,
    category: 'RECREATION',
    service: {
      name: 'SAILING',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 9,
    category: 'RECREATION',
    service: {
      name: 'BILIARD',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
  {
    id: 10,
    category: 'RECREATION',
    service: {
      name: 'MOVIE',
      serviceImg: './src/assets/cat_tennis.jpg',
      details: 'Movie new actor ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
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
const [services, setServices] = useState(servicesList)
const [noResults, setNoResults] = useState(false);

const onSearch = (searchText) => {
  let filteredList = [...servicesList];

  if (searchText.length >= 3) {
    filteredList = filteredList.filter((service) =>
    service.service.name.toLowerCase().includes(searchText.toLowerCase()) ||
    service.service.details.toLowerCase().includes(searchText.toLowerCase()) ||
    service.service.moreDetails.toLowerCase().includes(searchText.toLowerCase())
  );

    setNoResults(filteredList.length === 0);
  } else {
    setNoResults(false);
  }

  setServices(filteredList);
};

return (
    <Container>
      <div className="mt-5">
        <ServiceSearchBar onSearch={onSearch} />
        {noResults && <p>No results found</p>}
        <AllServices services={services}/>
      </div>
    </Container>
  );
}

export default Services;
