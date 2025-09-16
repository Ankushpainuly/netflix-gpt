🎬 Netflix-GPT

Netflix-GPT is a smart movie recommendation web app built while following Akshay Saini’s Namaste React Course.
It combines Firebase Authentication, TMDB APIs, and OpenAI GPT to deliver a personalized movie browsing experience — all without a backend server.

🚀 Features

- 🔐 Firebase Authentication – Sign up, login, and logout.
- 🎥 Browse Movies – Get trending, popular, and upcoming movies from TMDB.
- 🤖 GPT Search – Ask in natural language (e.g., “suggest some underrated sci-fi thrillers”) and get movie results instantly.
- 📺 Netflix-like UI – Clean interface with posters, trailers, and categories.


🛠️ Tech Stack

- React (Frontend)
- Tailwind CSS (Styling)
- Firebase Auth (Authentication)
- APIs:
    - TMDB
    - Movie data


⚡ Getting Started

1️⃣ Clone the Repository
git clone https://github.com/Ankushpainuly/netflix-gpt.git
cd netflix-gpt

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables

Create a .env file in the root:

REACT_APP_TMDB_KEY=your_tmdb_api_key
REACT_APP_OPENAI_KEY=your_openai_api_key

4️⃣ Run Locally
npm start

5️⃣ Build for Production
npm run build


🙏 Acknowledgements

- Built while learning from Akshay Saini’s Namaste React Course
- Inspired by Netflix UI and powered by TMDB & OpenAI


✨ Built with ❤️ using React, Firebase, TMDB & OpenAI





# Step-By-Step

    - Create React App
    - Congigured TailwindCSS
    - Header
    - Routing of App
    - Sign in Form 
    - Sign up Form
    - Form Validation
    - useRef hook 
    - firebase setup
    - deploying our app to production
    - Create signup user Account
    - Implement Sign In user Api
    - Created Redux Store with userSlice
    - Implemented Sign Out
    - Update Profile
    - BugFix: Sign up user displayName and profile picture update
    - BugFix: if the user is not logged in Redirect / browse to Login page and vice-versa
    - Unsubscribed to the onAuthstage change callback
    - Add hardcoded value to the constants file
    - Register TMDB API & create an app & get acces token
    - Get Data From TMDB now playing movies list API
    - Custom Hook for now playing movies
    - Create movieSlice
    - Update Store with movies Data
    - Planning for MainCotainer & secondary container
    - fetch data for Trailer Video
    - Update Store with Trailer Video Data
    - Embedded The Youtube Video and Make it autoplay and mute
    - Tailwind classes to make main Container look awesome
    - Build secondary component
    - Build Movie List
    - Build Movie card
    - TMDB Image CDN URL
    - Made the Browse page amazing with Tailwind Css
    - usePopularMovies,toprated etc Custom hook
    - GPT Search Page
    - GPT Search Bar
    - (Bonus) Multi- language feature in our App
    - Get Open AI api key
    - Gpt Search API call
    - Fetched gptMoviesSuggestions from TMDB
    - Created gptSlice added data
    - Resused Movie List component to make movie suggestion sontainer
    - Memoization
    - Added .env file
    - Adding .env file to gitignore
    - Made or Site Resposive


    
