import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { IoIosSave } from 'react-icons/io';
import { MdCancel, MdDeleteForever } from 'react-icons/md';
import { formatDateLong } from '../utils/dateUtils';
import { API_URL } from '../constants';

function AdminMember() {
  const { memberId } = useParams();
  const [member, setMember] = useState([]);
  const [modifiedMember, setModifiedMember] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMemberById = async () => {
      try {
        const response = await fetch(`${API_URL}/api/admin/${memberId}`);
        const result = await response.json();
        setMember(result);
        setModifiedMember(result);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchMemberById();
  }, []);

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`${API_URL}/api/admin/${memberId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ modifiedMember }),
      });

      const result = await response.json();
      setMember(result);
      setIsEditing(false);
    } catch (error) {
      // console.error('Error fetching data:', error);
    }
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API_URL}/api/admin/${memberId}`, {
        method: 'DELETE MEMBER',
      });

      if (response.ok) {
        navigate('/admin/members');
      } else {
        // console.error('Failed to delete member!');
      }
    } catch (error) {
      // console.error('Error deleting member:', error);
    } finally {
      setShowDeleteModal(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleResetClick = () => {
    setModifiedMember(member);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'datetime-local') {
      const formattedDate = new Date(value).toISOString().slice(0, -8);
      setModifiedMember((prevModifiedMember) => ({
        ...prevModifiedMember,
        [name]: formattedDate,
      }));
    } else {
      setModifiedMember((prevModifiedMember) => ({
        ...prevModifiedMember,
        [name]: type === 'checkbox' ? !prevModifiedMember[name] : value,
      }));
    }
  };

  const handleDeleteImage = () => {
    setModifiedMember((prevModifiedMember) => ({
      ...prevModifiedMember,
      memberImg: '/src/assets/male.png',
    }));
  };

  return (
    <main className="main-container p-5 text-dark">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin/members" className="text-dark">
              Users
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {`${member.firstName} ${member.lastName}`}
          </li>
        </ol>
      </nav>
      <Row>
        <div className="row">
          <Col xs={12} md={12} className="text-dark fs-3 mb-2 josefin-font fw-bold">
            {`${member.firstName} ${member.lastName}`}
          </Col>
          <div className="d-flex flex-row justify-content-between align-items-start">
            <div className="d-flex align-items-center">
              <img
                src={modifiedMember.memberImg}
                alt="profile"
                className="rounded shadow-sm p-2"
                style={{ maxWidth: '200px', maxHeight: '200px' }}
              />
              {isEditing && (
                <div className="m-2">
                  <button type="button" className="btn btn-danger" onClick={handleDeleteImage}>
                    DELETE PHOTO
                  </button>
                </div>
              )}
            </div>

            <div className="d-flex flex-column flex-md-row  align-items-xs-center">
              <div className="d-flex align-items-end p-2">
                <button
                  type="button"
                  className="btn btn-danger fs-6 px-3 d-flex align-items-center "
                  onClick={handleDeleteClick}
                >
                  <MdDeleteForever className="me-2" />
                  DELETE USER
                </button>
              </div>
              <div className="d-flex align-items-center p-2">
                <Button className="fs-6 px-3  d-flex align-items-center" onClick={handleResetClick}>
                  <MdCancel className="me-2" />
                  CANCEL
                </Button>
              </div>
              <div className="d-flex align-items-center p-2">
                <Button className="fs-6 px-3  d-flex align-items-center" onClick={handleEditClick}>
                  <FaEdit className="me-2" />
                  EDIT
                </Button>
              </div>
              <div className="d-flex align-items-center p-2">
                <Button className="fs-6 px-3  d-flex align-items-center" onClick={handleSaveClick}>
                  <IoIosSave className="me-2" />
                  SAVE
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Col xs={12} md={5} lg={4} xl={4} className="m-2">
            <div className="fw-bold">FIRST NAME</div>
            {isEditing ? (
              <Form.Control
                type="text"
                name="firstName"
                className="bg-white border-info"
                value={modifiedMember.firstName}
                onChange={handleInputChange}
              />
            ) : (
              <div className="bg-white shadow-sm p-1 mb-2"> {modifiedMember.firstName}</div>
            )}

            <div className="fw-bold">LAST NAME</div>
            {isEditing ? (
              <Form.Control
                type="text"
                name="lastName"
                className="bg-white border-info"
                value={modifiedMember.lastName}
                onChange={handleInputChange}
              />
            ) : (
              <div className="bg-white shadow-sm p-1 mb-2"> {modifiedMember.lastName}</div>
            )}

            <div className="fw-bold">USERNAME</div>
            {isEditing ? (
              <Form.Control
                type="text"
                name="username"
                className="bg-white border-info"
                value={modifiedMember.username}
                onChange={handleInputChange}
              />
            ) : (
              <div className="bg-white shadow-sm p-1 mb-2"> {modifiedMember.username}</div>
            )}

            <div className="fw-bold">EMAIL</div>
            {isEditing ? (
              <Form.Control
                type="email"
                name="email"
                className="bg-white border-info"
                value={modifiedMember.email}
                onChange={handleInputChange}
              />
            ) : (
              <div className="bg-white shadow-sm p-1"> {modifiedMember.email}</div>
            )}
          </Col>
          <Col className="d-flex justify-content-center d-none d-md-flex p-0">
            <div className="vr" />
          </Col>
          <Col className="d-flex justify-content-center d-flex d-md-none p-0">
            <div className="w-100 p-2 mx-4 d-flex align-items-center d-flex d-md-none p-0 border-1 border-bottom" />
          </Col>
          <Col xs={12} md={3} lg={3} xl={3} className="m-2">
            <div className="fw-bold">MEMBERSHIP LEVEL</div>
            {isEditing ? (
              <Form>
                <div className="d-flex flex-column">
                  <Form.Check
                    inline
                    label="gold"
                    type="radio"
                    id="gold"
                    name="membership"
                    checked={modifiedMember.membership === 'gold'}
                    onChange={() =>
                      handleInputChange({ target: { name: 'membership', value: 'gold' } })
                    }
                  />
                  <Form.Check
                    inline
                    label="silver"
                    type="radio"
                    id="silver"
                    name="membership"
                    checked={modifiedMember.membership === 'silver'}
                    onChange={() =>
                      handleInputChange({ target: { name: 'membership', value: 'silver' } })
                    }
                  />
                  <Form.Check
                    inline
                    label="platinum"
                    type="radio"
                    id="platinum"
                    name="membership"
                    checked={modifiedMember.membership === 'platinum'}
                    onChange={() =>
                      handleInputChange({ target: { name: 'membership', value: 'platinum' } })
                    }
                  />
                </div>
              </Form>
            ) : (
              <div className="bg-white shadow-sm p-1 mb-2"> {modifiedMember.membership}</div>
            )}
            <div className="fw-bold">START DATE</div>
            {isEditing ? (
              <div>
                <div className="original-date">
                  <span style={{ fontSize: '12px' }}>original:</span>{' '}
                  {formatDateLong(modifiedMember.membershipStartTime)}
                </div>
                <Form.Control
                  type="datetime-local"
                  name="membershipStartTime"
                  className="bg-white border-info"
                  value={modifiedMember.membershipStartTime}
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <div className="bg-white shadow-sm p-1 mb-2">
                {formatDateLong(modifiedMember.membershipStartTime)}
              </div>
            )}

            <div className="fw-bold">END DATE</div>
            {isEditing ? (
              <div>
                <div className="original-date">
                  <span style={{ fontSize: '12px' }}>original:</span>{' '}
                  {formatDateLong(modifiedMember.membershipEndTime)}
                </div>
                <Form.Control
                  type="datetime-local"
                  name="membershipEndTime"
                  className="bg-white border-info"
                  value={modifiedMember.membershipEndTime}
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <div className="bg-white shadow-sm p-1 mb-2">
                {' '}
                {formatDateLong(modifiedMember.membershipEndTime)}
              </div>
            )}
          </Col>
          <Col col={1} className="d-flex justify-content-center d-none d-md-flex p-0">
            <div className="vr" />
          </Col>
          <Col col={1} className="d-flex justify-content-center d-flex d-md-none p-0">
            <div className="w-100 p-2 mx-4 d-flex align-items-center d-flex d-md-none p-0 border-1 border-bottom" />
          </Col>
          <Col xs={12} md={3} lg={2} xl={3} className="m-2">
            <div
              className={`${
                isEditing ? 'border border-info px-2 rounded bg-white' : ''
              } d-flex flex-row flex-md-column`}
            >
              <div className="fw-bold">PAYMENT SUCCESSFUL</div>
              {isEditing ? (
                <div className="d-flex pe-4 ps-1 pb-md-3">
                  <input
                    type="checkbox"
                    name="isPayed"
                    checked={modifiedMember.isPayed}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                <div className="pe-4 ps-1 pb-md-3">
                  <input type="checkbox" checked={modifiedMember.isPayed} readOnly />
                </div>
              )}
              <div className="fw-bold">VERIFIED VIA EMAIL</div>
              {isEditing ? (
                <div className="pe-4 ps-1 pb-md-3">
                  <input
                    type="checkbox"
                    name="isVerified"
                    checked={modifiedMember.isVerified}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                <div className="pe-4 ps-1 pb-md-3">
                  <input type="checkbox" checked={modifiedMember.isVerified} readOnly />
                </div>
              )}

              <div className="fw-bold">ADMIN ROLE</div>
              {isEditing ? (
                <div className="pe-4 ps-1 pb-md-3">
                  <input
                    type="checkbox"
                    name="isAdmin"
                    checked={modifiedMember.isAdmin}
                    onChange={handleInputChange}
                    readOnly={false}
                  />
                </div>
              ) : (
                <div className="pe-4 ps-1 pb-md-3">
                  <input type="checkbox" checked={modifiedMember.isAdmin} readOnly />
                </div>
              )}
            </div>
          </Col>
        </div>
      </Row>
      <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>CONFIRM DELETE</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this member?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

export default AdminMember;
