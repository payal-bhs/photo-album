
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userAlbumSlice = createSlice({
    name: "userAlbum",
    initialState: {
        loading: false,
        hasErrors: false,
        userAlbum: [],
    },
    reducers: {
        getUserAlbum: state => {
            state.loading = true
        },
        getUserAlbumSuccess: (state, { payload }) => {
            state.userAlbum = payload
            state.loading = false
            state.hasErrors = false
        },
        getUserAlbumFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getUserAlbum, getUserAlbumSuccess, getUserAlbumFailure } = userAlbumSlice.actions;

export const userAlbumSelector = state => state.userAlbum;

export const fetchUserAlbum = (userId) => {
    return async dispatch => {
        dispatch(getUserAlbum());

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            dispatch(getUserAlbumSuccess(response.data || []));
        })
        .catch(error => {
            dispatch(getUserAlbumFailure())
        });
    }
};

export default userAlbumSlice.reducer;
