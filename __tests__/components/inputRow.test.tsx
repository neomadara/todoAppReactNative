import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import InputTodo from '../../src/components/InputTodo';

describe('<InputRow>', () => {
  it('Must validate if Todo value is empty', () => {
    const text = '';
    const handlerEvent = jest.fn();

    const {getByTestId} = render(<InputTodo submitHandler={handlerEvent} />);

    fireEvent(getByTestId('text-input'), 'onChangeText', text);
    fireEvent(getByTestId('text-input'), 'submitEditing');

    expect(handlerEvent).toHaveBeenCalledWith({
      error: 'value is empty',
      value: '',
    });
  });
  it('Must validate if Todo value is minor that 3 characters', () => {
    const text = 'ab';
    const handlerEvent = jest.fn();

    const {getByTestId} = render(<InputTodo submitHandler={handlerEvent} />);

    fireEvent(getByTestId('text-input'), 'onChangeText', text);
    fireEvent(getByTestId('text-input'), 'submitEditing');

    expect(handlerEvent).toHaveBeenCalledWith({
      error: 'value is minor thant 3 characters',
      value: '',
    });
  });
});
