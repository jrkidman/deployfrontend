import React, { useState } from "react";

const PostUser = ({ postUserData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      PostUser
      <div>
        <input
          type="text"
          onChange={(event) => {
            const newFirstName = event.target.value;
            setFirstName(newFirstName);
          }}
        />
        <input
          type="text"
          onChange={(event) => {
            const newLastName = event.target.value;
            setLastName(newLastName);
          }}
        />
        <input
          type="text"
          onChange={(event) => {
            const newEmail = event.target.value;
            setEmail(newEmail);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            postUserData({
              firstName,
              lastName,
              email,
            });
          }}
        />
      </div>
    </div>
  );
};

export default PostUser;
