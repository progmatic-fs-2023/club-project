import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { MdCancel } from 'react-icons/md';

function AdminMemberSearch({
  onSearch,
  searchId,
  setSearchId,
  searchFirstName,
  setSearchFirstName,
  searchLastName,
  setSearchLastName,
  searchEmail,
  setSearchEmail,
  searchMembershipLevel,
  setSearchMembershipLevel,
  resetSearch,
}) {
  return (
    <Container className="shadow-sm bg-white p-3 my-4 rounded">
      <Row className="align-items-end">
        <Col xs={6} md={2}>
          <div className="fw-bold">Id</div>
          <Form.Control
            type="text"
            placeholder="By ID"
            value={searchId}
            onChange={(event) => {
              onSearch(event.target.value, 'id');
              setSearchId(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <div className="fw-bold">First name</div>
          <Form.Control
            type="text"
            placeholder="By First Name"
            value={searchFirstName}
            onChange={(event) => {
              onSearch(event.target.value, 'firstName');
              setSearchFirstName(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <div className="fw-bold">Last name</div>
          <Form.Control
            type="text"
            placeholder="By Last Name"
            value={searchLastName}
            onChange={(event) => {
              onSearch(event.target.value, 'lastName');
              setSearchLastName(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <div className="fw-bold">Email</div>
          <Form.Control
            type="text"
            placeholder="By Email"
            value={searchEmail}
            onChange={(event) => {
              onSearch(event.target.value, 'email');
              setSearchEmail(event.target.value);
            }}
            className="my-2"
          />
        </Col>
        <Col xs={6} md={2}>
          <div className="fw-bold">Membership</div>

          <div className="position-relative">
            <Form.Control
              as="select"
              value={searchMembershipLevel}
              onChange={(event) => {
                onSearch(event.target.value, 'membership');
                setSearchMembershipLevel(event.target.value);
              }}
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
        <Col xs={6} md={2}>
          <div className="d-flex align-items-center p-1">
            <button
              type="button"
              className="btn btn-danger fs-6 px-3 my-1 d-flex align-items-center"
              onClick={resetSearch}
            >
              <MdCancel className="me-2" />
              Reset
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminMemberSearch;

AdminMemberSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchId: PropTypes.string.isRequired,
  setSearchId: PropTypes.func.isRequired,
  searchFirstName: PropTypes.string.isRequired,
  setSearchFirstName: PropTypes.func.isRequired,
  searchLastName: PropTypes.string.isRequired,
  setSearchLastName: PropTypes.func.isRequired,
  searchEmail: PropTypes.string.isRequired,
  setSearchEmail: PropTypes.func.isRequired,
  searchMembershipLevel: PropTypes.string.isRequired,
  setSearchMembershipLevel: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};
