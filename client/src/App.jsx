import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainCarousel from './components/MainCarousel';
import Layout from './components/Layout';
import Services from './pages/Services';
import Service from './pages/Service';

const servicesList = [
  {
    id: 1,
    category: 'SPORT',
    service: {
      name: 'GOLF',
      serviceImg: '../src/assets/as_golf.webp',
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/tennis_page.jpg',
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
      serviceImg: 'src/assets/as_golf.webp',
      headerImg: '../src/assets/golf_page.jpg',
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
      serviceImg: 'src/assets/as_golf.webp',
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 12,
    category: 'BEAUTY/RELAX',
    service: {
      name: 'manicure&pedicure',
      serviceImg: 'src/assets/as_golf.webp',
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.    ',
    },
  },
  {
    id: 17,
    category: 'RECREATION',
    service: {
      name: 'RESTAURANT&BAR',
      serviceImg: 'src/assets/as_golf.webp',
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
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
      headerImg: '../src/assets/golf_page.jpg',
      details:
        'Movie new actor ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum movie New actor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
];

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainCarousel />} />
        <Route path="/events" element={<div>EVENTS</div>} />
        <Route path="/services" element={<Services servicesList={servicesList} />} />
        <Route path="/services/:serviceName" element={<Service servicesList={servicesList} /> } />
        <Route path="/gallery" element={<div>GALLERY</div>} />
        <Route path="/membership" element={<div>MEMBERSHIP</div>} />
        <Route path="/aboutus" element={<div>ABOUT US</div>} />
        <Route path="/contact" element={<div>CONTACT</div>} />
        <Route path="/profile" element={<div>PROFILE</div>} />
      </Route>
    </Routes>
  );
}

export default App;
