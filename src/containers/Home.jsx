import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Eraser from '../assets/static/product-eraser-popcorn.jpg'
import Eraser2 from '../assets/static/product-eraser-popcorn-2.jpg';
import Magazine from '../assets/static/product-magazine-rosyposy.jpg';
import '../assets/styles/Home.css';

const Home = () => {
  const photos = [1, 2, 3];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setIndex(prevIndex =>
        prevIndex === photos.length - 1 ?
          0 :
          prevIndex + 1
      )
    }, 2500);

    return () => resetTimeout();
  }, [index]);




  return (
    <div className="Home">
      <section className="carousel-products">
        <div
          className="carousel-products__slider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          <img
            className="slide"
            key={0}
            src={Eraser}
            alt="photo"
          />
          <img
            className="slide"
            key={1}
            src={Eraser2}
            alt="photo"
          />
          <img
            className="slide"
            key={2}
            src={Magazine}
            alt="photo"
          />
        </div>
        <div className="slideDots">
          <div
            key={0}
            className={`slideShowDot${index === 0 ? " active" : ""}`}
            onClick={() => setIndex(0)}
          ></div>
          <div
            key={1}
            className={`slideShowDot${index === 1 ? " active" : ""}`}
            onClick={() => setIndex(1)}
          ></div>
          <div
            key={2}
            className={`slideShowDot${index === 2 ? " active" : ""}`}
            onClick={() => setIndex(2)}
          ></div>
        </div>
      </section>

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