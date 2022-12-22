import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
    'users/getUsers',
    async () => {
        const res = await axios.get('http://localhost:3000/user')
        return res.data
    }
)

export const deleteUser = createAsyncThunk(
    'users/deleteUsers',
    async (id) => {
        console.log(id)
        const res = await axios.delete('http://localhost:3000/user/' + id)
        return id
    }
)