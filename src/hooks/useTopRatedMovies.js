import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useTopRatedMovies = ()=>{
    
    const dispatch =useDispatch();

    const getNowPlayingMovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
        const json = await data.json();
        dispatch(addRatedMovies(json.results));
        
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);

};

export default useTopRatedMovies;

