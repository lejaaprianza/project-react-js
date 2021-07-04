import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";

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
