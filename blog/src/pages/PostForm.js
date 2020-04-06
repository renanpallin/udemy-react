import React, { useState } from 'react';
import { savePost } from '../actions/postActions';
import { useDispatch } from 'react-redux';

export function PostFormPage() {
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [body, setBody] = useState('aa');

  const dispatch = useDispatch();
  return (
    <>
      <h1>Novo Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(savePost({ title, imgUrl, body }));
        }}
      >
        <div className="form-group">
          <label for="input-title">Título</label>
          <input
            className="form-control"
            id="input-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label for="input-img">URL da imagem</label>
          <input
            className="form-control"
            id="input-img"
            placeholder="http://"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="textarea-body">Corpo do post</label>
          <textarea
            class="form-control"
            id="textarea-body"
            rows="24s"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="input-author">Autor | Você =)</label>
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
