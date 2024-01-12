import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Events from './pages/Events';
import Service from './pages/Service';
import Event from './pages/Event';
import Home from './pages/Home';
import Profile from './pages/Profile';

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
    availableSeats: 12,
    eventImg: '../src/assets/ae_wine_tasting.webp',
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
    eventImg: '../src/assets/ae_classical_music.webp',
    headerImg: '../src/assets/violin_page.webp',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
    moreDetails:
      'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
  },
  {
    id: 3,
    name: 'The Art of Living: Book Signing with Christian Micheals',
    startTime: '2024-01-18 13:00:0.000',
    endTime: '2024-01-18 14:30:0.000',
    availableSeats: 0,
    eventImg: '../src/assets/ae_book_presentation.webp',
    headerImg: '../src/assets/book_page.webp',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
    moreDetails:
      'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
  },
  {
    id: 4,
    name: 'Grand New Year Ball',
    startTime: '2024-01-04 19:00:0.000',
    endTime: '2024-01-05 05:30:0.000',
    availableSeats: 60,
    eventImg: '../src/assets/ae_ball.webp',
    headerImg: '../src/assets/book_page.webp',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
    moreDetails:
      'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
  },
  {
    id: 5,
    name: 'Thomas Schnetzer - The nature of nature',
    startTime: '2024-02-04 10:00:0.000',
    endTime: '2024-03-05 18:00:0.000',
    availableSeats: 45,
    eventImg: '../src/assets/ae_exhibition.webp',
    headerImg: '../src/assets/book_page.webp',
    details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
    moreDetails:
      'Lorem ipsum dolor new amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
  },
];

const famous = [
  { name: 'John Doe', profession: 'Scientist', year: 1957, id: 1 },
  { name: 'Jane Doe', profession: 'Musician', year: 1942, id: 2 },
  { name: 'Ryan Doe', profession: 'Chemist', year: 1968, id: 3 },
  { name: 'Carolyn Doe', profession: 'Chef', year: 1972, id: 4 },
  { name: 'Mary Doe', profession: 'Writer', year: 1979, id: 5 },
  { name: 'Peter Doe', profession: 'Magician', year: 1993, id: 6 },
];

const charity = [
  { image: '../src/assets/', organization: 'World Wildlife Fund', money: '1500$', id: 1 },
  { image: '../src/assets/', organization: `Children's Food Fund`, money: '1800$', id: 2 },
  { image: '../src/assets/', organization: 'Budapest Bike Maffia', money: '900$', id: 3 },
  { image: '../src/assets/', organization: 'Greenpeace', money: '600$', id: 4 },
];

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events eventsList={eventsList} />} />
        <Route path="/events/:eventName" element={<Event eventsList={eventsList} />} />
        <Route path="/services" element={<Services servicesList={servicesList} />} />
        <Route path="/services/:serviceName" element={<Service servicesList={servicesList} />} />
        <Route path="/gallery" element={<div>GALLERY</div>} />
        <Route path="/membership" element={<div>MEMBERSHIP</div>} />
        <Route path="/aboutus" element={<AboutUs famous={famous} charity={charity} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
