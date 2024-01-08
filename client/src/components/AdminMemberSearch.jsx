import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function AdminMemberSearch({
  searchId,
  setSearchId,
  searchFirstName,
  setSearchFirstName,
  searchLastName,
  setSearchLastName,
  searchEmail,
  setSearchEmail,
  searchAddress,
  setSearchAddress,
  searchMembershipLevel,
  setSearchMembershipLevel,
  resetSearch,
}) {
  return (
    <Container className="shadow-sm bg-white p-3 my-4 rounded">
      <p className="p-1">Type at least 2 characters to initiate the search.</p>

      <Row>
        <Col xs={6} md={2}>
          <Form.Control
            type="text"
            placeholder="By ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <Form.Control
            type="text"
            placeholder="By First Name"
            value={searchFirstName}
            onChange={(e) => setSearchFirstName(e.target.value)}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <Form.Control
            type="text"
            placeholder="By Last Name"
            value={searchLastName}
            onChange={(e) => setSearchLastName(e.target.value)}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <Form.Control
            type="text"
            placeholder="By Email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <Form.Control
            type="text"
            placeholder="By Address"
            value={searchAddress}
            onChange={(e) => setSearchAddress(e.target.value)}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <div className="position-relative">
            <Form.Control
              as="select"
              value={searchMembershipLevel}
              onChange={(e) => setSearchMembershipLevel(e.target.value)}
              className="my-2"
            >
              <option value="">By Level</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="platinum">Platinum</option>
            </Form.Control>
            <div className="arrow-down" />
          </div>
        </Col>
        <Col xs={2}>
          <Button variant="dark" className="my-2" onClick={resetSearch}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminMemberSearch;

AdminMemberSearch.propTypes = {
  searchId: PropTypes.func.isRequired,
  setSearchId: PropTypes.func.isRequired,
  searchFirstName: PropTypes.func.isRequired,
  setSearchFirstName: PropTypes.func.isRequired,
  searchLastName: PropTypes.func.isRequired,
  setSearchLastName: PropTypes.func.isRequired,
  searchEmail: PropTypes.func.isRequired,
  setSearchEmail: PropTypes.func.isRequired,
  searchAddress: PropTypes.func.isRequired,
  setSearchAddress: PropTypes.func.isRequired,
  searchMembershipLevel: PropTypes.func.isRequired,
  setSearchMembershipLevel: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};
