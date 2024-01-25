import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Button, Form } from 'react-bootstrap';
import { formatDate, currentWeek } from '../utils/dateUtils';
import AdminMemberSearch from './AdminMemberSearch';
import AdminMemberNewsCard from './AdminMemberNewsCard';
import { API_URL } from '../constants';

function AdminMembers() {
  const [members, setMembers] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchLastName, setSearchLastName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchMembershipLevel, setSearchMembershipLevel] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/admin`);
        const result = await response.json();
        setMembers(result);
        setFilteredMembers(result);
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100 w-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const onSearch = (searchText, fieldName) => {
    const filteredList = members.filter((member) => {
      const fieldToSearch = String(member[fieldName]).toLowerCase();
      return fieldToSearch.includes(searchText.toLowerCase());
    });

    setFilteredMembers(filteredList);
  };

  const newMembersThisWeekCount = members.reduce((count, member) => {
    const membershipStartDate = new Date(member.membershipStartTime);
    if (
      membershipStartDate >= currentWeek().firstDayOfWeek &&
      membershipStartDate <= currentWeek().lastDayOfWeek
    ) {
      return count + 1;
    }
    return count;
  }, 0);

  const today = new Date();

  const newMembersTodayCount = members.reduce((count, member) => {
    const membershipStartDate = new Date(member.membershipStartTime);
    const isToday = membershipStartDate.toDateString() === today.toDateString();
    return count + (isToday ? 1 : 0);
  }, 0);

  const modifiedHeaders = [
    'id',
    'first name',
    'last name',
    'username',
    'email',
    'phone',
    'membership',
    'newsletter',
    'verified',
    'payed',
  ];

  const resetSearch = () => {
    setSearchId('');
    setSearchFirstName('');
    setSearchLastName('');
    setSearchEmail('');
    setSearchMembershipLevel('');
    setFilteredMembers(members);
  };

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex justify-content-between text-dark p-1">
        <h3 className="josefin-font fw-bold">USERS</h3>
      </div>

      <div className="row gx-3 gy-4">
        <div className="col-md">
          <AdminMemberNewsCard title="NEW USERS OF TODAY" count={newMembersTodayCount} />
        </div>
        <div className="col-md">
          <AdminMemberNewsCard title="NEW USERS THIS WEEK" count={newMembersThisWeekCount} />
        </div>
        <div className="col-md">
          <AdminMemberNewsCard title="ALL USERS" count={members.length} />
        </div>
      </div>

      <AdminMemberSearch
        onSearch={onSearch}
        searchId={searchId}
        setSearchId={setSearchId}
        searchFirstName={searchFirstName}
        setSearchFirstName={setSearchFirstName}
        searchLastName={searchLastName}
        setSearchLastName={setSearchLastName}
        searchEmail={searchEmail}
        setSearchEmail={setSearchEmail}
        searchMembershipLevel={searchMembershipLevel}
        setSearchMembershipLevel={setSearchMembershipLevel}
        resetSearch={resetSearch}
      />

      <div className="mt-3 w-100">
        <Table striped bordered hover responsive className=" text-nowrap shadow-sm">
          <thead className="table-dark">
            <tr>
              {modifiedHeaders.map((header) => (
                <th
                  className="py-3 px-2 text-white fw-normal fs-6 text-uppercase text-center"
                  key={`members-key-${header}`}
                >
                  {header}
                </th>
              ))}
              <th className="py-2 px-2 bg-dark text-dark fw-normal fs-6 text-uppercase text-center">
                \
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={`members-key-${member.id}`}>
                {modifiedHeaders.map((header) => (
                  <td className="p-3 text-center" key={`members-key-table-${header}`}>
                    {header === 'first name' && (
                      <div>
                        <div>{member.firstName}</div>
                      </div>
                    )}
                    {header === 'last name' && (
                      <div>
                        <div>{member.lastName}</div>
                      </div>
                    )}
                    {header === 'level' && (
                      <div>
                        <div>{member.membershipLevel}</div>
                      </div>
                    )}
                    {header === ':start date' && (
                      <div>
                        <div>
                          {member.membershipStartTime
                            ? formatDate(member.membershipStartTime)
                            : '-'}
                        </div>
                      </div>
                    )}
                    {header === ':end date' && (
                      <div>
                        <div>
                          {member.membershipEndTime ? formatDate(member.membershipEndTime) : '-'}
                        </div>
                      </div>
                    )}
                    {header === 'payed' && (
                      <Form.Check
                        type="checkbox"
                        checked={member.isPayed}
                        readOnly
                        key={`members-payed-${member.id}`}
                      />
                    )}
                    {header === 'verified' && (
                      <Form.Check
                        type="checkbox"
                        checked={member.isVerified}
                        readOnly
                        key={`members-verified-${member.id}`}
                      />
                    )}
                    {header === 'newsletter' && (
                      <Form.Check
                        type="checkbox"
                        checked={member.newsletter}
                        readOnly
                        key={`members-newsletter-${member.id}`}
                      />
                    )}
                    {header === 'admin' && (
                      <Form.Check
                        type="checkbox"
                        checked={member.isAdmin}
                        readOnly
                        key={`members-admin-${member.id}`}
                      />
                    )}
                    {header !== 'level' &&
                      header !== 'start date' &&
                      header !== 'end date' &&
                      header !== 'verified' &&
                      header !== 'payed' &&
                      header !== 'newsletter' &&
                      header !== 'admin' &&
                      member[header]}
                  </td>
                ))}
                <td className="p-3 text-center">
                  <NavLink
                    to={`/admin/members/${member.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary">Details</Button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </main>
  );
}

export default AdminMembers;
