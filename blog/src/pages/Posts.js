import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setEditingPost } from '../actions/editingPostActions';
import { faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Posts() {
  // @todo: comparar o autor com o usuário logado
  const userPosts = useSelector((state) => state.posts);
  const userName = useSelector((state) => state.auth.name);

  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <h1>Posts Screen</h1>
      <h4>Olá {userName}</h4>

      <ul className="list-group">
        {userPosts.map((post) => {
          return (
            <li
              key={post.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {post.title}
              <a
                onClick={() => {
                  dispatch(setEditingPost(post));
                  history.push(`/post/${post.id}/edit`);
                }}
              >
                <FontAwesomeIcon icon={faEdit} />
              </a>
              {/* <NavLink to={`/post/${post.id}/edit`}>
                <FontAwesomeIcon icon={faEdit} />
              </NavLink> */}
            </li>
          );
        })}
      </ul>
      <NavLink className="btn btn-primary" to="/post/novo" exact>
        Novo post{'      '}
        <FontAwesomeIcon icon={faPlusCircle} />
      </NavLink>
    </>
  );
}
