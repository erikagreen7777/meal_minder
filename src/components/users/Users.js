import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState(null);

  function getUser() {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    console.log(users);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {users ? `Found users: ${JSON.stringify(users)}` : "Loading..."}
      <br />
      <button onClick={getUser}>Get All Users</button>
      {/* <br />
      <button onClick={deleteMerchant}>Delete merchant</button>
      <br />
      <button onClick={updateMerchant}>Update merchant</button> */}
    </div>
  );
};
