const reducer = (state, action) => {
  switch (action.type) {
    case "Set_Loading":
      return {
        ...state,
        isloading: true,
      };
    case "Get_Stories":
      return {
        ...state,
        isloading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "Remove_Post":
      return {
        ...state,
        hits: state.hits.filter((item) => {
          return item.objectID !== action.payload;
        }),
      };
      case "Search_keyword" :
        return{
            ...state,
            query : action.payload

        }
        case "Get_PrevPage" :
            let pagenum =state.page -1;
            if(pagenum<=0){ pagenum=0;} 

            return{
                ...state,
                page: pagenum,
                
            }
        case "Get_NextPage" :
            let pagenum2 =state.page+1;
            if(pagenum2>=state.nbPages){ pagenum2=0;}
            return{
                ...state,
                page: pagenum2,
            }
            
    
  }
  return state;
};

export default reducer;
