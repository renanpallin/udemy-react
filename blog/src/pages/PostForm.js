import React, { useEffect } from 'react';
import { savePost } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { setValue, setEditingPost } from '../actions/editingPostActions';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';

export function PostFormPage() {
  const editingPost = useSelector((state) => state.editingPost);
  const isEditing = useRouteMatch().path.endsWith('edit');

  const history = useHistory();
  const dispatch = useDispatch();

  // Código para poder abrir na página de edição
  const isLoading = useSelector((state) => state.isLoading);
  const { postId } = useParams();
  const allPosts = useSelector((state) => state.posts);
  useEffect(() => {
    console.log('did mount do PostForm');
    function ensureEditingPost() {
      if (isLoading) return console.log('nops, loading ainda');
      if (postId && editingPost.id) return console.log('nops, já tá lá');

      const foundPost = allPosts.find(({ id }) => id === parseInt(postId));
      if (foundPost) {
        console.log('fazendo o dispatch');
        return dispatch(setEditingPost(foundPost));
      }
      console.log('history');
      history.replace('/meus-posts');
    }
    ensureEditingPost();
  }, [allPosts, dispatch, editingPost.id, postId, isLoading, history]);

  return (
    <>
      <h1>{isEditing ? 'Editar' : 'Novo'} Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(savePost(editingPost)).then(() => {
            history.push('/meus-posts');
          });
        }}
      >
        <Input
          id="input-title"
          label="Título"
          value={editingPost.title}
          onChangeText={(text) => dispatch(setValue('title', text))}
        />

        <Input
          id="input-img"
          label="Url da Imagem"
          placeholder="http://"
          value={editingPost.img}
          onChangeText={(text) => dispatch(setValue('img', text))}
        />
        <Textarea
          id="textarea-body"
          label="Corpo do post"
          rows="20"
          value={editingPost.body}
          onChange={(text) => dispatch(setValue('body', text))}
        />
        <Input id="input-author" label="Autor" readOnly value="Renan Pallin" />

        <Button>Salvar</Button>
      </form>
    </>
  );
}

// export function PostFormPage() {
//   const [post, setPost] = useState({
//     id: '',
//     author: '',
//     title: '',
//     img: '',
//     body: '',
//     createdAt: '',
//   });

//   const allPosts = useSelector((state) => state.posts);
//   const { postId } = useParams();
//   useEffect(() => {
//     if (postId) {
//       const postToEdit = allPosts.find((post) => post.id === postId);
//       if (postToEdit) {
//         setPost(postToEdit);
//       }
//     }
//   }, []);

//   const dispatch = useDispatch();
//   const history = useHistory();
//   return (
//     <>
//       <h1>Novo Post</h1>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           dispatch(savePost(post)).then(() => {
//             history.push('/');
//           });
//         }}
//       >
//         <div className="form-group">
//           <label htmlFor="input-title">Título</label>
//           <input
//             className="form-control"
//             id="input-title"
//             value={post.title}
//             onChange={(e) => setPost({ ...post, title: e.target.value })}
//           />
//           {/* <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small> */}
//         </div>
//         <div className="form-group">
//           <label htmlFor="input-img">URL da imagem</label>
//           <input
//             className="form-control"
//             id="input-img"
//             placeholder="http://"
//             value={post.img}
//             onChange={(e) => setPost({ ...post, img: e.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="textarea-body">Corpo do post</label>
//           <textarea
//             className="form-control"
//             id="textarea-body"
//             rows="20"
//             value={post.body}
//             onChange={(e) => setPost({ ...post, body: e.target.value })}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="input-author">Autor | Você =)</label>
//           <input
//             className="form-control"
//             id="input-author"
//             readOnly
//             value="Renan Pallin"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Salvar
//         </button>
//       </form>
//     </>
//   );
// }

// const editingPost = useSelector((state) => state.editingPost);

// const history = useHistory();
// const dispatch = useDispatch();

// const isLoading = useSelector((state) => state.isLoading);

// const { postId } = useParams();
// const allPosts = useSelector((state) => state.posts);
// useEffect(() => {
//   function ensureEditingPost() {
//     if (isLoading) return console.log('nops, loading ainda');
//     if (postId && editingPost.id) return console.log('nops, já tá lá');

//     const foundPost = allPosts.find(({ id }) => id === parseInt(postId));
//     if (foundPost) {
//       console.log('fazendo o dispatch');
//       return dispatch(setEditingPost(foundPost));
//     }
//     console.log('history')
//     history.replace('/');
//   }
//   ensureEditingPost();
// }, [allPosts, dispatch, editingPost.id, postId, isLoading]);

// {
/* <div className="form-group">
          <label htmlFor="input-title">Título</label>
          <input
            className="form-control"
            id="input-title"
            value={editingPost.title}
            onChange={(e) => dispatch(setValue('title', e.target.value))}
          />
        </div> */
// }
