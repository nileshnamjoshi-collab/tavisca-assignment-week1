import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNUP = '[Auth] Sighup',
  SIGNUP_SUCCESS = '[Auth] Sighup Success',
  SIGNUP_FAILURE = '[Auth] Sighup Failure',
  LOGOUT = '[Auth] Logout',
}

export const LIST_LINKS = '[Links] Fetch link';
export const ADD_LINKS = '[Links] Add link';
export const UPDATE_LINKS = '[Links] Update link';
export const DELETE_LINKS = '[Links] Delete link';
export const LIST_DATA_SUCCESS = '[Links] List Success';
export const ADD_LINKS_SUCCESS = '[Links] Add link success';
export const DELETE_LINKS_SUCCESS = '[Links] Delete link success';
export const UPDATE_LINKS_SUCCESS = '[Links] Update link success';

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class ListLinks implements Action {
  readonly type = LIST_LINKS;
}

export class ListDataSuccess implements Action {
  readonly type = LIST_DATA_SUCCESS;
  constructor(public payload: any[]) {}
}

export class AddLinks implements Action {
  readonly type = ADD_LINKS;
  constructor(public payload: any) {}
}

export class AddLinksSuccess implements Action {
  readonly type = ADD_LINKS_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateLinks implements Action {
  readonly type = UPDATE_LINKS;
  constructor(public payload: any) {}
}

export class UpdateLinksSuccess implements Action {
  readonly type = UPDATE_LINKS_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteLinks implements Action {
  readonly type = DELETE_LINKS;
  constructor(public payload: string) {}
}

export class DeleteLinksSuccess implements Action {
  readonly type = DELETE_LINKS_SUCCESS;
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | LogOut
  | ListLinks
  | ListDataSuccess
  | AddLinks
  | AddLinksSuccess
  | UpdateLinks
  | UpdateLinksSuccess
  | DeleteLinks
  | DeleteLinksSuccess;
