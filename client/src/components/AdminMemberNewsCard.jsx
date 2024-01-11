import PropTypes from 'prop-types';

function AdminMemberNewsCard({ title, count }) {
  return (
    <div className="bg-primary text-light shadow-sm d-flex flex-row flex-md-column align-items-center align-items-md-start justify-content-around p-3 rounded">
      <h6>{title}</h6>
      <h4>{count}</h4>
    </div>
  );
}

export default AdminMemberNewsCard;

AdminMemberNewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
