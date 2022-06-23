import { Card } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './PostContent.module.css';

export const PostContent = ({ params}) => {
  const { postId } = useParams();
  const [postContent, setPostContent] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchPostContent = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => setPostContent(json));
    };

    fetchPostContent();
  }, [postId]);

  useEffect(() => {
    const fetchUser = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${postContent.userId}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
    };

    fetchUser();
  }, [postContent.userId]);

  return (
    <Container maxWidth='lg'>
      <h1 class={styles.postTitle}>Post Content:</h1>
      <Card variant="outlined" class={styles.postCard}>
        <h3>
          <b>Title:</b> {postContent.title}
        </h3>
        <p>{postContent.body}</p>
        <p>
          <b>by:</b> {user.name}
        </p>
      </Card>
    </Container>
  );
};