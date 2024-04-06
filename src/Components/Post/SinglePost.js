// SinglePost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getAllPosts } from '../../features/Posts/postsSlice';
import { Flex, Box, Spacer, Text, VStack } from '@chakra-ui/react';

const SinglePost = () => {
  const allPostsState = useSelector(getAllPosts);
  const { postId } = useParams();
  const post = allPostsState.find(post => post.id == postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Flex justifyContent="center" mt={8}>
      <Box w={['100%', '80%']} p={4} bg="teal">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>{post.title}</Text>
        <Text>{post.content}</Text>
      </Box>
      <Box w={['100%', '20%']} display={['none', 'block']} p={4} bg="tomato">
        {/* Widgets or additional content on the right */}
      </Box>
    </Flex>
  );
};

export default SinglePost;
