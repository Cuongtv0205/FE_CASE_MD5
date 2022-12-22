import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";

const initialState = {
    user : JSON.stringify(localStorage.getItem('user'))
}
const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.user = action.payload.data
            localStorage.setItem('user',JSON.stringify(action.payload.data))
        })
    }
})

export default userSlice.reducer;