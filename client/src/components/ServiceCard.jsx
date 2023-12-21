import PropTypes from 'prop-types';
import './ServiceCard.css';

function ServiceCard({ name, details }) {
  return (
    <div className="container_foto">
      <div className="ver_mas text-center">
        <span className="lnr lnr-eye" />
      </div>
      <article className="text-left">
        <h2>{name}</h2>
        <h4>{details}</h4>
      </article>
      <img
        src="https://img-aws.ehowcdn.com/400x400/ds-img.studiod.com/Half_Dome_from_Glacier_Point0_1.jpg"
        alt=""
      />
    </div>
  );
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default ServiceCard;
