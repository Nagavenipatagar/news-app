import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getTopHeadlines } from "../../services/newsApi";
import CategoryNav from "../../components/CategoryNav";
import NewsCard from "../../components/NewsCard";
import FeaturedNews from "../../components/FeaturedNews";
import Link from "next/link";
import FeaturedSkeleton from "@/components/skeleton/FeaturedSkeleton";
import NewsCardSkeleton from "@/components/skeleton/NewsCardSkeleton";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category) return;

    getTopHeadlines(1, category)
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  const featuredArticle = articles.find((article) => article.urlToImage);

  if (loading) {
    return (
      <>
        <CategoryNav />

        <div className="px-4 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-6">
          <div className="hidden lg:block lg:col-span-2">
            <FeaturedSkeleton />
          </div>

          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </>
    );
  }

  if (!loading && articles.length === 0) {
    return (
      <>
        <CategoryNav />
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">
            No news available for this category
          </h2>
          <Link href="/" className="text-blue-600 mt-4 inline-block">
            ← Back to Home
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <CategoryNav />
      <Link
        href="/"
        className="
    inline-flex items-center gap-2
    px-4 py-2 mt-4 ml-4
    text-sm font-medium
    text-gray-600 dark:text-gray-300
    hover:text-blue-600 dark:hover:text-blue-400
    transition
  "
      >
        ← Back to Home
      </Link>
      <div className="px-4 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-6 ">
        {featuredArticle && (
          <div className="hidden lg:block lg:col-span-2 lg:sticky lg:top-24 self-start">
            <FeaturedNews article={featuredArticle} />
          </div>
        )}

        <div className="space-y-4">
          {articles
            .filter((a) => a !== featuredArticle)
            .map((a, i) => (
              <NewsCard key={i} article={a} />
            ))}
        </div>
      </div>
    </>
  );
}
