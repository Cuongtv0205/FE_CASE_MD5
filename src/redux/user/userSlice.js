import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";

const initialState = {
    user : {}
}
const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.user = action.payload.data
        })
    }
})

export default userSlice.reducer;