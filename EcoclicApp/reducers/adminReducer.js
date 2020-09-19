import ACTION_TYPES from "../actios/acctionTypes";
import { ActionSheetIOS } from "react-native";
const initialState = {
  errorMessage: [],
  isLogged: false,
  errorOrNot: false,
  token: "",
  expired: true,
  ////////////////////////////////////admin articles
  articles: [],
  articleIsLoading: false,
  ///////////////////////////
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
  ///******************************************* edit client**********/
  modifie: false,
  messageEditClient: "",
  ///******************************************* add a  role**********/
  messageAddRole: "",
  roleAdded: "",
  ///******************************************* edit role**********/
  roleModifie: false,
  messageEditRole: "",
  ///******************************************* delete client**********/
  roleSupprime: false,
  messageRoleSuppime: "",
  ///******************************************* ADD company**********/
  messageAddCompany: "",
  companyAdded: false,
  ///******************************************* edit company**********/
  compteModifier: false,
  ///******************************************* delete compte**********/
  compteSupprime: false,
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
    case ACTION_TYPES.ADD_CLIENT_FAILURE:
      return (nextState = {
        ...state,
        messageAddClient: action.payload.data,
        added: false,
      });
      break;
    /*********************************************************delete client to database********************************** */
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
    /*********************************************************edit client********************************** */
    case ACTION_TYPES.EDIT_CLIENT_SUCCESS:
      let client = action.payload.client;
      let index = state.clients.findIndex((cl) => cl.userId == client.userId);
      let nextClients = [...state.clients];
      nextClients[index] = Object.assign(nextClients[index], client);

      return (nextState = {
        ...state,
        modifie: true,
        clients: nextClients,

        messageEditClient: action.payload.responce,
      });
      break;
    case ACTION_TYPES.EDIT_CLIENT_FAILURE:
      return (nextState = {
        ...state,
        messageEditClient: action.payload.responce,
        modifie: false,
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
    /******************************************************************Add a role****************** */

    case ACTION_TYPES.ADD_ROLE_SUCCESS:
      return (nextState = {
        ...state,
        messageAddRole: action.payload.responce.data,
        roleAdded: true,
        roles: [...state.roles, action.payload.role],
      });
      break;
    case ACTION_TYPES.ADD_ROLE_FAILURE:
      return (nextState = {
        ...state,
        messageAddRole: action.payload.data,
        roleAdded: false,
      });
      break;
    /*********************************************************edit a role********************************** */
    case ACTION_TYPES.EDIT_ROLE_SUCCESS:
      let role = action.payload.role;
      let id = state.roles.findIndex((rl) => rl.roleId == role.roleId);
      let nextRoles = [...state.roles];
      nextRoles[id] = Object.assign(nextRoles[id], role);
      console.log("this is the responce from the edit action");

      console.log(action.payload.responce);
      return (nextState = {
        ...state,
        roleModifie: true,
        roles: nextRoles,
        messageEditRole: action.payload.responce,
      });
      break;
    case ACTION_TYPES.EDIT_ROLE_FAILURE:
      return (nextState = {
        ...state,
        messageEditRole: action.payload.responce,
        roleModifie: false,
      });
      break;
    /******************************************************************delete a role from database****************** */
    case ACTION_TYPES.DELETTE_ROLE_SUCCESS:
      return (nextState = {
        ...state,
        roleSupprime: true,
        roles: [...state.roles.filter((role) => role !== action.payload.role)],
      });
      break;
    case ACTION_TYPES.DELETTE_ROLE_FAILURE:
      return (nextState = {
        ...state,
        roleSupprime: false,
      });
      break;
    /******************************************************************get all Articles for admin from database****************** */
    case ACTION_TYPES.GET_ARTICLE_FOR_ADMIN_SUCCESS:
      return (nextState = {
        ...state,
        articles: action.payload.data,
      });
      break;
    case ACTION_TYPES.GET_ARTICLE_FOR_ADMIN_FAILURE:
      return (nextState = {
        ...state,
      });
      break;
    /******************************************************************ADD a company****************** */

    case ACTION_TYPES.ADD_COMPANY_SUCCESS:
      console.log("je suis appele reducer");
      return (nextState = {
        ...state,
        messageAddCompany: action.payload.responce.data,
        companyAdded: true,
        companies: [...state.companies, action.payload.company],
      });
      break;
    case ACTION_TYPES.ADD_COMPANY_FAILURE:
      return (nextState = {
        ...state,
        companyAdded: false,
        messageAddCompany: action.payload.responce.data,
      });
      break;
    /******************************************************************Edit a company****************** */
    case ACTION_TYPES.EDIT_COMPANY_SUCCESS:
      let compte = action.payload.compte;
      let idCompte = state.companies.findIndex(
        (cm) => cm.compteNum == compte.compteNum
      );
      let nextCompanies = [...state.companies];
      nextCompanies[idCompte] = Object.assign(nextCompanies[idCompte], compte);
      return (nextState = {
        ...state,
        compteModifier: true,
        companies: nextCompanies,
      });
      break;
    case ACTION_TYPES.EDIT_COMPANY_FAILURE:
      return (nextState = {
        ...state,
        compteModifier: false,
      });
      break;
    /******************************************************************delete a company****************** */
    case ACTION_TYPES.DELETTE_COMPANY_SUCCESS:
      return (nextState = {
        ...state,
        compteSupprime: true,
        companies: [
          ...state.companies.filter(
            (compte) => compte !== action.payload.compte
          ),
        ],
      });
      break;
    case ACTION_TYPES.DELETTE_COMPANY_FAILURE:
      return (nextState = {
        ...state,
        compteSupprime: false,
      });
      break;
    /******************************************************************help methode to update state***********************/
    case ACTION_TYPES.UPDATE_STATE:
      console.log("hello");
    default:
      return state;
  }
};
