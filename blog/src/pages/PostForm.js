import React, { useState, useEffect } from 'react';
import { savePost } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

export function PostFormPage() {
  const [post, setPost] = useState({
    id: '',
    author: '',
    title: '',
    img: '',
    body: '',
    createdAt: '',
  });


  const allPosts = useSelector((state) => state.posts);
  const { postId } = useParams();
  useEffect(() => {
    if (postId) {
      const postToEdit = allPosts.find((post) => post.id == postId);
      if (postToEdit) {
        setPost(postToEdit);
      }
    }
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <h1>Novo Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(savePost(post)).then(() => {
            history.push('/');
          });
        }}
      >
        <div className="form-group">
          <label htmlFor="input-title">Título</label>
          <input
            className="form-control"
            id="input-title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="input-img">URL da imagem</label>
          <input
            className="form-control"
            id="input-img"
            placeholder="http://"
            value={post.img}
            onChange={(e) => setPost({ ...post, img: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea-body">Corpo do post</label>
          <textarea
            className="form-control"
            id="textarea-body"
            rows="24s"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="input-author">Autor | Você =)</label>
          <input
            className="form-control"
            id="input-author"
            readOnly
            value="Renan Pallin"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
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
