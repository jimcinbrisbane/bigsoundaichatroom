import { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ChatL from './ChatL'
import Persona from './Persona'
const WS = (props) =>
{
    //Public API that will echo messages sent to it back to the client
    const [socketUrl, setSocketUrl] = useState('ws://192.168.50.162:5000');
    localStorage.removeItem('prev')

    const [messageHistory, setMessageHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    const handleInputChange = (event) =>
    {
        setInputValue(event.target.value);
    };

    const handleSendClick = () =>
    {
        console.log('Sending input:', inputValue);
        let role = localStorage.getItem('persona')
        let person = "to be a more " + role

        sendMessage(JSON.stringify({ message: inputValue, role: props.name, persona: person, last: localStorage.getItem('prev') }))
        localStorage.setItem('prev', JSON.parse(lastMessage.data).message)
        setInputValue('');
    };

    useEffect(() =>
    {
        if (lastMessage !== null)
        {
            setMessageHistory((prev) => prev.concat(lastMessage));
            localStorage.setItem('prev', JSON.parse(lastMessage.data).message)

        }
    }, [lastMessage, setMessageHistory]);



    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    return (
        <div>
            <table style={{ width: "100%", height: "500px" }}>
                {messageHistory.map((message, idx) => (

                    <tr key={idx}>
                        <ChatL side={message.self ? message.self : null} role={props.name} text={message ? message.data : null} /></tr>
                ))}
            </table>
            <h1> </h1>

            <h1> </h1>
            <Persona />
            <div>
                <input
                    style={{ padding: "10px", borderRadius: "5px", width: "60%", height: "50px" }}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}

                />
                <button
                    onClick={handleSendClick}>
                    Send
                </button>
            </div>


            <span>The WebSocket is currently {connectionStatus}</span>
            <p>The message should be professional, understanding, polite, and considerate. Short messages can be expanded to include more friendly and meaningful sentences. Let's avoid any passive-aggressive tones.</p>
            {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}

        </div >
    );
};

export default WS