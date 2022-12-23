import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getComment = createAsyncThunk(
    'comments,/getComment',
    async () => {
        const res = await axios.get('http://localhost:3000/comment')
        return res.data
    }
)