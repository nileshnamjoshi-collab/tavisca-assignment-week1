import * as auth from './reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';
import { ILink } from '../store/model/user';

export interface AppState {
  authState: auth.State;
  link: auth.State;
}

export const reducers = {
  auth: auth.reducer,
  link: auth.reducer,
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectLinkState = createFeatureSelector<AppState>('auth');

export default class LinkState {
  Link: Array<ILink>;
}

export const initializeState = (): LinkState => {
  return { Link: Array<ILink>() };
};
