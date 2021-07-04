import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/lejaaprianza/project-react-js/users"
      )
      .then(function (response) {
        // handle success
        dispatch({
          type: GET_USERS_LIST,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.data.data);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.response.data.data,
          },
        });
      });
  };
};
export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/lejaaprianza/project-react-js/users/" +
          id
      )
      .then(function (response) {
        // handle success
        dispatch({
          type: GET_USERS_DETAIL,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.response.data.data,
          },
        });
      });
  };
};
export const deleteUsersDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: { data: false, errorMessage: false },
    });
  };
};
