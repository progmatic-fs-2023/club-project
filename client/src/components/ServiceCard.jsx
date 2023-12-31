import PropTypes from 'prop-types';
import './ServiceCard.css';

function ServiceCard({ name, serviceImg, details }) {
  return (
    <div className="container_foto hover-overlay hover-zoom">
      <div className="ver_mas text-center position-absolute w-100 bottom-0">
        <span className="lnr lnr-eye" />
      </div>
      <article className="text-left p-3  position-absolute bottom-0">
        <h2 className="fs-5 border-bottom border-1 pb-1 border-white text-white fw-bold text-uppercase">
          {name}
        </h2>
        <h4 className="fs-6 text-white" style={{ fontWeight: 400 }}>
          {details}
        </h4>
      </article>
      <img src={serviceImg} alt="" className="w-100 top-0 left-0" />
    </div>
  );
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  serviceImg: PropTypes.string.isRequired,
};

export default ServiceCard;
