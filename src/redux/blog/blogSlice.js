import {createSlice} from "@reduxjs/toolkit";
import {getBlogs} from "../../service/blogServices";

const initialSate = {
    blogs: []
}

const blogSlice = createSlice({
    name: 'blogs',
    initialState: initialSate,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload;
        })
    }
})

export default blogSlice.reducer;