import React, { useState, useEffect, createRef } from 'react';
import MenuLogo from '../static/menu.png';
import '../styles/Menu.css';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const container = createRef();

  useEffect(() => {
    console.log(`${showMenu}`);
    if (showMenu) {
      container.current.style.left = 0;
    } else {
      container.current.style.left = '100%';
    }
  });

  return (
    <div className="menu">
      <div className="menu-logo" onClick={() => setShowMenu(true)}>
        <img src={MenuLogo} alt="menu" />
      </div>
      <div className="menu-container" ref={container}>
        <section className="menu-container__header">
          <div className="menu-logo" onClick={() => setShowMenu(false)}>
            <img src={MenuLogo} alt="menu" />
          </div>
        </section>
        <section className="menu-container__nav">
          <ul>
            <li>
              <a href="">
                Facebook
              </a>
            </li>
            <li>
              <a href="">
                Intagram
              </a>
            </li>
            <li>
              <a href="">
                Nosotros
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Menu;