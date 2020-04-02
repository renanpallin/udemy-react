import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PostDetailPage() {
  const { postId } = useParams();
  const post = useSelector(state =>
    state.posts.find(post => post.id === parseInt(postId))
  );

  if (!post) {
    return <Redirect to="/404" />;
  }

  const { title, author, body, img, createdAt } = post;

  return (
    <>
      <h1>{title}</h1>
      <h5>
        Escrito por {author} em {createdAt}
      </h5>
      {/* <p>{body}</p> */}
      <img src={img} class="img-thumbnail float-right" alt=""></img>
      {body.split('\n').map(line => (
        <p>{line}</p>
      ))}
    </>
  );
  // return (
  //   <div className="card">
  //     <img src={img} className="card-img-top" alt="Cachorrinho" />
  //     <div className="card-body">
  //       <h5 className="card-title">{title}</h5>
  //       <p className="card-text">{body.slice(0, 60) + '...'}</p>
  //       <NavLink className="btn btn-primary" to={`post/${id}`}>
  //         Ler mais
  //       </NavLink>
  //     </div>
  //   </div>
  // );
}
