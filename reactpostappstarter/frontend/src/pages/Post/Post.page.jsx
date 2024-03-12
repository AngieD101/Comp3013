import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";
import { SimpleGrid, Container, LoadingOverlay, Box } from "@mantine/core";
import { useState, useEffect } from "react";

export const PostPage = () => {
  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await postsLoader();
        console.log(res);
        setPosts(res);
      } catch (error) {
        console.error();
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);


  return (
    <>
      <Box>
        <LoadingOverlay visible={loading}/>
      </Box>
      <Container>
        <SimpleGrid cols={3}>
          {posts?.map((post) => (
            <ArticleCardImage key={post.title} {...post} />
          ))}
        </SimpleGrid>
      </Container>
    </>
    
    
  );
};

const postsLoader = async () => {
  const res = await axios.get(`${DOMAIN}/api/posts`);
  console.log("I ran!");
  return res.data;
};
