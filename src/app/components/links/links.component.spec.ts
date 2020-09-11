import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinksComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'Links details'`, () => {
    fixture.detectChanges();
    expect(component.tableTitle).toContain('Links details');
  });

  it(`should render title contain 'Links details'`, () => {
    const compiled = fixture.nativeElement;
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(compiled.querySelector('h2').textContent).toContain('Links details');
  });

  it('should have userLoginStatus false', () => {
    expect(component.userLoginStatus).toBeFalsy();
  });

  it('should have linksData empty', () => {
    expect(component.linksData.length).toEqual(0);
  });

  it('should have loginData empty', () => {
    expect(component.linksData.length).toEqual(0);
  });
});
