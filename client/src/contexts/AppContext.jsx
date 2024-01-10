import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

function AppProvider({ children }) {
  const [famous] = useState([
    { name: 'John Doe', profession: 'Scientist', year: 1957, id: 1 },
    { name: 'Jane Doe', profession: 'Musician', year: 1942, id: 2 },
    { name: 'Ryan Doe', profession: 'Chemist', year: 1968, id: 3 },
    { name: 'Carolyn Doe', profession: 'Chef', year: 1972, id: 4 },
    { name: 'Mary Doe', profession: 'Writer', year: 1979, id: 5 },
    { name: 'Peter Doe', profession: 'Magician', year: 1993, id: 6 },
  ]);

  const [charity] = useState([
    { image: '../src/assets/', organization: 'World Wildlife Fund', money: '1500$', id: 1 },
    { image: '../src/assets/', organization: `Children's Food Fund`, money: '1800$', id: 2 },
    { image: '../src/assets/', organization: 'Budapest Bike Maffia', money: '900$', id: 3 },
    { image: '../src/assets/', organization: 'Greenpeace', money: '600$', id: 4 },
  ]);

  const [events, setEvents] = useState([]);

  const [services] = useState([
    {
      id: 1,
      category: 'SPORT',
      service: {
        name: 'GOLF',
        serviceImg: '../src/assets/as_golf.webp',
        headerImg: '../src/assets/golf_page.webp',
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
        serviceImg: '../src/assets/as_tennis.webp',
        headerImg: '../src/assets/tennis_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
      },
    },
    {
      id: 3,
      category: 'SPORT',
      service: {
        name: 'HORSE RIDING',
        serviceImg: '../src/assets/as_riding.webp',
        headerImg: '../src/assets/riding_page.webp',
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
        serviceImg: '../src/assets/as_bowling.webp',
        headerImg: '../src/assets/bowling_page.webp',
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
        serviceImg: '../src/assets/as_pool.webp',
        headerImg: '../src/assets/pool_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 6,
      category: 'SPORT',
      service: {
        name: 'SQUASH',
        serviceImg: '../src/assets/as_squash.webp',
        headerImg: '../src/assets/squash_page.webp',
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
        serviceImg: '../src/assets/as_archery.webp',
        headerImg: '../src/assets/archery_page.webp',
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
        serviceImg: '../src/assets/as_yoga.webp',
        headerImg: '../src/assets/yoga_page.webp',
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
        serviceImg: '../src/assets/as_cricket.webp',
        headerImg: '../src/assets/cricket_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 10,
      category: 'SPORT',
      service: {
        name: 'GYM',
        serviceImg: '../src/assets/as_gym.webp',
        headerImg: '../src/assets/gym_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 11,
      category: 'BEAUTY/RELAX',
      service: {
        name: 'MASSAGE',
        serviceImg: '../src/assets/as_massage.webp',
        headerImg: '../src/assets/massage_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 12,
      category: 'BEAUTY/RELAX',
      service: {
        name: 'MANICURE & PEDICURE',
        serviceImg: '../src/assets/as_manicure.webp',
        headerImg: '../src/assets/man&ped_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 13,
      category: 'BEAUTY/RELAX',
      service: {
        name: 'HAIRDRESSING',
        serviceImg: '../src/assets/as_hairdressing.webp',
        headerImg: '../src/assets/hairdressing_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 14,
      category: 'BEAUTY/RELAX',
      service: {
        name: 'COSMETIC',
        serviceImg: '../src/assets/as_cosmetic.webp',
        headerImg: '../src/assets/cosmetic_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 15,
      category: 'BEAUTY/RELAX',
      service: {
        name: 'SAUNA',
        serviceImg: '../src/assets/as_sauna.webp',
        headerImg: '../src/assets/sauna_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 16,
      category: 'BEAUTY/RELAX',
      service: {
        name: 'DAY SPA',
        serviceImg: '../src/assets/as_day_spa.webp',
        headerImg: '../src/assets/dayspa_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
      },
    },
    {
      id: 17,
      category: 'RECREATION',
      service: {
        name: 'RESTAURANT & BAR',
        serviceImg: '../src/assets/as_restaurant.webp',
        headerImg: '../src/assets/restaurant_page.webp',
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
        serviceImg: '../src/assets/as_library.webp',
        headerImg: '../src/assets/library_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
      },
    },
    {
      id: 19,
      category: 'RECREATION',
      service: {
        name: 'CIGAR ROOM',
        serviceImg: '../src/assets/as_cigar_room.webp',
        headerImg: '../src/assets/cigarroom_page.webp',
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
      },
    },
    {
      id: 20,
      category: 'RECREATION',
      service: {
        name: 'CINEMA HALL',
        serviceImg: '../src/assets/as_cinema.webp',
        headerImg: '../src/assets/cinema_page.webp',
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
        name: 'DRIVER SERVICE',
        serviceImg: '../src/assets/as_driver_service.webp',
        headerImg: '../src/assets/driver_page.webp',
        details:
          'Movie new actor ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
        moreDetails:
          'Lorem ipsum movie New actor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
      },
    },
  ]);

  const [members] = useState([
    {
      id: '001',
      firstName: 'Buzz',
      lastName: 'Lightyear',
      memberImg: 'https://placekitten.com/200',
      email: 'buzz@buzz.com',
      address: "Andy's room",
      membershipLevel: 'gold',
      membershipStartTime: '2023-11-11 17:30:0.000',
      membershipEndTime: '2023-12-11 17:30:0.000',
      isVerified: true,
      isPayed: true,
    },
    {
      id: '002',
      firstName: 'Mike',
      lastName: 'Wazowski',
      memberImg: 'https://placekitten.com/200',
      email: 'mike@monster.com',
      address: 'Monster inc',
      membershipLevel: 'platinum',
      membershipStartTime: '2024-01-08 00:31:42.000',
      membershipEndTime: '2024-02-08 00:31:42.000',
      isVerified: true,
      isPayed: true,
    },
    {
      id: '003',
      firstName: 'Sally',
      lastName: 'Carrera',
      memberImg: 'https://placekitten.com/200',
      email: 'sally@porsche.com',
      address: 'Garage',
      membershipLevel: 'silver',
      membershipStartTime: '2024-01-01 02:02:0.000',
      membershipEndTime: '2024-02-01 02:02:0.000',
      isVerified: true,
      isPayed: true,
    },
    {
      id: '004',
      firstName: 'Carl',
      lastName: 'Fredricksen',
      memberImg: 'https://placekitten.com/200',
      email: 'up@papa.com',
      address: 'Paradise Falls',
      membershipLevel: 'platinum',
      membershipStartTime: '',
      membershipEndTime: '',
      isVerified: true,
      isPayed: false,
    },
  ]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/events');
        const result = await response.json();
        setEvents(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEvents();
  }, []);

  const contextValue = useMemo(
    () => ({
      famous,
      charity,
      events,
      services,
      members,
    }),
    [famous, charity, events, services, members],
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider, useAppContext };
