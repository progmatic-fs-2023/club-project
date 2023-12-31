import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { formatDate, currentWeek } from '../utils/dateUtils';
import AdminMemberSearch from './AdminMemberSearch';
import AdminMemberNewsCard from './AdminMemberNewsCard';

function AdminMembers({ members }) {
  const [searchId, setSearchId] = useState('');
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchLastName, setSearchLastName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchAddress, setSearchAddress] = useState('');
  const [searchMembershipLevel, setSearchMembershipLevel] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(members);

  const tableHeaders = Object.keys(members[0]);

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

  const modifiedHeaders = tableHeaders.map((header) => {
    if (header === 'membershipLevel') return 'level';
    if (header === 'membershipStartTime') return 'start date';
    if (header === 'membershipEndTime') return 'end date';
    return header;
  });

  useEffect(() => {
    if (
      searchId.length >= 2 ||
      searchFirstName.length >= 2 ||
      searchLastName.length >= 2 ||
      searchEmail.length >= 2 ||
      searchAddress.length >= 2 ||
      searchMembershipLevel.length >= 2
    ) {
      setFilteredMembers(
        members.filter(
          (member) =>
            member.id.includes(searchId) &&
            member.firstName.toLowerCase().includes(searchFirstName.toLowerCase()) &&
            member.lastName.toLowerCase().includes(searchLastName.toLowerCase()) &&
            member.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
            member.address.toLowerCase().includes(searchAddress.toLowerCase()) &&
            member.membershipLevel.toLowerCase().includes(searchMembershipLevel.toLowerCase()),
        ),
      );
    } else {
      setFilteredMembers(members);
    }
  }, [
    searchId,
    searchFirstName,
    searchLastName,
    searchEmail,
    searchAddress,
    searchMembershipLevel,
    members,
  ]);

  const resetSearch = () => {
    setSearchId('');
    setSearchFirstName('');
    setSearchLastName('');
    setSearchEmail('');
    setSearchAddress('');
    setSearchMembershipLevel('');
  };

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex justify-content-between text-dark p-1">
        <h3 className="josefin-font fw-bold">MEMBERS</h3>
      </div>

      <div className="row gx-3 gy-4">
        <div className="col-md">
          <AdminMemberNewsCard title="NEW MEMBERS OF TODAY" count={newMembersTodayCount} />
        </div>
        <div className="col-md">
          <AdminMemberNewsCard title="NEW MEMBERS THIS WEEK" count={newMembersThisWeekCount} />
        </div>
        <div className="col-md">
          <AdminMemberNewsCard title="ALL MEMBERS" count={members.length} />
        </div>
      </div>

      <AdminMemberSearch
        searchId={searchId}
        setSearchId={setSearchId}
        searchFirstName={searchFirstName}
        setSearchFirstName={setSearchFirstName}
        searchLastName={searchLastName}
        setSearchLastName={setSearchLastName}
        searchEmail={searchEmail}
        setSearchEmail={setSearchEmail}
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        searchMembershipLevel={searchMembershipLevel}
        setSearchMembershipLevel={setSearchMembershipLevel}
        resetSearch={resetSearch}
      />

      <div className="charts mt-3">
        <Table striped bordered hover className="text-nowrap shadow-sm">
          <thead>
            <tr>
              {modifiedHeaders.map((header) => (
                <th
                  className="py-3 px-2 bg-dark text-white fw-normal fs-6 text-uppercase text-center"
                  key={`key-${header}`}
                >
                  {header}
                </th>
              ))}
              <th className="py-3 px-2 bg-dark text-white fw-normal fs-6 text-uppercase text-center">
                {' '}
                \
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={`key-${member}`}>
                {modifiedHeaders.map((header) => (
                  <td className="p-3" key={`key-table-${header}`}>
                    {header === 'level' && (
                      <div>
                        <div>{member.membershipLevel}</div>
                      </div>
                    )}
                    {header === 'start date' && (
                      <div>
                        <div>{formatDate(member.membershipStartTime)}</div>
                      </div>
                    )}
                    {header === 'end date' && (
                      <div>
                        <div>{formatDate(member.membershipEndTime)}</div>
                      </div>
                    )}
                    {header !== 'level' &&
                      header !== 'start date' &&
                      header !== 'end date' &&
                      member[header]}
                  </td>
                ))}
                <td className="p-3 text-center">
                  <NavLink to={`/admin/members/${member.id}`}>
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

AdminMembers.propTypes = {
  members: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};

export default AdminMembers;
