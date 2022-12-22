import {createSlice} from "@reduxjs/toolkit";
import {addBlogs, getBlogs} from "../../service/blogServices";


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
        });
        builder.addCase(addBlogs.fulfilled, (state, action) => {
            state.blogs = [...state.blogs, action.payload.data]
        });

    }
})

export default blogSlice.reducer;