import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, usersSelector } from "./UserSlice";
import { LoadingSpinner } from "../../ui/LoadingSpinner.component";
import { UserCard } from "../../ui/UserCard.component";
import { Search } from "./Search.component";

export const User = () => {
    const dispatch = useDispatch();
    const { filteredUsers, loading, hasErrors } = useSelector(usersSelector);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                <h1 className="col-md-12 col-xs-12 col-xl-12 text-center">
                    <span>Users Lists</span>
                </h1>
                <Search />
                {loading && <LoadingSpinner />}
                {hasErrors && <h3>Error. Try Refreshing.</h3>}
                <div className="col-md-12 col-xs-12 col-xl-12">
                    {!loading && filteredUsers.map((user, i) => (
                        <UserCard user={user} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};