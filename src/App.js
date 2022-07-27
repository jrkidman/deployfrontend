import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import HomePage from "./Pages/HomePage";

import PostUser from "./Pages/PostUser";
import { useEffect } from "react";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {
  const [clientMessage, setClientMessage] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [userList, setUserList] = useState([]);

  const sendReceiveMessage = async () => {
    const response = await fetch(`${urlEndpoint}/post-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientMessage }),
    });
    const responseJSON = await response.json();
    setServerMessage(responseJSON.serverMessage);
  };

  const postUserData = async (userData) => {
    const response = await fetch(`${urlEndpoint}/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const responseJSON = await response.json();
    return responseJSON;
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/get-users`);
      const apiJSON = await apiResponse.json();
      setUserList(apiJSON);
      return apiJSON;
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            index
            element={
              <HomePage
                clientMessage={clientMessage}
                setClientMessage={setClientMessage}
                serverMessage={serverMessage}
                sendReceiveMessage={sendReceiveMessage}
                userList={userList}
              />
            }
          />
          <Route
            path="/post-user"
            element={<PostUser postUserData={postUserData} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
