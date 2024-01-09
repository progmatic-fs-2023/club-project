import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function AdminMember({ members }) {
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

      <div className="w-100 bg-white shadow-sm p-5 d-flex flex-column rounded">
        <div className="d-flex text-dark fs-3 mb-2 josefin-font fw-bold">{`${member.firstName} ${member.lastName}`}</div>

        <div className="d-flex flex-column flex-md-row">
          <img src={member.memberImg} alt="profile" className="rounded shadow-sm" />
          <div>
            <Tabs defaultActiveKey="personalInfo" variant="tabs" className="mb-3" fill>
              <Tab eventKey="personalInfo" title="PERSONAL INFO" className="">
                <div className="d-flex flex-column">
                  <div>First name: {member.firstName}</div>
                  <div>{member.lastName}</div>
                  <div> {member.email}</div>
                </div>
              </Tab>
              <Tab eventKey="membership" title="MEMBERSHIP DETAILS">
                <div className="d-flex flex-column">
                  <div> {member.membershipLevel} </div>
                  <div>{member.membershipStartTime}</div>
                  <div> {member.membershipEndTime}</div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminMember;

AdminMember.propTypes = {
  members: PropTypes.string.isRequired,
};
