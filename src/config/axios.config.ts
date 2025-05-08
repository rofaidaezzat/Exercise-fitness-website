import axios from "axios";
// هنا زي ده انا ثابت الجزء ال ثابت من اللينك{envirinment

export const axiosInstance = axios.create({
    baseURL: "http://localhost:1337/api",
    timeout: 1000,
});

export const axiosInstanceExercise = axios.create({
    baseURL: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
    timeout: 1000,
  });
