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
  /****************************************************get all company action type ***********/
  GET_ROLES_START: "GET_ROLES_START",
  GET_ROLES_SUCCESS: "GET_ROLES_SUCCESS",
  GET_ROLES_FAILURE: "GET_ROLES_FAILURE",
  /*****************************************************help methode ********* */
  UPDATE_STATE: "UPDATE_STATE",
};
export default ACTION_TYPES;
