export default function ErrorState({
  message = "Something went wrong",
  onRetry,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
      <div className="max-w-md text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Oops!
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-400">{message}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
