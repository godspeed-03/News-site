import { Target } from "lucide-react";
import React from "react";
import { useApiData } from "../../utils/Context";

const Search = () => {
  const { query, searchpost } = useApiData();
  return (
    <>
      <div className="my-5">
        <input
          className=" border-2 w-72 px-2 py-2 rounded-md"
          placeholder="Search your topic"
          type="text"
          value={query}
          onChange={(e) => searchpost(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
