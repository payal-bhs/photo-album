import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAlbum, userAlbumSelector } from "./UserAlbumSlice";
import { LoadingSpinner } from "../../ui/LoadingSpinner.component";
import { Breadcrumb } from "../../ui/BreadCrumb.component";

export const UserAlbum = (props) => {
    const dispatch = useDispatch();
    const { userAlbum, loading, hasErrors } = useSelector(userAlbumSelector);
    

    useEffect(() => {
        dispatch(fetchUserAlbum(props.id));
    }, [dispatch, props.id]);

    return (
        <div className="container">
            <div className="row">
                <h1 className="col-md-12 col-xs-12 col-xl-12 text-center">
                    <span>User Album Lists</span>
                </h1>
                <Breadcrumb />
                {loading && <p><LoadingSpinner /></p> }
                {hasErrors && <h3>Error. Try Refreshing.</h3>}
                <div className="col-md-12 col-xs-12 col-xl-12 list-group">
                    {!loading && userAlbum.map((album, i) => (
                        <a href={`album/${album.id}`} key={i} className="list-group-item list-group-item-action"> {album.title}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};