import { useEffect, useState } from "react";
import { getTopHeadlines } from "../services/newsApi";
import NewsCard from "../components/NewsCard";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import FeaturedNews from "../components/FeaturedNews";
import FeaturedSkeleton from "@/components/skeleton/FeaturedSkeleton";
import NewsCardSkeleton from "@/components/skeleton/NewsCardSkeleton";
import ErrorState from "@/components/ErrorState";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchNews = () => {
    setLoading(true);
    setError(null);

    getTopHeadlines()
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError(
          "Failed to load news. Please check your connection or try again.",
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <CategoryNav />

        <div className="px-6 py-4">
          <FeaturedSkeleton />
        </div>

        <div className="p-6 grid gap-6 grid-cols-1 lg:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} onRetry={fetchNews} />;
  }
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <CategoryNav />

      <h2 className="px-6 py-4 text-lg font-semibold">Top Headlines</h2>
      <FeaturedNews article={articles[0]} />
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
