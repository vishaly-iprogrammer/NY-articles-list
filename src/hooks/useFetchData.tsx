import { useState, useEffect } from 'react';
import { Article, fetchArticlesList } from '../api/ nytimesApi';

const useFetchData = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticlesList({ period:7, setArticles ,setLoading,setError});
  }, []);

  return { articles, loading, error };
};

export default useFetchData;
