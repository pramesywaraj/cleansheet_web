export const AuthInitialState = {
  user: {},
  isLoggedIn: false,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        user: action.data,
        isLoggedIn: true,
      };
    }

    case 'LOGOUT_SUCCESS': {
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    }

    default:
      return state;
  }
};
