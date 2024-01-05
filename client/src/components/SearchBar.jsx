import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function SearchBar({ onSearch }) {
  const [inputText, setInputText] = useState('');

  return (
    <div className="container pt-5">
      <div className="justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
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
            <Button className="btn-primary" type="button" id="button-addon2">
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
