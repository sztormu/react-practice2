import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const INITIAL_USERS = [
  { id: 1, username: 'Max', age: 31 },
  { id: 2, username: 'Anne', age: 22 }
]

const App = () => {
  const [users, setUsers] = useState(INITIAL_USERS)

  const addingUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers]
    })
  }

  return (
    <div>
      <AddUser addingUser={addingUserHandler} />
      <UsersList data={users} />
    </div>
  );
}

export default App;
