import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <section className="carousel-products"></section>

      <section className="description">
        <div className="description__container">
          <div className="title-section">
            <h2>Quienes somos</h2>
          </div>
          <div className="text-section">
            <p>
              Hola! Somos Bungobu Store, un pequeño emprendimiento sobre la venta de artículos de papelería.
            </p>
            <p>
              Estamos ofreciendo los productos mas bonitos y de calidad que no pueden faltar en tu colección.
            </p>
            <p>
              Por el momento pueden ver nuestro catálogo de productos en nuestro
            <Link to="/instagram">
                instagram.
            </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;