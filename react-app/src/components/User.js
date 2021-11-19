import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }
    const profileImg = user.photoURL;

  return (
    <ul>
      <li>
        <strong style={{ fontSize: "20" }}>User Id {userId}</strong>
      </li>
      <li>
        <strong style={{ fontSize: "20" }}>Username {user.username}</strong>
      </li>
      <li>
        <strong style={{ fontSize: "20" }}>Email {user.email}</strong>
      </li>
      <li>
        <img src={profileImg} alt="profile" style={{ height: "200px", object:"fit-cover", borderRadius:"20%"}} />
      </li>
    </ul>
  );
}
export default User;
