import Cookies from 'js-cookie';

export const initialState = {
  user: {},
  cart: {
    products: [],
    total: '',
  },
  isLoggedIn: false,
  snackbarOpen: false,
  snackbarMessage: '',
  snackbarType: '',
  dialogOpen: false,
  dialogTitle: '',
  dialogCaption: '',
  dialogOnConfirm: undefined,
  dialogOnLoad: false,
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
      Cookies.remove('@userData');
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
    case 'TOKEN_REFRESHED': {
      Cookies.set('@userData', action.data, { expires: 1 });
      return {
        ...state,
        user: action.data,
        isLoggedIn: true,
      };
    }

    // Reducer for Cart
    case 'CART_FETCH_PRODUCTS': {
      return {
        ...state,
        cart: {
          total: action.data.total,
          products: action.data.products,
        },
      };
    }

    case 'CART_DELETE_PRODUCT': {
      let newTotal = state.cart.total;
      let newProducts = state.cart.products;
      newProducts = newProducts.filter(function(product) {
        if (product.product_id === action.data.product_id) {
          newTotal -= product.amount * product.product.price;
        }
        return product.product_id !== action.data.product_id;
      });

      return {
        ...state,
        cart: {
          total: newTotal,
          products: newProducts,
        },
      };
    }

    case 'CART_CHECKOUT': {
      return {
        ...state,
        cart: {
          total: '',
          products: [],
        },
      };
    }

    case 'CART_ADD_PRODUCT': {
      const productIndex = action.data.index;

      return {
        ...state,
        cart: {
          total: state.cart.total + parseInt(state.cart.products[productIndex].product.price, 10),
          products: [
            ...state.cart.products.slice(0, productIndex),
            {
              ...state.cart.products[productIndex],
              amount: parseInt(state.cart.products[productIndex].amount, 10) + 1,
            },
            ...state.cart.products.slice(productIndex + 1),
          ],
        },
      };
    }

    case 'CART_MIN_PRODUCT': {
      const productIndex = action.data.index;

      return {
        ...state,
        cart: {
          total: state.cart.total - parseInt(state.cart.products[productIndex].product.price, 10),
          products: [
            ...state.cart.products.slice(0, productIndex),
            {
              ...state.cart.products[productIndex],
              amount: parseInt(state.cart.products[productIndex].amount, 10) - 1,
            },
            ...state.cart.products.slice(productIndex + 1),
          ],
        },
      };
    }

    case 'CART_MODIFY_FAIL': {
      const { index, lastTotal, lastAmount } = action.data;

      return {
        ...state,
        cart: {
          total: parseInt(lastTotal, 10),
          products: [
            ...state.cart.products.slice(0, index),
            {
              ...state.cart.products[index],
              amount: parseInt(lastAmount, 10),
            },
            ...state.cart.products.slice(index + 1),
          ],
        },
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

    // Reducer for dialog
    case 'DIALOG_OPEN': {
      return {
        ...state,
        dialogOpen: true,
        dialogTitle: action.data.title,
        dialogCaption: action.data.caption,
        dialogOnConfirm: action.data.confirmAction,
      };
    }

    case 'DIALOG_PROCESS_ON': {
      return {
        ...state,
        dialogOnLoad: true,
      };
    }

    case 'DIALOG_PROCESS_DONE': {
      return {
        ...state,
        dialogOpen: false,
        dialogTitle: '',
        dialogCaption: '',
        dialogOnConfirm: undefined,
        dialogOnLoad: false,
      };
    }

    default:
      return state;
  }
};
