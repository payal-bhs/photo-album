import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbums, albumsSelector } from "./AlbumSlice";
import { LoadingSpinner } from "../../ui/LoadingSpinner.component";
import { AlbumCard } from "../../ui/AlbumCard.component";
import { Breadcrumb } from "../../ui/BreadCrumb.component";

export const Album = (props) => {
    const dispatch = useDispatch();
    const { albums, loading, hasErrors } = useSelector(albumsSelector);
    

    useEffect(() => {
        dispatch(fetchAlbums(props.id));
    }, [dispatch, props.id]);

    return (
        <div className="container">
            <div className="row">
                <h1 className="col-md-12 col-xs-12 col-xl-12 text-center">
                    <span>Album Photos</span>
                </h1>
                <Breadcrumb />
                {loading && <p><LoadingSpinner /></p> }
                {hasErrors && <h3>Error. Try Refreshing.</h3>}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {!loading && albums.map((album, i) => (
                        <AlbumCard album={album} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};