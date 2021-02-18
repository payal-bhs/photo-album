import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "./user/userReducer";
// import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
//   search: searchReducer,
  userReducer: userReducer
})

export default rootReducer;