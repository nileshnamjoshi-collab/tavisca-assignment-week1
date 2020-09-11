import { reducers } from './../../store/app.states';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';

export default {
  title: 'Example/login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {}),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
    }),
  ],
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args,
});

export const Login = Template.bind({});
Login.args = {
  user: {},
};
