import { useState } from 'react';
import PropTypes from 'prop-types';

function ServiceSearchBar({ onSearch }) {
  const [inputText, setInputText] = useState('');

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-4 mt-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search services..."
              value={inputText}
              onChange={(event) => {
                onSearch(event.target.value);
                setInputText(event.target.value);
              }}
              aria-label="search services"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceSearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default ServiceSearchBar;
