import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch =useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searhText = useRef(null);


  // search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      
      const json =await data.json();
      return json.results;
  };

  const handleGptSearch = async () => {
    const getQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query " +
      searhText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmal, Koi mil gaya";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + OPENAI_KEY // or your key directly
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b:free",
        messages: [
          {
            role: "user",
            content: getQuery,
          },
        ],
      }),
    };

    const data = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      options
    );
    const json = await data.json();
    console.log(json.choices?.[0]?.message?.content);
    // Andaz Apna Apna ,Hera Pheri, Chupke Chupke,Jaane Bhi Do Yaaro,Padosan
    const gptMovies = json.choices?.[0]?.message?.content.split(",");

    // [Andaz Apna Apna ,Hera Pheri, Chupke Chupke,Jaane Bhi Do Yaaro,Padosan]

    // for each movie i will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // searchMovieTMDB is async function and .map is sync so .map will call syncrnous so it will retun prosises
    // [Promise1, Promise2, Promise3, Promise4, Promise5]

    //now it will wait when all promise will result
    const tmdbResults =await Promise.all(promiseArray);
    console.log(tmdbResults);
    
    dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));

  };

  return (
    <div className="flex justify-center">
      <form
        className="absolute mx-4 top-56  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searhText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-2 md:px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
