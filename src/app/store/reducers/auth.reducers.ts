import { IUser, ILink } from '../model/user';
import {
  AuthActionTypes,
  All,
  LIST_LINKS,
  ADD_LINKS,
  UPDATE_LINKS,
  DELETE_LINKS,
  LIST_DATA_SUCCESS,
  ADD_LINKS_SUCCESS,
  DELETE_LINKS_SUCCESS,
  UPDATE_LINKS_SUCCESS,
} from '../actions/auth.action';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: IUser | null;
  // error message
  errorMessage: string | null;
  links: ILink[];
  added: boolean | null;
  updated: boolean | null;
  deleted: boolean | null;
  loaded: boolean | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null,
  links: [],
  added: null,
  updated: null,
  loaded: null,
  deleted: null,
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          username: action.payload.username,
          password: action.payload.password,
        },
        errorMessage: null,
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.',
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          username: action.payload.username,
        },
        errorMessage: null,
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    case ADD_LINKS: {
      return {
        ...state,
      };
    }
    case LIST_LINKS: {
      return {
        ...state,
      };
    }
    case DELETE_LINKS: {
      return {
        ...state,
      };
    }
    case UPDATE_LINKS: {
      return {
        ...state,
      };
    }
    case LIST_DATA_SUCCESS: {
      return {
        ...state,
        links: [...action.payload],
        errorMessage: null,
        loaded: true,
      };
    }
    case ADD_LINKS_SUCCESS: {
      return {
        ...state,
        errorMessage: 'The Links is added successfully!',
        added: true,
      };
    }
    case DELETE_LINKS_SUCCESS: {
      return {
        ...state,
      };
    }
    case UPDATE_LINKS_SUCCESS: {
      return {
        ...state,
        errorMessage: 'The Links is updated successfully!',
        added: true,
      };
    }

    default: {
      return state;
    }
  }
}
