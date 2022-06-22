import React from "react";
import style from './style.css'

export const Error = ({message}) => {

    return (
    <div className="msg">
        {message}
    </div>
    )
}