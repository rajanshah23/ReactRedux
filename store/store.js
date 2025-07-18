import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/authSlice.js";

import blogSlice from "../store/blogSlice.js";


const store = configureStore({
  reducer: {
    auth: authSlice,
    blog:blogSlice,


  },
});

export default store;
  