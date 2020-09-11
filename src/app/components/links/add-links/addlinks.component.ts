import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddLinks } from 'src/app/store/actions/auth.action';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { ListLinks, UpdateLinks } from '../../../store/actions/auth.action';
@Component({
  selector: 'app-add-links',
  templateUrl: './addlinks.component.html',
  styleUrls: ['./addlinks.component.css'],
})
export class AddLinksComponent implements OnInit {
  public linksForm: any;
  public linksData: Array<any>;
  public linksId: number;
  public showUpdateForm: boolean;
  public addLinksTitle = 'Add Links';
  public updateLinkTitle = 'Update Link';
  getState: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.linksForm = this.fb.group({
      id: [0, [Validators.required]],
      linksTitle: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength]],
    });

    this.activatedRoute.params.subscribe((param) => {
      this.linksId = param.id;
    });

    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getLinks();
    this.isRegisterFormToUpdate();
  }

  getLinks(): void {
    this.store.dispatch(new ListLinks());
    this.store.subscribe((data) => {
      if (data && data.link && data.link.links) {
        this.linksData = data.link.links;
      }
    });
  }

  onSubmit(link: any): void {
    this.store.dispatch(new AddLinks(link));
    this.store.dispatch(new ListLinks());
    this.router.navigate(['/list', { term: true }]);
  }

  isRegisterFormToUpdate(): void {
    if (this.linksId === undefined) {
      this.showUpdateForm = false;
    } else {
      this.showUpdateForm = true;
    }
  }

  onUpdateLink(link: any): void {
    this.store.dispatch(new UpdateLinks(link));
    this.store.dispatch(new ListLinks());
    this.router.navigate(['/list', { term: true }]);
  }

  openList(): void {
    this.router.navigate(['/list', { term: true }]);
  }
}
