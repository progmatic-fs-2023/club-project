import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ServiceCard from './ServiceCard';
import CategoryHeader from './CategoryHeader';

const services = [
  {
    id: 1,
    category: 'SPORT',
    service: {
      name: 'TENNIS',
      serviceImg: 'https://placekitten.com/g/400/400',
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
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
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
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
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
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
      details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, cumque?',
      moreDetails:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odit perferendis voluptatem recusandae enim dolore deleniti numquam, ratione vel sit accusantium amet cumque, itaque excepturi alias culpa optio nostrum ab quo velit? Laborum nulla, ullam in quaerat quis excepturi perferendis.',
    },
  },
];

const groupedByCategory = services.reduce((acc, item) => {
  const { category } = item;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item);
  return acc;
}, {});

const divStyle = {};

function AllServices() {
  return (
    <div>
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div>
          <CategoryHeader categoryName={category} />
          <div className="container text-left p-4" style={divStyle}>
            <Row xs={1} md={2} lg={4}>
              {items.map((item) => (
                <Col>
                  <ServiceCard name={item.service.name} details={item.service.details}  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllServices;
