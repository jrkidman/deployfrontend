import React from "react";

const HomePage = ({
  clientMessage,
  setClientMessage,
  serverMessage,
  sendReceiveMessage,
  userList,
  setUserList,
}) => {
  return (
    <div>
      <div>Client: {clientMessage}</div>
      <div>Server: {serverMessage}</div>
      {/* map function to iterate through userlist state variable, should return first name, last name, email of each user */}
      {userList.map((user) => {
        // sendReceiveMessage();
        return (
          <div className="users">
            <strong>{user.id}</strong>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
          </div>
        );
      })}

      <label>Input:</label>
      <input
        type="text"
        onChange={(event) => {
          const dateTime = new Date();
          const newClientMessage = `Message: ${
            event.target.value
          } at time ${dateTime.toString()}`;
          setClientMessage(newClientMessage);
        }}
      ></input>
      <br></br>
      <br></br>

      <button
        id="send"
        type="submit"
        onClick={(event) => {
          sendReceiveMessage();
        }}
      >
        Send
      </button>
    </div>
  );
};

export default HomePage;
