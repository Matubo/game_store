import React from 'react';

export default function Header() {
  return (
    <div className="navbar-header">
      <ul className="navbar-list">
        <li className="navbar-list__item list-item">
          <a href="/home" className="list-item__link">
            home
          </a>
        </li>
        <li className="navbar-list__item list-item">
          <a href="/category:1" className="list-item__link">
            category
          </a>
        </li>
        <li className="navbar-list__item list-item">
          <a href="/about" className="list-item__link">
            about
          </a>
        </li>
        <li className="navbar-list__item list-item">
          <a href="/cart" className="list-item__link">
            cart
          </a>
        </li>
      </ul>
    </div>
  );
}
