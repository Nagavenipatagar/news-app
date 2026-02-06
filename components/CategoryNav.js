import { usePathname } from "next/navigation";
import Link from "next/link";
const categories = [
  "business",
  "technology",
  "sports",
  "entertainment",
  "health",
  "science",
];
export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 py-3">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3">
            {categories.map((cat) => {
              const isActive = pathname === `/category/${cat}`;

              return (
                <Link
                  key={cat}
                  href={`/category/${cat}`}
                  className={`
                    whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
                    transition-colors duration-200
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
                    }
                  `}
                >
                  {cat.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
