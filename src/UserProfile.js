import React from "react";

const UserProfile = ({ name, email }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
};

export default UserProfile;
