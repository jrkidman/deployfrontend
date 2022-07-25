import React from 'react'


const HomePage = ({ clientMessage, setClientMessage, serverMessage, sendReceiveMessage }) => {
    return (
        <div>
            <div>clientMessage</div>
            <div>serverMessage</div>

            <label>Input:</label>
            <input
                type="text"
                value={clientMessage}
                onChange={(event) => {
                    const newClientMessage = event.target.value;
                    const dateTime = new Date();
                    setClientMessage(`Message: ${newClientMessage} at time ${dateTime.toString()}`);
                }}>
            </input>
            <br></br>
            <br></br>

            <button
                id="send"
                type="submit"
                onClick={async () => {
                    sendReceiveMessage();
                }}>
                Send
            </button>


        </div>
    )
}

export default HomePage
