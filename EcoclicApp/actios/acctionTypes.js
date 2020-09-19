const ACTION_TYPES = {
  //user

  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",

  //articles

  GET_ARTICLE_START: "GET_ARTICLE_START",
  GET_ARTICLE_SUCCESS: "GET_ARTICLE_SUCCESS",
  GET_ARTICLE_FAILURE: "GET_ARTICLE_FAILURE",

  /*************************************************admin**********************************/

  // action get clients
  GET_CLIENT_START: "GET_CLIENT_START",
  GET_CLIENT_SUCCESS: "GET_CLIENT_SUCCESS",
  GET_CLIENT_FAILURE: "GET_CLIENT_FAILURE",

  //add client
  ADD_CLIENT_START: "ADD_CLIENT_START",
  ADD_CLIENT_SUCCESS: "ADD_CLIENT_SUCCESS",
  ADD_CLIENT_FAILURE: "ADD_CLIENT_FAILURE",
  /********************************************DELETTE client*********************/
  DELETTE_CLIENT_START: "DELETTE_CLIENT_START",
  DELETTE_CLIENT_SUCCESS: "DELETTE_CLIENT_SUCCESS",
  DELETTE_CLIENT_FAILURE: "DELETTE_CLIENT_FAILURE",
  /********************************************EDIT client/********************************************/
  EDIT_CLIENT_START: "EDIT_CLIENT_START",
  EDIT_CLIENT_SUCCESS: "EDIT_CLIENT_SUCCESS",
  EDIT_CLIENT_FAILURE: "EDIT_CLIENT_FAILURE",

  /****************************************************get all company action type ***********/
  GET_COMPANY_START: "GET_COMPANY_START",
  GET_COMPANY_SUCCESS: "GET_COMPANY_SUCCESS",
  GET_COMPANY_FAILURE: "GET_COMPANY_FAILURE",
  /****************************************************Add a  company action type ***********/
  ADD_COMPANY_SUCCESS: "ADD_COMPANY_SUCCESS",
  ADD_COMPANY_FAILURE: "ADD_COMPANY_FAILURE",
  /*****************************************************edit company *************/
  EDIT_COMPANY_SUCCESS: "EDIT_COMPANY_SUCCESS",
  EDIT_COMPANY_FAILURE: "EDIT_COMPANY_FAILURE",
  /*****************************************************delete a company *************/

  DELETTE_COMPANY_SUCCESS: "DELETTE_COMPANY_SUCCESS",
  DELETTE_COMPANY_FAILURE: "DELETTE_COMPANY_FAILURE",
  /****************************************************get all roles action type ***********/
  GET_ROLES_START: "GET_ROLES_START",
  GET_ROLES_SUCCESS: "GET_ROLES_SUCCESS",
  GET_ROLES_FAILURE: "GET_ROLES_FAILURE",
  /*****************************************************get all articles for admin ********* */
  GET_ARTICLE_FOR_ADMIN_SUCCESS: "GET_ARTICLE_FOR_ADMIN_SUCCESS",
  GET_ARTICLE_FOR_ADMIN_FAILURE: "GET_ARTICLE_FOR_ADMIN_FAILURE",
  /*****************************************************fin articles for admin *************/

  /*****************************************************roles action for admin *************/
  EDIT_ROLE_SUCCESS: "EDIT_ROLE_SUCCESS",
  EDIT_ROLE_FAILURE: "EDIT_ROLE_FAILURE",

  DELETTE_ROLE_SUCCESS: "DELETTE_ROLE_SUCCESS",
  DELETTE_ROLE_FAILURE: "DELETTE_ROLE_FAILURE",

  ADD_ROLE_SUCCESS: "ADD_ROLE_SUCCESS",
  ADD_ROLE_FAILURE: "ADD_ROLE_FAILURE",

  UPDATE_STATE: "UPDATE_STATE",
  CHECKOUT_SUCCESS: "CHECKOUT_SUCCESS",

  GET_USER_COMMANDES: "GET_USER_COMMANDES",
  SET_USER_COMMANDES_FAILURE: "SET_USER_COMMANDES_FAILURE",
  UNSET_USER_COMMANDES_ERROR: "UNSET_USER_COMMANDES_ERROR",
};
export default ACTION_TYPES;
