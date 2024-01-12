import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Button, Form } from 'react-bootstrap'; // Import Form from react-bootstrap
import { formatDate } from '../utils/dateUtils';
import { useMembersContext } from '../contexts/MembersContext';

function AdminFinance() {
  const { members } = useMembersContext();
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [isPayedFilter, setIsPayedFilter] = useState(false);

  const tableHeaders = Object.keys(members[0]);

  const modifiedHeaders = tableHeaders.map((header) => {
    if (header === 'membershipLevel') return 'level';
    if (header === 'membershipStartTime') return 'start date';
    if (header === 'membershipEndTime') return 'end date';
    if (header === 'isVerified') return 'verified';
    if (header === 'isPayed') return 'payed';
    return header;
  });

  useEffect(() => {
    const filtered = isPayedFilter ? members.filter((member) => !member.isPayed) : members;
    setFilteredMembers(filtered);
  }, [isPayedFilter, members]);

  const handleCheckPayment = () => {
    setIsPayedFilter(!isPayedFilter);
  };

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex flex-column  text-dark p-1">
        <h3 className="josefin-font fw-bold">CONFIRMATION OF PAYMENT</h3>
        <div className="my-4">
          <Button variant="primary" onClick={handleCheckPayment}>
            {isPayedFilter ? 'FULL LIST OF MEMBERS' : 'CHECK PAYMENT'}
          </Button>
        </div>
      </div>

      <div className="mt-3 w-100">
        <Table striped bordered hover responsive className="text-nowrap shadow-sm">
          <thead>
            <tr>
              {modifiedHeaders.map((header) => (
                <th
                  className="py-3 px-2 bg-dark text-white fw-normal fs-6 text-uppercase text-center"
                  key={`finance-key-${header}`}
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
              <tr key={`finance-key-${member.id}`}>
                {modifiedHeaders.map((header) => (
                  <td className="p-3 text-center" key={`finance-key-table-${header}`}>
                    {header === 'level' && (
                      <div>
                        <div>{member.membershipLevel}</div>
                      </div>
                    )}
                    {header === 'start date' && (
                      <div>
                        <div>
                          {member.membershipStartTime
                            ? formatDate(member.membershipStartTime)
                            : '-'}
                        </div>
                      </div>
                    )}
                    {header === 'end date' && (
                      <div>
                        <div>
                          {member.membershipEndTime ? formatDate(member.membershipEndTime) : '-'}
                        </div>
                      </div>
                    )}
                    {header === 'verified' && (
                      <Form.Check
                        type="checkbox"
                        checked={member.isVerified}
                        readOnly
                        className="outline-none "
                        key={`finance-verified-${member.id}`}
                      />
                    )}
                    {header !== 'level' &&
                      header !== 'start date' &&
                      header !== 'end date' &&
                      header !== 'isVerified' &&
                      header !== 'isPayed' &&
                      member[header]}
                    {header === 'payed' && (
                      <Form.Check
                        type="checkbox"
                        checked={member.isPayed}
                        readOnly
                        key={`finance-payed-${member.id}`}
                      />
                    )}
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

export default AdminFinance;
