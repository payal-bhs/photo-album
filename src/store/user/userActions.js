import axios from "axios";
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "./userTypes";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
};

export const fetchUserSuccess = userResponse => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: userResponse,
    }
};

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    }
};

export const fetchUser = searchParams => {
    return (dispatch) => {
        dispatch(fetchUserRequest());

        // TODO : searchParams : for user near by 
        console.log("searchParams => ", searchParams);
        axios.get(`https://jsonplaceholder.typicode.com/users`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log("fetchUser response => ", response);
                const userData = response.data || [];
                dispatch(fetchUserSuccess(userData))
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message))
            });
    }
};