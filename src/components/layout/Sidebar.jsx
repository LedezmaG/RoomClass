import React from "react";
import { Link } from "react-router-dom";
import _logo from "../../assets/logos/logo.png"

import "../../styles/Sidebar.css"

export const Sidebar = () => {

    return (
        <div id="nav">
            <nav className="w-100">
                <div className="nav-header">
                    <div className="logo-container">
                        <Link to="/dashboard">
                            <img src={_logo} alt="Salon de clases" />
                        </Link>
                    </div>
                    <div>
                        <hr />
                        <i class="fa-solid fa-user nav-items-icon" />
                        <Link to="/my-account" className="txt_c-black">
                            Hola <b>David!</b>
                        </Link>
                        <hr />
                    </div>
                </div>
                <ul className="nav-items">
                    <li className="item" >
                        <Link to='/home'>
                            <i class="fa-solid fa-house nav-items-icon" />
                            <span> Inicio </span>
                        </Link>
                    </li>
                    <li className="item" >
                        <Link to='/groups'>
                            <i class="fa-solid fa-user-group nav-items-icon" />
                            <span> Grupos </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
