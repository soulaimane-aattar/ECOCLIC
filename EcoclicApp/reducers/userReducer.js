import ACTION_TYPES from "../actios/acctionTypes";
const initialState = {
  username: "",
  password: "",
  isLoading: false,
  userId: "",
  errorMessage: [],
  isLogged: false,
  errorOrNot: false,
  token: "",
  expired: true,
  role: "",
  ////////////////////////////////////user's articles
  articles: [],
  articleIsLoading: false,
};
export default userReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case ACTION_TYPES.LOGIN_START:
      return (nextState = {
        ...state,
        isLoading: true,
        isLogged: false,
        errorMessage: [],
        errorOrNot: false,
      });
    case ACTION_TYPES.LOGIN_SUCCESS:
      console.log("login success");
      console.log(action.payload.data.role.roleName);

      return (nextState = {
        ...state,
        token: action.payload.data.token,
        isLoading: false,
        isLogged: true,
        errorOrNot: false,
        errorMessage: [],
        role: action.payload.data.role.roleName,
      });
    case ACTION_TYPES.LOGIN_FAILURE:
      console.log("LOGIN_FAILURE");
      return (nextState = {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        errorOrNot: true,
        isLogged: false,
        role: "",
      });
    /* getting articles fro the connected use*/

    case ACTION_TYPES.GET_ARTICLE_START:
      console.log("articles getting is starting in reducer");
      return (nextStat = {
        ...state,
        articleIsLoading: true,
      });
    case ACTION_TYPES.GET_ARTICLE_SUCCESS:
      console.log(JSON.stringify(action.payload.data));
      return (nextState = {
        ...state,
        articleIsLoading: false,
        articles: action.payload.data,
      });
    case ACTION_TYPES.GET_ARTICLE_FAILURE:
      console.log("get articles failed reducer");

      return (nextState = {
        ...state,
        articleIsLoading: false,
        articles: [],
      });

    default:
      return state;
  }
};
