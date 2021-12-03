import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import { getUserListing } from '../store/listings'
import './users.css';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  // const dispatch = useDispatch();
  // const userListings = useSelector((state) => state.listings[userId]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
    // dispatch(getUserListing(userId));
  }, [userId]);

  if (!user) {
    return null;
  }
    const profileImg = user.photoURL;
  // console.log(userListings)
  return (
    <div className="users-list-container" 
  //   style={{display: "flex", height: "100%", width: "100%", marginTop: "200px", alignItems: "center",
  // justifyContent: "center"}}>
  >
      <div className="users-list">
        <ul>
          {/* <li>
            <strong style={{ fontSize: "20" }}>User Id {userId}</strong>
          </li> */}
          <li>
            <strong style={{ fontSize: "40" }}>Username {user.username}</strong>
          </li>
          <li>
            <strong style={{ fontSize: "40" }}>Email {user.email}</strong>
          </li>
          <li>
            <img src={profileImg} alt="profile" style={{ height: "200px", object:"fit-cover", borderRadius:"20%"}} />
          </li>
        </ul>

      </div>
    </div>
  );
}
export default User;
