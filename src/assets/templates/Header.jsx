import React from 'react';
import Menu from '../templates/Menu.jsx';
import '../styles/Header.css'

const Header = () => {
  return (
    <>
      <header>
        <div className="name">
          <h1>Bungobu Store</h1>
        </div>
        <Menu />
      </header>

    </>
  )
}

export default Header;