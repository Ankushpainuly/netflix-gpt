import { configureStore } from "@reduxjs/toolkit";
import userRecuder from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
   reducer:{
        user: userRecuder,
        movies: movieReducer, 
    },
});

export default appStore;
