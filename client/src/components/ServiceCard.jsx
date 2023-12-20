import PropTypes from 'prop-types';
import './ServiceCard.css';

function ServiceCard({ name, details }) {

  return (
     <div className="container_foto hover-overlay hover-zoom m-2">
        <div className="ver_mas text-center position-absolute w-100 bottom-0">
          <span className="lnr lnr-eye" />
        </div>
        <article className="text-left p-3 position-absolute bottom-0 z-index-1" >
          <h2 className='fs-5 border-bottom border-1 border-white text-white'>{name}</h2>
          <h4 className="fs-6 text-white">{details}</h4>
        </article>
        <img
          src="https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Half_Dome_from_Glacier_Point0_1.jpg"
          alt=""
          className='w-100 top-0 left-0'
        />
      </div>
  );
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default ServiceCard;
