import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";


export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () => {
        const res = await axios.get('http://localhost:3000/blog')
        return res.data
    })

export const addBlogs = createAsyncThunk(
    'blogs/addBlogs', async (data) => {
        const res = await axios.post('http://localhost:3000/blog', data)
        console.log('res', res)
        return res.data
    })