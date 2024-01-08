import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function AdminMember({ members }) {
  const { memberId } = useParams();

  const member = members.find((item) => item.id === memberId);

  return (
    <main className="main-container p-5 text-dark">
      <div className="w-100 bg-secondary bg-opacity-25 p-5 d-flex flex-column align-items-center">
        <h4>{member.firstName}</h4>
        <h4>{member.lastName}</h4>

        <div className="px-3">
          <Tabs defaultActiveKey="membership" className="mb-3">
            <Tab eventKey="personalInfo" title="Personal info">
              {member.firstName}
              {member.lastName}
              {member.email}
            </Tab>
            <Tab eventKey="moreDetails" title="Membership details">
              {member.membershipLevel}
              {member.membershipStartTime}
              {member.membershipEndTime}
            </Tab>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

export default AdminMember;

AdminMember.propTypes = {
  members: PropTypes.string.isRequired,
};
