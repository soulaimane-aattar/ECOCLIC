import ACTION_TYPES from "../actios/acctionTypes";
import { ActionSheetIOS } from "react-native";
const initialState = {
  errorMessage: [],
  isLogged: false,
  errorOrNot: false,
  token: "",
  expired: true,
  ////////////////////////////////////user's articles
  articles: [],
  articleIsLoading: false,
  clientsIsLoading: false,
  clients: [],
  errorLoadingClients: false,
  ///******************************************* add client**********/
  added: false,
  messageAddClient: "",
  companies: [],
  errorLoadingcompanies: false,
  roles: [],
  errorLoadingRoles: false,
  ///******************************************* delete client**********/
  supprime: false,
};
export default adminReducer = (state = initialState, action) => {
  /***********************************************************action get all cleints from database**************************************/

  let nextState;
  switch (action.type) {
    case ACTION_TYPES.GET_CLIENT_START:
      console.log("client start in reducer");

      return (nextState = {
        ...state,
        clientsIsLoading: true,
        clients: [],
      });
      break;
    case ACTION_TYPES.GET_CLIENT_SUCCESS:
      console.log("client succed in reducer");
      console.log(action.payload.data);
      return (nextState = {
        ...state,
        clientsIsLoading: false,
        clients: action.payload.data,
      });
      break;
    case ACTION_TYPES.GET_CLIENT_FAILURE:
      console.log("client failure in reducer");

      return (nextState = {
        ...state,
        clientsIsLoading: false,
        clients: [],
        errorLoadingClients: true,
      });
      break;
    /*********************************************************Add client to database********************************** */
    case ACTION_TYPES.ADD_CLIENT_SUCCESS:
      return (nextState = {
        ...state,
        messageAddClient: action.payload.responce.data,
        added: true,
        clients: [...state.clients, action.payload.client],
      });
      break;
    case ACTION_TYPES.GET_CLIENT_FAILURE:
      return (nextState = {
        ...state,
        messageAddClient: action.payload.data,
        added: false,
      });
      break;
    /*********************************************************Add client to database********************************** */
    case ACTION_TYPES.DELETTE_CLIENT_SUCCESS:
      return (nextState = {
        ...state,
        supprime: true,
        clients: [
          ...state.clients.filter((client) => client !== action.payload.client),
        ],
      });
      break;
    case ACTION_TYPES.DELETTE_CLIENT_FAILURE:
      return (nextState = {
        ...state,
        supprime: false,
      });
      break;

    /******************************************************************get all companies from database****************** */
    case ACTION_TYPES.GET_COMPANY_SUCCESS:
      console.log(action.payload.data);
      return (nextState = {
        ...state,
        companies: action.payload.data,
      });
      break;
    case ACTION_TYPES.GET_COMPANY_FAILURE:
      return (nextState = {
        ...state,
        errorLoadingcompanies: true,
      });
      break;

    /******************************************************************get all roles from database****************** */
    case ACTION_TYPES.GET_ROLES_SUCCESS:
      console.log(action.payload.data);
      return (nextState = {
        ...state,
        roles: action.payload.data,
      });
      break;
    case ACTION_TYPES.GET_ROLES_FAILURE:
      return (nextState = {
        ...state,
        errorLoadingRoles: true,
      });
      break;
    /******************************************************************help methode to update state***********************/

    default:
      return state;
  }
};
