import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../static/menu.png';
import MenuExitIcon from '../static/menu-exit.png';
import '../styles/Menu.css';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const container = createRef();

  useEffect(() => {
    if (showMenu) {
      container.current.style.left = 0;
    } else {
      container.current.style.left = '100%';
    }
  });

  return (
    <div className="Menu">
      <div className="menu-logo" onClick={() => setShowMenu(true)}>
        <img src={MenuIcon} alt="menu" />
      </div>
      <div className="menu-container" ref={container}>
        <section className="menu-container__header">
          <div className="name">
            <h2>Menu</h2>
          </div>
          <div className="menu-logo" onClick={() => setShowMenu(false)}>
            <img src={MenuExitIcon} alt="menu" />
          </div>
        </section>
        <section className="menu-container__nav">
          <ul>
            <li>
              <Link to="/facebook">
                Facebook
              </Link>
            </li>
            <li>
              <Link to="/instagram">
                Instagram
              </Link>
            </li>
            <li>
              <Link to="/instagram">
                Nosotros
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Menu;