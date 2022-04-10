import React from 'react';
import 'whatwg-fetch';
import {fireEvent, render} from '@testing-library/react-native';
import InputTodo from '../../src/components/InputTodo';

describe('< Input />', () => {
  it('should not allow blank messages', () => {
    const submitHandler = () => {};
    const {getByPlaceholderText} = render(
      <InputTodo submitHandler={submitHandler} />,
    );
    fireEvent.changeText(getByPlaceholderText('new todo...'), '');
    // show alert with message !

  });
  it('should not allow less that 3  characters of length');
});
