import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const getTopHeadlines = (page = 1, category) => {
  return axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: "us",
      category,
      page,
      apiKey: API_KEY,
    },
  });
};
