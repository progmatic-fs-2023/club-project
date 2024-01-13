/* import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

const MembersContext = createContext();

function MembersProvider({ children }) {
  const [members, setMembers] = useState([
  ]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/admin/');
        const result = await response.json();
        console.log(result)
        setMembers(result);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
    };

    fetchMembers();
  }, []); 

  const memoizedMembers = useMemo(() => members, [members]);

  return (
    <MembersContext.Provider
      value={useMemo(() => ({ members: memoizedMembers }), [memoizedMembers])}
    >
      {children}
    </MembersContext.Provider>
  );
}

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

export { MembersProvider, useMembersContext }; */
