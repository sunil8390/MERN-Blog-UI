import { configureStore } from '@reduxjs/toolkit'
import postReducer from './Posts/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
})