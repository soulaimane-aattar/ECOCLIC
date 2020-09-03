import ACTION_TYPES from "../actios/acctionTypes";

const initialState = {
  articles: [],
  loading: false,
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ARTICLE_START:
      // console.log("articles getting is starting in reducer");
      return (nextState = {
        ...state,
        loading: true,
      });
    case ACTION_TYPES.GET_ARTICLE_SUCCESS:
      console.log(JSON.stringify(action.payload.data));
      return (nextState = {
        ...state,
        loading: false,
        articles: action.payload.data,
      });
    case ACTION_TYPES.GET_ARTICLE_FAILURE:
      return (nextState = {
        ...state,
        loading: false,
        articles: [],
      });

    default:
      return state;
  }
};

export default article;
