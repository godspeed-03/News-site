import React, { useEffect } from "react";

const baseURL = "https://hn.algolia.com/api/v1/search";

const fetchDataByQuery = async (query, page) => {
  try {
    const response = await fetch(`${baseURL}?query=${query}&page=${page}`);
    // console.log(`${baseURL}?query=${query}&page=${page}`)

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchDataByQuery;