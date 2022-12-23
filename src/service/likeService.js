import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getLikes = createAsyncThunk(
    'likes/getLikes',
    async () => {
        const res = await axios.get('http://localhost:3000/like')
        return res.data
    })
export const addLikes = createAsyncThunk(
    'likes/addLikes',
    async (data) => {
        await axios.post('http://localhost:3000/like', data)
        return data
    })
export const deleteLikes = createAsyncThunk(
    'likes/deleteLikes',
    async (data) => {
        let query = `?userId=${data.userId}&blogId=${data.blogId}`
        await axios.delete('http://localhost:3000/like/' + query)
        return data
    })