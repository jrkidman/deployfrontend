import React from 'react'


const HomePage = ({ clientMessage, setClientMessage, serverMessage, sendReceiveMessage }) => {
    return (
        <div>
            <div>Client:{clientMessage}</div>
            <div>Server:{serverMessage}</div>

            <label>Input:</label>
            <input
                type="text"
                onChange={(event) => {
                    setClientMessage(event.target.value)
                }}
            >
            </input>
            <br></br>
            <br></br>

            <button
                id="send"
                type="submit"
                onClick={(event) => {
                    const dateTime = new Date();
                    setClientMessage(`Message: ${clientMessage} at time ${dateTime.toString()}`);
                    sendReceiveMessage();
                }}>

                Send
            </button>


        </div>
    )
}

export default HomePage
