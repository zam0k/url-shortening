import React from 'react'

import logo from '../../assets/logo.svg';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.container}>
        <img src={logo} alt="shortly"/>
        <nav>
            <ul>
                <li className={styles.list}><a href="/">features</a></li>
                <li className={styles.list}><a href="/">pricing</a></li>
                <li className={styles.list}><a href="/">resources</a></li>
            </ul>
            <ul>
                <li className={styles.list}><a href="\">login</a></li>
                <li className={styles.signup}><a href="\">sign up</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header