export const AuthInitialState = {
  user: {},
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        user: action.data,
      };
    }

    case 'LOGOUT_SUCCESS': {
      return {
        ...state,
        user: {},
      };
    }

    default:
      return state;
  }
};
