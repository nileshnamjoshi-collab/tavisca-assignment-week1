import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { AddLinksComponent } from './addlinks.component';
import { reducers } from '../../../store/app.states';

export default {
  title: 'Example/addLinks',
  component: AddLinksComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
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

const Template: Story<AddLinksComponent> = (args: AddLinksComponent) => ({
  component: AddLinksComponent,
  props: args,
});

export const addSport = Template.bind({});
addSport.args = {
  user: {},
};
