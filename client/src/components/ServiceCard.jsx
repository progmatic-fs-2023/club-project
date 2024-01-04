import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function ServiceCard({ name, serviceImg, details }) {
  return (
    <div className="container_foto hover-overlay hover-zoom position-relative overflow-hidden">
      <NavLink to={name}>
        <div className="ver_mas position-absolute w-100 bottom-0 d-flex align-items-center justify-content-center">
          <span className="lnr lnr-eye position-relative fs-1" />
        </div>
      </NavLink>
      <article className="text-left p-3  position-absolute bottom-0">
        <h2 className="fs-3 border-bottom border-1 pb-1 border-white text-white fw-bold text-uppercase">
          {name}
        </h2>
        <h4 className="fs-6 text-white fw-normal">{details}</h4>
      </article>
      <img src={serviceImg} alt="service" className="w-100 top-0 left-0" />
    </div>
  );
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  serviceImg: PropTypes.string.isRequired,
};

export default ServiceCard;
