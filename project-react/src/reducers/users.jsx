import { GET_USERS_LIST } from "../actions/userAction";

let initialState = {
  title: "Leja Aprianza",
  getUsersList: false,
  errorUsersList: false,
  getUsersDetail: false,
  errorUsersDetail: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
export default users;
