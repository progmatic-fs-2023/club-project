import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainCarousel from './components/MainCarousel';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Events from './pages/Events';
import Service from './pages/Service';
import Event from './pages/Event';

const servicesList = [
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
];

const eventsList = [
  {
    id: 1,
    name: 'A Tasting of Wines From Italy',
    startTime: '2024-01-11 17:30:0.000',
    endTime: '2024-01-11 20:30:0.000',
    availableSeats: 0,
    eventImg: '../src/assets/as_golf.webp',
    headerImg: '../src/assets/wine_page.webp',
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
    eventImg: '../src/assets/as_golf.webp',
    headerImg: '../src/assets/violin_page.webp',
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
    eventImg: '../src/assets/as_golf.webp',
    headerImg: '../src/assets/book_page.webp',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
    moreDetails:
      'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
  },
];

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainCarousel />} />
        <Route path="/events" element={<Events eventsList={eventsList} />} />
        <Route path="/events/:eventName" element={<Event eventsList={eventsList} />} />
        <Route path="/services" element={<Services servicesList={servicesList} />} />
        <Route path="/services/:serviceName" element={<Service servicesList={servicesList} />} />
        <Route path="/gallery" element={<div>GALLERY</div>} />
        <Route path="/membership" element={<div>MEMBERSHIP</div>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<div>PROFILE</div>} />
      </Route>
    </Routes>
  );
}

export default App;
