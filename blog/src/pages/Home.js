import React from 'react';
import PostCard from '../components/PostCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export function HomePage() {
  const posts = useSelector(state => state.posts);

  return (
    <>
      <h1>Home screen</h1>
      <Container>
        <Row>
          {posts.map((post, index) => (
            <Col sm={6} md={4} key={index}>
              <PostCard post={post} />
              {/* Trocar por chunk array */}
              <div style={{ height: 20 }}></div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
