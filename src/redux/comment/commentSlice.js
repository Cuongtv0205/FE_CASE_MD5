import {createSlice} from "@reduxjs/toolkit";
import {getComment} from "../../service/commentService";

const initialState = {
    currentComment: []
}
const commentSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: builder => {
        builder.addCase(getComment.fulfilled, (state, action) => {
            state.currentComment = action.payload
        })
    }
})

export default commentSlice.reducer