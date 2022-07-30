import React, { useState } from 'react'
/* import SearchUser from './SearchUser' */
import { Link, NavLink } from 'react-router-dom';
import Search from './Search'
import Menu from './Menu'


const Header = () => {

    return (

        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
        bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                <Link to="/"><i className="feather-zap text-success display2-size me-3 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Sociala. </span> </Link>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>


    )
}

export default Header