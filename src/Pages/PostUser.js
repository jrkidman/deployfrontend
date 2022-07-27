import React, { useState } from "react";

const PostUser = ({ postUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      PostUser
      <div>
        <br />
        <label>First Name:</label>
        <input
          type="text"
          onChange={(event) => {
            const newFirstName = event.target.value;
            setFirstName(newFirstName);
          }}
        />
        <br />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(event) => {
            const newLastName = event.target.value;
            setLastName(newLastName);
          }}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            const newEmail = event.target.value;
            setEmail(newEmail);
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={() => {
            postUserData({
              firstName: firstName,
              lastName: lastName,
              email: email,
            });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostUser;
