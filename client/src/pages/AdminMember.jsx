import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { IoIosSave } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { formatDateLong } from '../utils/dateUtils';
import { API_URL } from '../constants';

function AdminMember() {
  const { memberId } = useParams();
  const [member, setMember] = useState([]);

  useEffect(() => {
    const fetchMemberById = async () => {
      try {
        const response = await fetch(`${API_URL}/api/admin/${memberId}`);
        const result = await response.json();
        setMember(result);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchMemberById();
  }, []);

  return (
    <main className="main-container p-5 text-dark">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin/members" className="text-dark">
              Members
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
            <div className="d-flex ">
              <img src={member.memberImg} alt="profile" className="rounded shadow-sm" />
            </div>
            <div className="d-flex flex-column flex-md-row align-items-end align-items-xs-center">
              <div className="d-flex align-items-center p-2">
                <Button className="fs-6 px-3">
                  <MdCancel className="me-2" />
                  RESET
                </Button>
              </div>
              <div className="d-flex align-items-center p-2">
                <Button className="fs-6 px-3">
                  <FaEdit className="me-2" />
                  EDIT
                </Button>
              </div>
              <div className="d-flex align-items-center p-2">
                <Button className="fs-6 px-3">
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
            <div className="bg-white shadow-sm p-1 mb-2"> {member.firstName}</div>
            <div className="fw-bold">LAST NAME</div>
            <div className="bg-white shadow-sm p-1 mb-2"> {member.lastName}</div>
            <div className="fw-bold">USERNAME</div>
            <div className="bg-white shadow-sm p-1 mb-2"> {member.username}</div>
            <div className="fw-bold">EMAIL</div>
            <div className="bg-white shadow-sm p-1"> {member.email}</div>
          </Col>
          <Col className="d-flex justify-content-center d-none d-md-flex p-0">
            <div className="vr" />
          </Col>
          <Col className="d-flex justify-content-center d-flex d-md-none p-0">
            <div className="w-100 p-2 mx-4 d-flex align-items-center d-flex d-md-none p-0 border-1 border-bottom" />
          </Col>
          <Col xs={12} md={3} lg={3} xl={3} className="m-2">
            <div className="fw-bold">MEMBERSHIP LEVEL</div>
            <div className="bg-white shadow-sm p-1 mb-2"> {member.membership}</div>
            <div className="fw-bold">START DATE</div>
            <div className="bg-white shadow-sm p-1 mb-2">
              {' '}
              {formatDateLong(member.membershipStartTime)}
            </div>
            <div className="fw-bold">END DATE</div>
            <div className="bg-white shadow-sm p-1">
              {' '}
              {formatDateLong(member.membershipEndTime)}
            </div>
          </Col>
          <Col col={1} className="d-flex justify-content-center d-none d-md-flex p-0">
            <div className="vr" />
          </Col>
          <Col col={1} className="d-flex justify-content-center d-flex d-md-none p-0">
            <div className="w-100 p-2 mx-4 d-flex align-items-center d-flex d-md-none p-0 border-1 border-bottom" />
          </Col>
          <Col xs={12} md={3} lg={2} xl={3} className="m-2">
            <div className="d-flex flex-row flex-md-column">
              <div className="fw-bold">PAYMENT SUCCESSFUL</div>
              <div className="pe-4 ps-1 pb-md-3">
                <input type="checkbox" checked={member.isPayed} readOnly />
              </div>
              <div className="fw-bold">VERIFIED VIA EMAIL</div>
              <div className="pe-4 ps-1 pb-md-3">
                <input type="checkbox" checked={member.isVerified} readOnly />
              </div>
              <div className="fw-bold">ADMIN ROLE</div>
              <div className="pe-4 ps-1 pb-md-3">
                <input type="checkbox" checked={member.isAdmin} readOnly />
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </main>
  );
}

export default AdminMember;
