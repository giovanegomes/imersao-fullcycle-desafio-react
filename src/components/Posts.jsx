import { useState } from "react";
import { useEffect } from "react"
import { Card, Link, ListItemButton, ListItemText, Stack } from "@mui/material"
import { Container } from "@mui/system";
import styles from "./Posts.module.css";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
    };

    fetchPosts();
  }, []);

  return (
    <Container maxWidth='lg'>
      <h1 class={styles.postTitle}>Posts:</h1>
      <Stack spacing={1}>
        {posts.length > 0 && posts.map((post) => (
          <Link key={post.id} href={'post/' + post.id} color="inherit" underline="none">
            <Card variant="outlined" class={styles.postCard}>
              <ListItemButton>
                <ListItemText primary={post.title} />
              </ListItemButton>
            </Card>
          </Link>
        ))}
      </Stack>
    </Container>
  );
};