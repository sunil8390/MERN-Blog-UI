import {React, useState} from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box, Flex, Spacer, Tag } from "@chakra-ui/react";
import CategoriesDB from "./TempDataBase/CategoriesDB";
const Categories = (props) => {

    const [selectedCategory, setSelectedCategory] = useState(0);
    
  const handleTagClick = (categoryId) => {
    // alert(`Clicked on category with ID: ${categoryId}`);
    setSelectedCategory(categoryId);
    props.sendSelectedCategoryId(categoryId); 
  };

  return (
    <Flex p="4" bg="white.500" color="white">
      <Box p="4" bg="white.400">
        {CategoriesDB.map((category) => (
          <Tag
            key={category.id}
            p="2"
            margin={1}
            onClick={() => handleTagClick(category.id)}
            cursor="pointer"
            bg={selectedCategory === category.id ? "teal.500" : undefined} // Change background color for the clicked tag
            color={selectedCategory === category.id ? "white" : undefined} // Change text color for the clicked tag
          >
            {category.categoryName}
          </Tag>
        ))}
      </Box>
    </Flex>
  );
};

export default Categories;
