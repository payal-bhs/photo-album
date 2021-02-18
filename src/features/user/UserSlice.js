
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        hasErrors: false,
        users: [],
        city: "",
    },
    reducers: {
        getUsers: state => {
            state.loading = true
        },
        getUsersSuccess: (state, { payload }) => {
            state.users = payload
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
        updateUsers: (state, { payload }) => {
            state.users = payload
        }
    },
});

export const { getUsers, getUsersSuccess, getUsersFailure, updateCity, updateUsers } = userSlice.actions;

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
    console.log("filterUsers city => ", city);
    console.log("filterUsers current users => ", users);
    // dispatch(updateUsers(response.data));
    const filteredData = users.filter(user => user.address.city.toLowerCase() === city.toLowerCase());
    console.log("filterUsers  => ", filteredData);
    dispatch(updateUsers(filteredData));

};

export default userSlice.reducer;
