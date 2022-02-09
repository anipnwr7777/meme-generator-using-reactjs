import React from "react";
import Logo from "../images/Troll Face.png"

export default function Header() {
    return (
        <header className="topHeader">
            <img src={Logo} />
            <h1>Meme Generator</h1>
        </header>
    )
}