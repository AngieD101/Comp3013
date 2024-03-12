import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container, Title, Image, Text, useMantineTheme, Paper, Group } from "@mantine/core";
import { useLoaderData } from "react-router-dom";
import { findUserById } from '../../../../backend/fakedb';
import classes from './PostDetails.module.css';
import useBoundStore from "../../store/Store";

function PostDetailsPage() {
  const post = useLoaderData();
  const theme = useMantineTheme();
  const author = findUserById(post.userId);
  const authorName = author.email.substring(0, author.email.indexOf('@'));
  const { user : currentUser } = useBoundStore((state) => state);
  const isByCurrentUser = currentUser.id === post.userId;

  

  return (
    <Container size={700} style={{ paddingTop: theme.spacing.xl, paddingBottom: theme.spacing.xl }}>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${post.image})`, backgroundSize: "cover", color: "white" }}
        className={classes.card}
      >
        <div style={{ marginBottom: theme.spacing.lg }}>
          <Text className={classes.category} size="xs">
            {post.category.toUpperCase()}
          </Text>
          <Title order={2} className={classes.title} style={{ marginBottom: theme.spacing.lg }}>
            {post.title}
          </Title>
          <Text size="sm" style={{ margin: `${theme.spacing.sm}px 0` }}>
            By {authorName}
          </Text>
          <Text>{post.content}</Text>
        </div>
        <Group spacing={theme.spacing.sm}>
          <Button variant="white" color="dark" >
            <Link to="/posts" style={{ textDecoration: 'none', color: theme.colors.dark[9] }}>
              Back to Posts
            </Link>
          </Button>
          {isByCurrentUser && (
            <Button variant="white" color="dark">
              <Link to={`/posts/edit/${post.id}`} style={{ textDecoration: 'none', color: theme.colors.dark[9] }}>
                Edit
              </Link>
            </Button>
          )}
        </Group>

      </Paper>
    </Container>
  );
}

export const postDetailsLoader = async ({ params }) => {
  // do something with this
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};

export default PostDetailsPage;
