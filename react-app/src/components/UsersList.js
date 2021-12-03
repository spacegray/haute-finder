import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./users.css";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);


  const userComponents = users.map((user) => {
    return (
      <li key={user.id} >
        <NavLink to={`/users/${user.id}`}>{user.username }  </NavLink>
      </li>
    );
  });

  return (
    <>
    <div className="users-list-page">

      <h1>User List: </h1>
     <div className="User-List" >
      <ul style={{fontSize:"30px"}}>{userComponents}</ul>
       </div> 
    </div>
    </>
  );
}

export default UsersList;
