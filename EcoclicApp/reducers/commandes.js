import ACTION_TYPES from "../actios/acctionTypes";
const intialeState = {
  commandes: [],
  error: "",
  loading: true,
};
const commandes = (state = intialeState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_COMMANDES:
      //   console.log("reducer", action.payload);
      return { ...state, commandes: action.payload };

    case ACTION_TYPES.SET_USER_COMMANDES_FAILURE:
      return { ...state, error: action.payload, commandes: [] };
    case ACTION_TYPES.UNSET_USER_COMMANDES_ERROR:
      return { ...state, error: "" };

    default:
      return state;
  }
};

export default commandes;
