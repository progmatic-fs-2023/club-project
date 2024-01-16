import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Button, Form } from 'react-bootstrap';
import { formatDate } from '../utils/dateUtils';
import { API_URL } from '../constants';

function AdminFinance() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPayedFilter, setIsPayedFilter] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/admin`);
        const result = await response.json();
        setMembers(result);
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

  const modifiedHeaders = [
    'id',
    'first name',
    'last name',
    'username',
    'membership',
    ':start date',
    ':end date',
    'verified',
    'payed',
  ];

  const filteredMembers = isPayedFilter ? members.filter((member) => !member.isPayed) : members;

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

export default AdminFinance;
