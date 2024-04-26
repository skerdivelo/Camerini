import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="" />
            <span>
                Made by <a href="https://github.com/skerdivelo" target="_blank" rel="noopener noreferrer">Skerdi Velo</a>.
            </span>
        </footer>
    );
};

export default Footer;