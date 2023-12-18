import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ServiceCard.css"

function ServiceCard({ id, category, service }) {
  const { name, serviceImg, details } = service;
  return (
    <>
{/*       <Card class="d-flex justify-content-center service-card">
        <Card.Body>
          <Card.Text>{category}</Card.Text>
        </Card.Body>
        <Card.Body>
        <Card.Img variant="bottom" src={ serviceImg } />
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="primary">MORE DETAILS</Button>
        </Card.Body>
      </Card> */}
      
      <div class="container_foto">
         <div class="ver_mas text-center">
            <span  class="lnr lnr-eye"></span>
         </div>
         <article class="text-left">
            <h2>{name}</h2>
            <h4>{details}</h4>
         </article>
         <img src="https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Half_Dome_from_Glacier_Point0_1.jpg" alt=""/>
      </div>
  
    </>
  );
}

export default ServiceCard;
