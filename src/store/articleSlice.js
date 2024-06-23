import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../api';


export const getArticles = createAsyncThunk('articles/getArticles', async ({ category, page }) => {
        const response = await fetchArticles(category, page);
        return response.articles;
    }
);

const articleSlice = createSlice({
    name: 'articles',
    
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        currentPage: 1,
        currentCategory: 'general'
    },

    reducers: {
        setCategory(state, action){
            state.currentCategory = action.payload;
            state.currentPage = 1;
        },
        setPage(state, action){
            state.currentPage = action.payload;
        }
    },

    extraReducers:  (builder) => {
        builder.addCase(getArticles.pending , (state) => {
            state.status = 'loading';
        })
        .addCase(getArticles.fulfilled , (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(getArticles.rejected , (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const { setCategory, setPage } = articleSlice.actions;

export default articleSlice.reducer;
