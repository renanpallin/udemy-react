import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/Home';
import { Posts } from './pages/Posts';
import { PostDetailPage } from './pages/PostDetail';
import { PostFormPage } from './pages/PostForm';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './actions/postActions';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="container">
      <Router>
        <NavBar />
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/meus-posts" exact>
              <Posts />
            </Route>
            <Route path="/post/novo" exact>
              <PostFormPage />
            </Route>
            <Route path="/post/:postId" exact>
              <PostDetailPage />
            </Route>
            <Route path="/post/:postId/edit" exact>
              <PostFormPage mode="edit" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
