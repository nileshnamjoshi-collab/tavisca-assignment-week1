import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddLinksComponent } from './addlinks.component';

describe('AddLinksComponent', () => {
  let component: AddLinksComponent;
  let fixture: ComponentFixture<AddLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddLinksComponent],
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
    fixture = TestBed.createComponent(AddLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'Add Link'`, () => {
    fixture.detectChanges();
    expect(component.addLinksTitle).toContain('Add Link');
  });

  it(`should render title contain 'Add Link'`, () => {
    const compiled = fixture.nativeElement;
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain(
      component.addLinksTitle
    );
  });

  it(`should have title 'Update Link'`, () => {
    fixture.detectChanges();
    expect(component.updateLinkTitle).toContain('Update Link');
  });

  it(`should have showUpdateForm declared`, () => {
    fixture.detectChanges();
    expect(component.showUpdateForm).toBeDefined();
  });

  it('should have getLinks Called', () => {
    spyOn(component, 'getLinks');
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.getLinks).toHaveBeenCalled();
  });

  it('should have isRegisterFormToUpdate Called', () => {
    spyOn(component, 'isRegisterFormToUpdate');
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.isRegisterFormToUpdate).toHaveBeenCalled();
  });
});
