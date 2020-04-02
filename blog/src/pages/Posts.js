import React from 'react';
import { NavLink } from 'react-router-dom';

export function Posts() {
  return (
    <>
      <h1>Posts Screen</h1>
      <h4>Olá Maisa</h4>
      <ul className="list-group">
        <li className="list-group-item">Post #1</li>
        <li className="list-group-item">Post #2</li>
        <li className="list-group-item">Post #3</li>
        <li className="list-group-item">Post #4</li>
      </ul>
      <NavLink className="btn btn-primary" to="/post/novo" exact>
        Novo post
      </NavLink>
    </>
  );
}
