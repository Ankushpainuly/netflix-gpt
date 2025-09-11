import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const usePopularMovies = ()=>{
    
    const dispatch =useDispatch();

    const getNowPlayingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
       
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);

};

export default usePopularMovies;

