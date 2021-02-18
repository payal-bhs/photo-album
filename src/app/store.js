import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "../features/album/AlbumSlice";
import userReducer from "../features/user/UserSlice";
import userAlbumReducer from "../features/userAlbum/UserAlbumSlice";

export default configureStore({
    reducer: {
        albums: albumsReducer,
        users: userReducer,
        userAlbum: userAlbumReducer,
    },
});
