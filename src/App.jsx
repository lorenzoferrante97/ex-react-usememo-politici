// start code
import { useEffect } from 'react';
import { useGlobalContext } from './context/GlobalContext';
import Card from './components/Card';

function App() {
  const { getUsers, users, settingUsers } = useGlobalContext();

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

  return (
    <>
      <main>
        <h1>Lista Utenti</h1>
        <div className="input-box">
          <h2>Ricerca Utente</h2>
          <input type="text" placeholder="Franco" />
        </div>
        <div>
          <ul>
            {console.log(users)}
            {users.map((user) => {
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
