import { Box, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function NavBar({ setActiveComponent }) {
  return (
    <Box bg="blue.500" h="100vh" w="200px" color="white">
      <VStack spacing={4} align="stretch" p={4}>
        <Text fontSize="xl" onClick={() => setActiveComponent('allPosts')}>
          All Posts
        </Text>
        <Text fontSize="xl" onClick={() => setActiveComponent('addPost')}>
          Add Post
        </Text>
      </VStack>
    </Box>
  )
}
