import PropTypes from 'prop-types';

function ServiceCard({ name, serviceImg, details, membership }) {
  return (
    <div className="position-relative d-inline-block">
      <div className="ribbon ribbon-top-right text-uppercase text-center josefin-font fs-6 lh-1 z-3">
        {}
        <span className={`bg-${membership}`} style={{ backgroundColor: membership }}>
          {membership}
        </span>
      </div>
      <div className="container_foto hover-overlay hover-zoom position-relative overflow-hidden">
        <div className="ver_mas bg-primary position-absolute w-100 bottom-0 d-flex align-items-center justify-content-center">
          <span className="lnr lnr-eye position-relative fs-1 text-info" />
        </div>
        <article className="text-left p-3  position-absolute bottom-0">
          <h2 className="fs-3 border-bottom border-1 pb-1 border-white text-white fw-bold text-uppercase">
            {name}
          </h2>
          <h4 className="fs-6 text-white fw-normal">{details}</h4>
        </article>
        <img src={serviceImg} alt="service" className="w-100 top-0 left-0" />
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  serviceImg: PropTypes.string.isRequired,
  membership: PropTypes.string.isRequired,
};

export default ServiceCard;
