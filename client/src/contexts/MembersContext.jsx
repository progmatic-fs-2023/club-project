import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const MembersContext = createContext();

function MembersProvider({ children }) {
  const [members] = useState([
    {
      id: '001',
      firstName: 'Buzz',
      lastName: 'Lightyear',
      memberImg: 'https://placekitten.com/200',
      email: 'buzz@buzz.com',
      address: "Andy's room",
      membershipLevel: 'gold',
      membershipStartTime: '2023-11-11 17:30:0.000',
      membershipEndTime: '2023-12-11 17:30:0.000',
      isVerified: true,
      isPayed: true,
    },
    {
      id: '002',
      firstName: 'Mike',
      lastName: 'Wazowski',
      memberImg: 'https://placekitten.com/200',
      email: 'mike@monster.com',
      address: 'Monster inc',
      membershipLevel: 'platinum',
      membershipStartTime: '2024-01-08 00:31:42.000',
      membershipEndTime: '2024-02-08 00:31:42.000',
      isVerified: true,
      isPayed: true,
    },
    {
      id: '003',
      firstName: 'Sally',
      lastName: 'Carrera',
      memberImg: 'https://placekitten.com/200',
      email: 'sally@porsche.com',
      address: 'Garage',
      membershipLevel: 'silver',
      membershipStartTime: '2024-01-01 02:02:0.000',
      membershipEndTime: '2024-02-01 02:02:0.000',
      isVerified: true,
      isPayed: true,
    },
    {
      id: '004',
      firstName: 'Carl',
      lastName: 'Fredricksen',
      memberImg: 'https://placekitten.com/200',
      email: 'up@papa.com',
      address: 'Paradise Falls',
      membershipLevel: 'platinum',
      membershipStartTime: '',
      membershipEndTime: '',
      isVerified: true,
      isPayed: false,
    },
  ]);

  /* useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/members');
        const result = await response.json();
  
        setMembers(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchMembers();
  }, [members]); */

  const memoizedMembers = useMemo(() => members, [members]);

  return <MembersContext.Provider value={useMemo(() => ({ members: memoizedMembers }), [memoizedMembers])}>{children}</MembersContext.Provider>;}

const useMembersContext = () => {
  const context = useContext(MembersContext);
  if (!context) {
    throw new Error('useMembersContext must be used within an MembersProvider');
  }
  return context;
};

MembersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MembersProvider, useMembersContext };
