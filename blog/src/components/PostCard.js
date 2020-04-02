import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PostCard({ post: { id, title, body, img, path } }) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="Cachorrinho" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body.slice(0, 60) + '...'}</p>
        <NavLink className="btn btn-primary" to={`/post/${id}`}>
          Ler mais
        </NavLink>
      </div>
    </div>
  );
}
