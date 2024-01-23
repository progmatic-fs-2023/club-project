import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import FileUpload from './FileUpload';
import ProfileCalendar from './ProfileCalendar';

// const members = [
//   {
//     id: 1,
//     name: 'John Doe',
//     username: 'john.doe',
//     email: 'john@example.com',
//     gender: 'Male',
//     address: '132 My Street, Kingston, New York 12401',
//     membership: 'Gold',
//     membershipExpires: '2024-12-31',
//   },
// ];

export default function ProfileCard() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    // A felhasználó nincs bejelentkezve
    return <div>User not found or not logged in</div>;
  }

  return (
    <Container className="py-5 mt-5">
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="col col-lg-9 col-xl-7">
          <div className="card">
            <div className="rounded-top text-white d-flex flex-row bg-dark profile-card-up">
              <div className="ms-4 mt-5 d-flex flex-column">
                <img
                  src={user.member_img}
                  alt="Generic placeholder"
                  className="profile-card-img img-fluid img-thumbnail mt-4 mb-2"
                />
              </div>
              <div className="profile-name ms-3">
                <h5>{user.name}</h5>
              </div>
            </div>
            <div className="p-4 text-black bg-light">
              <div className="d-flex justify-content-between align-items-center text-center pt-5">
                <FileUpload />
                <Link to="/aboutus">
                  <button type="submit" className="btn btn-primary profile-membership-btn">
                    Change Membership
                  </button>
                </Link>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="mb-5">
                <h4 className="mb-4 text-center">Information</h4>
                <div className="bg-light p-4">
                  <p className="mb-1">Name: {user.name}</p>
                  <p className="mb-1">Username: {user.username}</p>
                  <p className="mb-1">Email: {user.email}</p>
                  <p className="mb-1">Address: {user.address}</p>
                  <p className="mb-0">Gender: {user.gender}</p>
                  <hr />
                  <p className="mb-1">Membership: {user.membership}</p>
                  <p className="mb-1">Membership expires: {user.membershipExpires}</p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <h4 className="my-4 text-center">Calendar</h4>
                  <ProfileCalendar />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
