import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function SearchBar({ onSearch }) {
  const [inputText, setInputText] = useState('');

  return (
    <div className="container">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
        <div className="input-group">
          <span className="input-group-text">
            <FaMagnifyingGlass />
          </span>

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
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
