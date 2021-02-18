import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, usersSelector } from "./UserSlice";
import { UserCard } from "../../ui/MatUserCard.component";
import { makeStyles, GridList, GridListTile, ListSubheader } from "@material-ui/core";
// , GridListTile, ListSubheader

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // width: 1000,
        // height: 1000,
        margin: 10,
    },
    titleBar: {
        background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
})); 

export const User = () => {
    const dispatch = useDispatch();
    const { users, loading, hasErrors } = useSelector(usersSelector);
    const classes = useStyles();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <GridList cellHeight={300} spacing={30} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
                    <ListSubheader component="div"></ListSubheader>
                </GridListTile>
                    {loading && <h3>Loading...</h3>}
                    {hasErrors && <h3>Error. Try Refreshing.</h3>}
                    {users.map((user) => (
                        <UserCard user={user} key={user.id} />
                    ))}
            </GridList>
        </div>
    );
    // return (
    //     <div>
    //         <h1>Users Lists</h1>
    //         {loading && <h3>Loading...</h3>}
    //         {hasErrors && <h3>Error. Try Refreshing.</h3>}
    //         {users.map(user => {
    //             return <UserCard user={user} key={user.id} />
    //         })}
    //     </div>
    // );
};