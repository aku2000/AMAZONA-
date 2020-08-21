import React from 'react';
import logo from './logo.svg';
import './App.css';

function App()
{
  const openMenu = () =>
  {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>
  {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
                </button>
          <a href="index.html">Amazona</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign-in</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li><a href="index.html">Jeans</a></li>
          <li><a href="index.html">T-shirts</a></li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Woman T-shirt</a>
                </div>
                <div className="product-brand">Puma</div>
                <div className="product-price">Rs.450</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Woman T-shirt</a>
                </div>
                <div className="product-brand">Puma</div>
                <div className="product-price">Rs.450</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Woman T-shirt</a>
                </div>
                <div className="product-brand">Puma</div>
                <div className="product-price">Rs.450</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Woman T-shirt</a>
                </div>
                <div className="product-brand">Puma</div>
                <div className="product-price">Rs.450</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Woman T-shirt</a>
                </div>
                <div className="product-brand">Puma</div>
                <div className="product-price">Rs.450</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Woman T-shirt</a>
                </div>
                <div className="product-brand">Puma</div>
                <div className="product-price">Rs.450</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All rights reserved.
        </footer>
    </div>

  );
}

export default App;
