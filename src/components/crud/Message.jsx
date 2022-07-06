import React from "react";

export const Message = ({msg, bgColor}) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#ffffff",
        fontWeight: "bold",
        backgroundColor: bgColor
    };

    return (
        <div style={styles}>
        <p>{msg}</p>
        </div>
    )
}