import {createSlice} from "@reduxjs/toolkit";
import {addLikes, deleteLikes, getLikes} from "../../service/likeService";

const initialState = {
    currentLike: []
}
const likeSlice = createSlice({
    name: 'likes',
    initialState,
    extraReducers: builder => {
        builder.addCase(getLikes.fulfilled, (state, action) => {
            state.currentLike = action.payload
        })
        builder.addCase(addLikes.fulfilled, (state, action) => {
            state.currentLike = [...state.currentLike, action.payload]
        })
        builder.addCase(deleteLikes.fulfilled, (state, action) => {
            let newState = [...state.currentLike]
            let index = newState.findIndex(item => item.userId == action.payload.userId && item.blogId == action.payload.blogId)
            newState.splice(index, 1)
            state.currentLike = newState
        })
    }
})
export default likeSlice.reducer