import { TextInput, Button, Group, Box } from "@mantine/core";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { useForm } from "@mantine/form";
import { useNavigate, useLoaderData } from "react-router-dom"; 
import { useState } from "react";

function EditPostPage() {
  const post = useLoaderData();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: post.title, category: post.category, content: post.content, image: post.image });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${DOMAIN}/api/posts/${post.id}`, form);
    navigate(`/posts/${post.id}`);
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={handleSubmit}>
        <TextInput
          name="title"
          label="Title"
          value={form.title}
          onChange={handleInputChange}
        />
        <TextInput
          name="category"
          label="Category"
          value={form.category}
          onChange={handleInputChange}
        />
        <TextInput
          name="content"
          label="Content"
          value={form.content}
          onChange={handleInputChange}
        />
        <TextInput
          name="image"
          label="Image"
          value={form.image}
          onChange={handleInputChange}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default EditPostPage;
