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
    default:
      return state;
  }
};
