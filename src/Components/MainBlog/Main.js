import React, { useEffect , useState} from "react";
import Header from './Header';
import Categories from './Categories';
import { Posts } from './Posts';

import { useDispatch } from 'react-redux'
import { addPosts } from "../../features/Posts/postsSlice";

import PostsDB from './TempDataBase/PostsDB'
import Footer from "./Footer";

import { Box } from "@chakra-ui/react";
import axios from "axios";
import { getToken } from "../Accounts/auth";

export const Main = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const dispatch = useDispatch();
    const handleCategorySelection = (categoryId) => {
      setSelectedCategoryId(categoryId);
      // Do anything else you want with the selected category ID
    };

    // useEffect(() => {
    //   console.log("PostsDB:", PostsDB); // Log PostsDB
    //   const addAllPosts = async () => {
    //     dispatch(addPosts(PostsDB));
    //     console.log("Posts added successfully");
    //   };
    
    //   addAllPosts();
    // }, [dispatch]);

    // useEffect(()=>{

    //   const token = getToken();
    //   axios
    //   .get('http://localhost:4000/allposts', {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     // Handle the response or update state as needed
    //     console.log(`apis data `, response.data);
    //     dispatch(addPosts(response.data));
    //     console.log("Posts added successfully");
    //   })
    //   .catch((error) => {
    //     // Handle errors
    //     console.error('Error fetching data:', error);
    //   });
    // }, [])

    useEffect(()=>{

      axios
      .get('http://localhost:4000/posts/all'
      )
      .then((response) => {
        // Handle the response or update state as needed
        console.log(`All Posts Api Data`, response.data);
        dispatch(addPosts(response.data));
        console.log("Posts All Get successfully");
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
    }, [])

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
    <Categories sendSelectedCategoryId={handleCategorySelection}/>
    <Posts selectedCat={selectedCategoryId}/>
    </Box>
  )
}
export default Main;