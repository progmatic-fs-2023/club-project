import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { formatDateLong } from '../utils/dateUtils';
import { useMembersContext } from '../contexts/MembersContext';

function AdminMember() {
  const { members } = useMembersContext();

  const { memberId } = useParams();

  const member = members.find((item) => item.id === memberId);
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
        <Col
          xs={12}
          md={12}
          className="text-dark fs-3 mb-2 josefin-font fw-bold"
        >{`${member.firstName} ${member.lastName}`}</Col>

        <Col xs={4} md={2} lg={2} xxl={1} className="m-2">
          <img src={member.memberImg} alt="profile" className="rounded shadow-sm img-fluid w-100" />
        </Col>
        <Col xs={12} md={5} lg={4} className="m-2">
          <div className="fw-bold">FIRST NAME</div>
          <div className="bg-white shadow-sm p-1 mb-2"> {member.firstName}</div>
          <div className="fw-bold">LAST NAME</div>
          <div className="bg-white shadow-sm p-1 mb-2"> {member.lastName}</div>
          <div className="fw-bold">EMAIL</div>
          <div className="bg-white shadow-sm p-1"> {member.email}</div>
        </Col>
        <Col col={1} className="d-flex justify-content-center d-none d-md-flex p-0">
          <div className="vr" />
        </Col>
        <Col col={1} className="d-flex justify-content-center d-flex d-md-none p-0">
          <div className="w-100 p-2 mx-4 d-flex align-items-center d-flex d-md-none p-0 border-1 border-bottom" />
        </Col>
        <Col xs={12} md={4} lg={4} className="m-2">
          <div className="fw-bold">MEMBERSHIP LEVEL</div>
          <div className="bg-white shadow-sm p-1 mb-2"> {member.membershipLevel}</div>
          <div className="fw-bold">START DATE</div>
          <div className="bg-white shadow-sm p-1 mb-2">
            {' '}
            {formatDateLong(member.membershipStartTime)}
          </div>
          <div className="fw-bold">END DATE</div>
          <div className="bg-white shadow-sm p-1"> {formatDateLong(member.membershipEndTime)}</div>
        </Col>
      </Row>
    </main>
  );
}

export default AdminMember;
