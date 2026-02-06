import Link from "next/link";

export default function FeaturedNews({ article }) {
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
      className="block group"
    >
      <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 p-6 text-white">
          <div className="flex items-center gap-3 text-xs mb-3 opacity-90">
            <span className="px-3 py-1 bg-blue-600 rounded-full font-semibold">
              {article.source?.name || "News"}
            </span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight line-clamp-2">
            {article.title}
          </h2>

          {article.description && (
            <p className="mt-3 text-sm text-gray-200 line-clamp-2 max-w-2xl">
              {article.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
