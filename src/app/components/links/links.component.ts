import { ListLinks } from './../../store/actions/auth.action';
import { LinksListService } from '../../service/links.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { DeleteLinks } from '../../store/actions/auth.action';

@Component({
  selector: 'app-listing-page',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  providers: [LinksListService],
})
export class LinksComponent implements OnInit {
  public headerTitle = 'Links';
  public loginData: Array<any> = [];
  public linksData = [];
  public userLoginStatus = false;
  public tableTitle = 'Links details';
  getState: Observable<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.store.dispatch(new ListLinks());
    this.store.subscribe((data) => {
      if (data && data.link && data.link.links) {
        this.linksData = data.link.links;
      }
    });

    this.activatedRoute.params.subscribe(
      (param) => {
        this.userLoginStatus = param.term;
      },
      (error) => {
        console.log('Error in Fetch Route Parameter');
      }
    );
  }

  updateLinks(id: any): void {
    this.router.navigate(['/addLinks', id]);
  }

  deleteLinks(id: any): void {
    if (confirm('Are you sure to delete Link')) {
      this.store.dispatch(new DeleteLinks(id));
      this.store.dispatch(new ListLinks());
    } else {
    }
  }

  addLinks(): void {
    this.router.navigate(['/addLinks']);
  }
}
