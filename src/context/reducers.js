import Cookies from 'js-cookie';

export const initialState = {
  user: {},
  isLoggedIn: false,
  snackbarOpen: false,
  snackbarMessage: '',
  snackbarType: '',
};

export const reducers = (state, action) => {
  switch (action.type) {
    // reducer for auth
    case 'LOGIN_SUCCESS': {
      Cookies.set('@userData', action.data, { expires: 1 });
      return {
        ...state,
        user: action.data,
        isLoggedIn: true,
      };
    }

    case 'LOGOUT_SUCCESS': {
      Cookies.remove();
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    }

    case 'USER_LOGGED_IN': {
      return {
        ...state,
        user: action.data,
        isLoggedIn: true,
      };
    }
    // Reducers for snackbar

    case 'SNACKBAR_SUCCESS': {
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.data.message,
        snackbarType: 'success',
      };
    }

    case 'SNACKBAR_FAIL': {
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.data.message,
        snackbarType: 'fail',
      };
    }

    case 'SNACKBAR_INFO': {
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.data.message,
        snackbarType: 'info',
      };
    }

    case 'SNACKBAR_CLOSE': {
      return {
        ...state,
        snackbarOpen: false,
        snackbarMessage: '',
        snackbarType: '',
      };
    }

    default:
      return state;
  }
};
