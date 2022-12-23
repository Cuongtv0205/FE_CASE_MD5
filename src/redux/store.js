import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./blog/blogSlice";
import userReducer from "./user/userSlice";
import adminReducer from "./admin/adminSlice";
import likeReducer from "./like/likeSlice";
import commentReducer from "./comment/commentSlice";

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        user: userReducer,
        admin: adminReducer,
        likes: likeReducer,
        comments: commentReducer
    }
})