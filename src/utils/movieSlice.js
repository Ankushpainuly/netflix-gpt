import { createSlice } from "@reduxjs/toolkit";


const movieSlice =createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upCommingMovies:null,

    },

    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpCommingMovies:(state,action)=>{
            state.upCommingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
    }
});


export const {addNowPlayingMovies, addTrailerVideo , addPopularMovies, addRatedMovies,addUpCommingMovies} = movieSlice.actions;

export default movieSlice.reducer;