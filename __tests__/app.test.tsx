import 'react-native';
import React from 'react';
import App from '../App';
import {render, waitFor} from '@testing-library/react-native';
import 'whatwg-fetch';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

let component: any;
let mock: any;
const url = 'endpoint.com/todos';
const responseData = [
  {_id: '1', completed: true, title: 'task 01'},
  {_id: '2', completed: true, title: 'task 02'},
  {_id: '3', completed: true, title: 'task 03'},
];

describe('<App /> Component', () => {
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet(url).reply(200, responseData);
    component = render(<App />);
  });
  afterEach(() => {
    mock.restore();
  });

  it('it should render a the initial view state', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId('header-component')).toBeDefined();
    expect(component.queryAllByTestId('input-component').length).toEqual(0);
  });
  it('should load the TODOS from the API successfully', async () => {
    await waitFor(() =>
      expect(component.getByTestId('list-component')).toBeDefined(),
    );
  });
});
