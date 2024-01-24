import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

function Filter({ onSortChange, handleCheckboxChange, sortBy, isPastEventsChecked }) {
  return (
    <div className="container d-flex justify-content-end">
      <div className="col-5 col-sm-4 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center">
        <Form.Check
          type="checkbox"
          className="form-checkbox mt-2 mt-md-0"
          id="checkAvailableEvents"
          label="PAST EVENTS"
          onChange={handleCheckboxChange}
          checked={isPastEventsChecked}
        />
      </div>
      <div className="col-5 col-sm-4 col-md-6 col-lg-4 col-xl-3 d-flex align-items-center">
        <select
          className="form-select mt-2 mt-md-0"
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
  handleCheckboxChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  isPastEventsChecked: PropTypes.bool.isRequired,
};

export default Filter;
