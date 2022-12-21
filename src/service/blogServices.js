import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./api";


export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async () => {
        const res = await customAxios.get('blogs')
        console.log(res)
        return res.data
    }
)

export const addBlogs = createAsyncThunk(
    'blogs/addBlogs',
    async (data) => {
        const res = await customAxios.post('blogs',data)
        return res.data
    }
)