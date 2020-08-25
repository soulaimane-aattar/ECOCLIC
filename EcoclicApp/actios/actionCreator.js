import axios from "axios";
import ACTION_TYPES from "./acctionTypes";
export const login = (values) => {
  return (dispatch, getState) => {
    dispatch({ type: ACTION_TYPES.LOGIN_START });
    console.log("loggin start");

    axios
      .post("http://localhost:3000/auth/login", {
        username: values.username,
        password: values.password,
      })
      .then((responce) => {
        console.log("loggin succes");

        dispatch({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: responce });
      })
      .catch((error) => {
        // Alert.alert(respance.response.data);
        console.log("loggin failde on actioncreator");

        dispatch({ type: ACTION_TYPES.LOGIN_FAILURE, payload: error });
      });
  };
};
