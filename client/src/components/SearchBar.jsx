import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const [inputText, setInputText] = useState('');

  return (
    <div className="container">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
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
          <button className="btn" type="button" id="button-addon2">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
