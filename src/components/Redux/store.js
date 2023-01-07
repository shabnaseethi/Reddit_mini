import { configureStore } from '@reduxjs/toolkit';
import searchBarSlice from './searchBarSlice';
import subredditsSlice from './subredditsSlice';
import individualPostSlice from './individualPostSlice';
import postsSlice from './postsSlice';

export default configureStore({
  reducer: {
    search: searchBarSlice,
    posts: postsSlice,
    subreddits: subredditsSlice,
    individualPostId: individualPostSlice
  }
});
