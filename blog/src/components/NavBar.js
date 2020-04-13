import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Nosso Blog</span>
      <ul className="navbar-nav mr-auto">
        <NavLink activeClassName="active" className="nav-link" to="/" exact>
          Home
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to="/meus-posts"
          exact
        >
          Meus posts
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link my-2 my-lg-0"
          to="/login"
          exact
        >
          Entrar
        </NavLink>
      </ul>
    </nav>
  );
}
