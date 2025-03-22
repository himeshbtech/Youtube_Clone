import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    console.log("API Response:", response.data); // log to inspect the response
    return response.data;
  } catch (error) {
    console.log(
      "Error fetching API data:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// import axios from "axios";

// const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
// const BASE_URL = "https://youtube138.p.rapidapi.com";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": API_KEY,
//     "x-rapidapi-host": "youtube138.p.rapidapi.com",
//   },
// };

// export const fetchData = async (url) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
//   } catch (error) {
//     console.log("error fetching api data :", error);
//     throw error;
//   }
// };
