// Context per le logiche del content del app

import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [handleSearch, setHandleSearch] = useState('');

  // fetch users
  const getUsers = async () => {
    try {
      const fetchUsers = await fetch('https://dummyjson.com/users?limit=6');
      const usersJson = await fetchUsers.json();
      return usersJson;
    } catch (err) {
      throw new Error('Failed to get Users with fetch');
    }
  };

  // setting users
  const settingUsers = (users) => {
    setUsers(users.users);
  };

  // handle search
  const getSearchInput = (e) => setHandleSearch(e.target.value);

  // filter users
  const filterUsers = (handleSearch, users) => {
    if (handleSearch == '' || handleSearch.length == 0) {
      return users;
    } else {
      const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(handleSearch) || user.university.toLowerCase().includes(handleSearch));

      return filteredUsers;
    }
  };

  const value = { getUsers, setUsers, settingUsers, getSearchInput, filterUsers, users, handleSearch };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
