import {configureStore} from "@reduxjs/toolkit";
import blogReducer from "./blog/blogSlice";
import userReducer from "./user/userSlice";
import adminReducer from "./admin/adminSlice";

export const store = configureStore({
    reducer: {
        blogs: blogReducer,
        user: userReducer,
        admin: adminReducer
    }
})