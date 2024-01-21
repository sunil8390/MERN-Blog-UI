import { configureStore } from '@reduxjs/toolkit'
import postReducer from './Posts/postsSlice';
import userReducer from  './User/userSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
})