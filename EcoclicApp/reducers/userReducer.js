import ACTION_TYPES from "../actios/acctionTypes";
const initialState = {
  username: "",
  password: "",
  isLoading: false,
  errorMessage: [],
  isLogged: false,
  errorOrNot: false,
  token: "",
  expired: true,
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
      return (nextState = {
        ...state,
        token: action.payload.data,
        isLoading: false,
        isLogged: true,
        errorOrNot: false,
        errorMessage: [],
      });
    case ACTION_TYPES.LOGIN_FAILURE:
      console.log("favki");
      return (nextState = {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        errorOrNot: true,
        isLogged: false,
      });
    default:
      return state;
  }
};
