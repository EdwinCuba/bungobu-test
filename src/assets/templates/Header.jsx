import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../templates/Menu.jsx';
import '../styles/Header.css'

const Header = () => {
  return (
    <>
      <header>
        <div className="name">
          <h1>
            <Link to="/">Bungobu Store</Link>
          </h1>
        </div>
        <Menu />
      </header>

    </>
  )
}

export default Header;