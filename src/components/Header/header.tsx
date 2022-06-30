import React from 'react'

import logo from '../../assets/logo.svg';
import './header.modules.scss';

function Header() {
  return (
    <header className="container">
        <img src={logo} alt="shortly"/>
        <nav>
            <ul>
                <li className="list"><a href="/">features</a></li>
                <li className="list"><a href="/">pricing</a></li>
                <li className="list"><a href="/">resources</a></li>
            </ul>
            <ul>
                <li className="list"><a href="\">login</a></li>
                <li className="signup"><a href="\">sign up</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header