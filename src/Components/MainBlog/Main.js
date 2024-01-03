import React, { useEffect , useState} from "react";
import Header from './Header';
import Categories from './Categories';
import { Posts } from './Posts';

import { useDispatch } from 'react-redux'
import { addPosts } from "../../features/Posts/postsSlice";

import PostsDB from './TempDataBase/PostsDB'
import Footer from "./Footer";

import { Box } from "@chakra-ui/react";

export const Main = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const dispatch = useDispatch();
    const handleCategorySelection = (categoryId) => {
      setSelectedCategoryId(categoryId);
      // Do anything else you want with the selected category ID
    };

    useEffect(() => {
      console.log("PostsDB:", PostsDB); // Log PostsDB
      const addAllPosts = async () => {
        dispatch(addPosts(PostsDB));
        console.log("Posts added successfully");
      };
    
      addAllPosts();
    }, [dispatch]);

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
    <Header/>
    <Categories sendSelectedCategoryId={handleCategorySelection}/>
    <Posts selectedCat={selectedCategoryId}/>
    <Footer/>
    </Box>
  )
}
export default Main;