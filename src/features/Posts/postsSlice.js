import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Posts: [],
}


export const postsSlice  = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPosts: (state, {payload})=>{
            state.Posts = payload;
        }
    },

})

export const {addPosts} = postsSlice.actions;
export const getAllPosts = (state)=> state.posts.Posts;
export default postsSlice.reducer;