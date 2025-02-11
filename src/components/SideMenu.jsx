import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";
import { useCallback } from "react";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = useCallback(
    (e) => {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    },
    [searchParams, setSearchParams]
  );

  const handleCategoryChange = useCallback(
    (category) => {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    },
    [searchParams, setSearchParams]
  );


  return (
    <div className="px-4 h-max sticky top-8">
    <h1 className="mb-4 text-sm font-medium">Search</h1>
    <Search />
    <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
    <div className="flex flex-col gap-2 text-sm">
      {["newest", "popular", "trending", "oldest"].map((sortOption) => (
        <label key={sortOption} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value={sortOption}
            checked={searchParams.get("sort") === sortOption}
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
        </label>
      ))}
    </div>
    <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
    <div className="flex flex-col gap-2 text-sm">
      {["general", "web-design", "development", "databases", "seo", "marketing"].map((category) => (
        <span
          key={category}
          className={`underline cursor-pointer ${searchParams.get("cat") === category ? "font-bold" : ""}`}
          onClick={() => handleCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
      ))}
    </div>
  </div>
  );
};

export default SideMenu;