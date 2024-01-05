import PropTypes from 'prop-types';

function Filter({ onSortChange, sortBy }) {
  return (
    <div className="container d-flex justify-content-end">
      <div className="col-6 col-sm-5 col-md-7 col-lg-6 col-xl-4 d-flex align-items-center">
        <select
          className="form-select me-2"
          aria-label="Default select example"
          id="sortBy"
          onChange={onSortChange}
          value={sortBy}
        >
          <option value="EarliestStartDate">&#9650; BY DATE</option>
          <option value="LatestStartDate">&#9660; BY DATE</option>
          <option value="ascName"> &#9650; BY NAME</option>
          <option value="descName"> &#9660; BY NAME</option>
        </select>
      </div>
    </div>
  );
}

Filter.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default Filter;
