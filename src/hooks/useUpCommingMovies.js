import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addUpCommingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useUpCommingMovies = ()=>{
    
    const dispatch =useDispatch();

    const getNowPlayingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS)
        const json = await data.json();
        dispatch(addUpCommingMovies(json.results));
        
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);

};

export default useUpCommingMovies;

