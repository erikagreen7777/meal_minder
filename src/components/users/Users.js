import { useState, useCallback } from "react";

export const Users = () => {
  const [users, setUsers] = useState(null);

  function getUser() {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }

  const fetchUsers = useCallback(() => {
    getUser();
  }, []);

  return (
    <div>
      {users ? `Found users: ${JSON.stringify(users)}` : "Loading..."}
      <br />
      <button onClick={fetchUsers}>Get All Users</button>
      {/* <br />
      <button onClick={deleteMerchant}>Delete merchant</button>
      <br />
      <button onClick={updateMerchant}>Update merchant</button> */}
    </div>
  );
};
