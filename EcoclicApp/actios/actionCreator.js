import axios from "axios";
import ACTION_TYPES from "./acctionTypes";
export const login = (values) => {
  return (dispatch, getState) => {
    dispatch({ type: ACTION_TYPES.LOGIN_START });
    console.log("loggin start");
    console.log(values);

    axios
      .post("http://localhost:3000/auth/login", {
        username: values.username,
        password: values.password,
      })
      .then((responce) => {
        dispatch({ type: ACTION_TYPES.LOGIN_SUCCESS, payload: responce });
        console.log("succes");
      })
      .catch((error) => {
        // Alert.alert(respance.response.data);
        console.log("loggin failde on actioncreator");
        console.log(error);

        dispatch({ type: ACTION_TYPES.LOGIN_FAILURE, payload: error });
      });
  };
};
export const getArticlesForThatUser = (token) => {
  return (dispatch, getState) => {
    dispatch({ type: ACTION_TYPES.GET_ARTICLE_START });
    axios
      .get("http://localhost:3000/article/my_article", {
        headers: { auth: token },
      })
      .then((responce) => {
        console.log("article get succefully in action creator");
        dispatch({
          type: ACTION_TYPES.GET_ARTICLE_SUCCESS,
          payload: responce,
        });
      })
      .catch(
        (error = (error) => {
          console.log("article error action creator");
          console.log(error);

          dispatch({ type: ACTION_TYPES.GET_ARTICLE_FAILURE, payload: error });
        })
      );
  };
};
