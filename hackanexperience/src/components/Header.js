import React from 'react'
import { useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import '../styles/Header.css';
import logo from './images/logo-hackanexperience.png';
import SearchIcon from '@mui/icons-material/Search';
import AuthContext from "../store/auth-context";

// import { Avatar } from "@material-ui/core";

const Header = () => {
    const history = useHistory();

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;
    const userId = authCtx.idUser;
    const isAdmin = authCtx.role === "admin";

    const logoutHandler = () => {
        authCtx.logout();
        history.replace("/");
    };
    return (
        <header className='header_main'>
            <Link to='/'>
                <img
                    className='header_logo'
                    src={logo}
                    alt="hackanexperience-logo"
                />
            </Link>
            <div className='header_center'>
                <input type='text' className='input_search' />
                <button className='btn_search'>
                    <SearchIcon className='icon_search' />
                </button>
            </div>
            <div className='header_right'>
                {!isLoggedIn && (<button className='btn_login'>
                    <Link to="/login">Login</Link>
                </button>
                )}
                <button className='btn_register'>
                    <Link to="/register">Register</Link>
                </button>
            </div>
        </header>
    );
}

export default Header;
