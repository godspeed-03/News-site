import React, { useEffect, useState } from "react";
import { useApiData } from "./utils/Context";

import Search from "./Components/Pages/Search";
import fetchDataByQuery from "./utils/Api";
import News from "./Components/Pages/News";
import Pagination from "./Components/Pages/Pagination";

const App = () => {
  const apidata = useApiData();

  return (
    <>
      <div className="main bg-[#E0F4FF] flex flex-col justify-center items-center">
        <Search />
        <Pagination />
        <News />
      </div>
    </>
  );
};

export default App;
