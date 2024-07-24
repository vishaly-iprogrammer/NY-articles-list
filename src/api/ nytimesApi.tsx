import axios from "axios";

// Define the API key for the New York Times Most Popular Articles API.
const API_KEY = import.meta.env.VITE_APP_API_KEY;

// Define the base URL for the New York Times Most Popular Articles API.
const BASE_URL = import.meta.env.VITE_APP_END_POINT;

/**
 * Interface representing an article.
 */
export interface Article {
  id: number;
  title: string;
  abstract: string;
  url: string;
  uri: string
  media: any
  adx_keywords: string
  byline: string
  published_date: string
  source: string
  type: string
  des_facet:string[]
}

/**
 * Fetches a list of articles from the New York Times Most Popular Articles API.
 * @param period - The period of time to fetch articles for.
 * @param setArticles - A function to set the fetched articles.
 * @param setLoading - A function to set the loading state.
 * @param setError - A function to set the error state.
 * @returns A promise that resolves to the fetched articles.
 */
export const fetchArticlesList = async ({
  period,
  setArticles,
  setLoading,
  setError,
}: {
  period: number;
  setArticles: (articles: Article[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
})=> {
  setLoading(true);
  try {
      // Make a GET request to the New York Times API with the specified period.
    const response = await axios.get<{ results: Article[] }>(
      `${BASE_URL}/${period}.json?api-key=${API_KEY}`
    );
    // Set the fetched articles.
    setArticles(response.data.results);
    setLoading(false);
    return response.data.results;
  } catch (error) {
    console.log(error);
     // Set the error state.
    setError("Failed to fetch articles.");
    setLoading(false)
  } finally {
    setLoading(false)
  }
};
