
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const albumSlice = createSlice({
    name: "albums",
    initialState: {
        loading: false,
        hasErrors: false,
        albums: [],
    },
    reducers: {
        getAlbums: state => {
            state.loading = true
        },
        getAlbumsSuccess: (state, { payload }) => {
            state.albums = payload
            state.loading = false
            state.hasErrors = false
        },
        getAlbumsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getAlbums, getAlbumsSuccess, getAlbumsFailure } = albumSlice.actions;

export const albumsSelector = state => state.albums;

export const fetchAlbums = (albumId) => {
    return async dispatch => {
        dispatch(getAlbums());

        axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            dispatch(getAlbumsSuccess(response.data || []));
        })
        .catch(error => {
            dispatch(getAlbumsFailure())
        });
    }
};

export default albumSlice.reducer;
