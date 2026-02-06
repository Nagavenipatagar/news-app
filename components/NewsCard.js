import Link from "next/link";

export default function NewsCard({ article }) {
  return (
    <Link
      href={{
        pathname: "/article",
        query: {
          title: article.title,
          description: article.description,
          image: article.urlToImage,
          source: article.source?.name,
          url: article.url,
          publishedAt: article.publishedAt,
        },
      }}
      className="block"
    >
      <div
        className="
          group flex flex-col sm:flex-row gap-4
          bg-white dark:bg-gray-900
          rounded-xl overflow-hidden
          border border-gray-200 dark:border-gray-700
          shadow-sm
          transition-all duration-300 ease-out
          hover:shadow-lg 
        "
      >
        {article.urlToImage && (
          <div className="sm:w-56 h-48 sm:h-auto overflow-hidden shrink-0">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          </div>
        )}

        <div className="p-4 flex flex-col justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span className="font-semibold">
              {article.source?.name || "News"}
            </span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>

          {article.description && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {article.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
