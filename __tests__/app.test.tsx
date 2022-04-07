import 'react-native';
import React from 'react';
import App from '../App';
import {render, waitFor} from '@testing-library/react-native';
import 'whatwg-fetch';

let component: any;

describe('<App /> Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {_id: '1', completed: true, title: 'task 01'},
            {_id: '2', completed: true, title: 'task 02'},
            {_id: '3', completed: true, title: 'task 03'},
          ]),
      }),
    ) as jest.Mock;
    component = render(<App />);
  });
  afterEach(() => {
    global.fetch = jest.fn();
  });

  it('it should render a the initial view state', () => {
    expect(component).toBeDefined();
    expect(component.getByTestId('header-component')).toBeDefined();
    expect(component.queryAllByTestId('input-component').length).toEqual(1);
  });
  it('should load the TODOS from the API successfully', async () => {
    await waitFor(() =>
      expect(component.getByTestId('list-component')).toBeDefined(),
    );
  });
});
