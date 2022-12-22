import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";

const initialState = {
    currentUser : []
}
const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.currentUser = action.payload
        })
    }
})

export default userSlice.reducer;