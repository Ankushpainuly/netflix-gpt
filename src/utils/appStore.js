import { configureStore } from "@reduxjs/toolkit";
import userRecuder from "./userSlice";

const appStore = configureStore({
   reducer:{
        user: userRecuder,
    },
});

export default appStore;
