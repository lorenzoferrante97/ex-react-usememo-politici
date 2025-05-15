// Context per le logiche del content del app

import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

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

  const settingUsers = (users) => setUsers(users.users);

  const value = { getUsers, setUsers, settingUsers, users };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
