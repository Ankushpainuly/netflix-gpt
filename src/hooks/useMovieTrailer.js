import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer =(movieId)=>{
    const dispatch = useDispatch();
    const trailerVideo =useSelector(store=>store.movies.trailerVideo);

    const getMovieVideos = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json =await data.json();
        const trailer = json?.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
       !trailerVideo && getMovieVideos();
    },[]);
};

export default useMovieTrailer;