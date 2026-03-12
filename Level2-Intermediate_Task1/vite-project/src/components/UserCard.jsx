import React from "react";

function UserCard({ user }) {
  return (
    <div style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
    </div>
  );
}

export default UserCard;