import React from "react";

export const Button = (props) =>{
    return (
    <button onClick={props.onClick} type={props.type} className={props.className} > {props.name} </button>
    )
}