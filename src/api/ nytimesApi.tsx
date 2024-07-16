import axios from "axios";

const API_KEY = "KdJbeDPAQzZjqCzba2RTghjwzuCAN7gM";
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed";

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
    const response = await axios.get<{ results: Article[] }>(
      `${BASE_URL}/${period}.json?api-key=${API_KEY}`
    );
    setArticles(response.data.results);
    setLoading(false);
    return response.data.results;
  } catch (error) {
    console.log(error);
    setError("Failed to fetch articles.");
    setLoading(false)
  } finally {
    setLoading(false)
  }
};
