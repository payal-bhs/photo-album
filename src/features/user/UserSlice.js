
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        hasErrors: false,
        users: [],
        filteredUsers: [],
        city: "",
    },
    reducers: {
        getUsers: state => {
            state.loading = true
        },
        getUsersSuccess: (state, { payload }) => {
            state.users = payload
            state.filteredUsers = payload
            state.loading = false
            state.hasErrors = false
        },
        getUsersFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        updateCity: (state, { payload }) => {
            state.city = payload
        },
        updateFilteredUsers: (state, { payload }) => {
            state.filteredUsers = payload
        },
        resetUsers: (state) => {
            state.filteredUsers = state.users
        }
    },
});

export const { getUsers, getUsersSuccess, getUsersFailure, updateCity, updateFilteredUsers, resetUsers } = userSlice.actions;

export const usersSelector = state => state.users;

export const fetchUsers = () => {
    return async dispatch => {
        dispatch(getUsers());

        axios.get(`https://jsonplaceholder.typicode.com/users`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            dispatch(getUsersSuccess(response.data || []));
        })
        .catch(error => {
            dispatch(getUsersFailure())
        });
    }
};

export const filterUsers = searchInfo => dispatch => {
    const { city, users } = searchInfo;
    dispatch(updateCity(city));
    const filteredData = users.filter(user => user.address.city.toLowerCase() === city.toLowerCase());
    dispatch(updateFilteredUsers(filteredData));

};

export const resetFilter = () => dispatch => {
    dispatch(updateCity(""));
    dispatch(resetUsers());
};

export default userSlice.reducer;
