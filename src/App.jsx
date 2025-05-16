// start code
import { useEffect, useMemo } from 'react';
import { useGlobalContext } from './context/GlobalContext';
import Card from './components/Card';

function App() {
  const { getUsers, users, settingUsers, getSearchInput, handleSearch, filterUsers } = useGlobalContext();

  useEffect(() => {
    (async () => {
      try {
        const usersRes = await getUsers();
        settingUsers(usersRes);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const memoUsers = useMemo(() => filterUsers(handleSearch, users), [users, handleSearch]);

  return (
    <>
      <main>
        <h1>Lista Utenti</h1>
        <div className="input-box">
          <h2>Ricerca Utente</h2>
          <p>Cerca per nome o università</p>
          <input
            value={handleSearch}
            onChange={(e) => {
              getSearchInput(e);
            }}
            name="search"
            type="text"
            placeholder="Franco"
          />
        </div>
        <div>
          <ul>
            {memoUsers.map((user) => {
              return (
                <li key={user.id}>
                  <Card user={user} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
