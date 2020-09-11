import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, catchError, mergeMap } from 'rxjs/operators';
import {
  AuthActionTypes,
  SignUp,
  SignUpSuccess,
  SignUpFailure,
  LIST_LINKS,
  ListDataSuccess,
  ADD_LINKS,
  AddLinksSuccess,
  AddLinks,
  DeleteLinksSuccess,
  DELETE_LINKS,
  DeleteLinks,
  UPDATE_LINKS,
  UpdateLinks,
  UpdateLinksSuccess,
  ListLinks,
} from '../actions/auth.action';
import { LinksListService } from 'src/app/service/links.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private router: Router,
    private linksListService: LinksListService
  ) {}

  // effects go here
  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.username);
      this.router.navigate(['/list', { term: true }]);
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE),
    tap(() => {
      alert('Please Enter Valid User Name and Password');
    })
  );

  @Effect({ dispatch: false })
  LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => {
      window.alert('You are Logout Successfully');
    })
  );

  @Effect({ dispatch: true })
  SignUp: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: SignUp) => action.payload),
    mergeMap((payload) => {
      return this.linksListService
        .addLogin(payload)
        .pipe(
          map((data) => {
            if (data) {
              window.alert('User Added Successfully');
              return new SignUpSuccess(data);
            }
          })
        )
        .pipe(
          catchError(() => {
            return of(new SignUpFailure({ error: 'error' }));
          })
        );
    })
  );

  @Effect({ dispatch: true })
  ListLinks: Observable<any> = this.actions.pipe(
    ofType(LIST_LINKS),
    map((action: ListLinks) => action),
    mergeMap(() => {
      return this.linksListService
        .getLinks()
        .pipe(map((data) => new ListDataSuccess(data)));
    })
  );

  @Effect({ dispatch: true })
  AddLinks: Observable<any> = this.actions.pipe(
    ofType(ADD_LINKS),
    map((action: AddLinks) => action.payload),
    mergeMap((payload) => {
      return this.linksListService.addLink(payload).pipe(
        map((data) => {
          if (data) {
            return new AddLinksSuccess(data);
          }
        })
      );
    })
  );

  @Effect({ dispatch: true })
  DeleteLinks: Observable<any> = this.actions.pipe(
    ofType(DELETE_LINKS),
    map((action: DeleteLinks) => action.payload),
    mergeMap((payload) => {
      return this.linksListService.deleteLinksById(payload).pipe(
        map((data) => {
          if (data) {
            window.alert('Link Deleted Successfully');
            return new DeleteLinksSuccess();
          }
        })
      );
    })
  );

  @Effect({ dispatch: true })
  UpdateLinks: Observable<any> = this.actions.pipe(
    ofType(UPDATE_LINKS),
    map((action: UpdateLinks) => action.payload),
    mergeMap((payload) => {
      return this.linksListService.updateLink(payload).pipe(
        map((data) => {
          if (data) {
            window.alert('Link Updated Successfully');
            return new UpdateLinksSuccess(data);
          }
        })
      );
    })
  );
}
