import { useRouter } from "next/router";

export default function ArticleDetails() {
  const router = useRouter();

  if (!router.isReady) return null;

  const { title, description, image, source, url, publishedAt } = router.query;

  if (!title) return null;

  return (
    <>
      {image && (
        <div className="relative h-[360px] md:h-[420px] w-full">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 max-w-4xl mx-auto px-4 pb-6 text-white">
            <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-blue-600 rounded-full">
              {source || "News"}
            </span>

            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              {title}
            </h1>

            {publishedAt && (
              <p className="mt-2 text-sm opacity-80">
                {new Date(publishedAt).toLocaleString()}
              </p>
            )}
          </div>
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 py-10">
        {description && (
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
            {description}
          </p>
        )}

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600
             hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            ← Back
          </button>

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Read Full Article →
            </a>
          )}
        </div>
      </main>
    </>
  );
}
