import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "./Reducer";
import fetchDataByQuery from "./Api";

const initialstate = {
  isloading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const fetchApiData = async () => {
    dispatch({
      type: "Set_Loading",
    });

    try {
      const result = await fetchDataByQuery(state.query, state.page);
      dispatch({
        type: "Get_Stories",
        payload: {
          hits: result.hits,
          nbPages: result.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removepost = (postid) => {
    // console.log(postid)
    dispatch({
      type: "Remove_Post",
      payload: postid
    });
  };


  const searchpost = (searchquery) => {
   dispatch({
    type : "Search_keyword",
    payload: searchquery,
   })

  }

  const getprevPage = () => {
    dispatch({
      type: "Get_PrevPage"
    })
  }
  const getnextPage = () => {
    dispatch({
      type: "Get_NextPage"
      
    })
  }

  useEffect(() => {
    fetchApiData();
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removepost, searchpost, getprevPage, getnextPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useApiData = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useApiData };
