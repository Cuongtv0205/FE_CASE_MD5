import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";
import {deleteUser, getUser} from "../../service/adminService";

const initialState = {
    currentAdmin: []
}
const adminSlice = createSlice({
    name: 'admin',
    initialState,
    extraReducers: builder => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.currentAdmin = action.payload
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            console.log(action)
            state.currentAdmin = state.currentAdmin.filter((item) => {
                return item.id !== action.payload
            })
        })
    }
})

export default adminSlice.reducer;