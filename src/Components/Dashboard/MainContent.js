import { Box } from '@chakra-ui/react'
import React from 'react'
import AllPosts from './MenuItems/AllPosts'
import AddPost from './MenuItems/AddPost'

export default function MainContent({ activeComponent }) {
  return (
    <Box flex="1" p={4}>
    {activeComponent === 'allPosts' ? <AllPosts /> : null}
    {activeComponent === 'addPost' ? <AddPost /> : null}
  </Box>
  )
}
