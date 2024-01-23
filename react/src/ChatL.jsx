import './App.css'
import { useState } from 'react';

function ChatL(props)
{
    let obj = JSON.parse(props.text)

    if (props.role === obj.role)
    {
        return (
            <div className={"speech-bubbleR"}>
                <h6 style={{ textAlign: "left" }}>{obj.role}</h6>
                <p style={{ textAlign: "left" }}>{obj.message}</p>
            </div >
        );
    } else
    {
        return (
            <div className={"speech-bubbleL"}>
                <h6 style={{ textAlign: "right" }}>{obj.role}</h6>
                <p style={{ textAlign: "right" }}>{obj.message}</p>
            </div >
        );
    }

}

export default ChatL
