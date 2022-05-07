import React, {FC, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface Props {
  submitHandler: (result: {error: string; value: string}) => void;
}

const InputTodo: FC<Props> = ({submitHandler}) => {
  const [todo, setTodo] = useState('');

  const textInputHandler = (value: string) => {
    if (value === '') {
      submitHandler({value: '', error: 'value is empty'});
    } else if (value.length < 3) {
      submitHandler({value: '', error: 'value is minor thant 3 characters'});
    } else {
      submitHandler({value: todo, error: ''});
    }
  };

  return (
    <View testID="input-component">
      <TextInput
        testID="text-input"
        style={styles.input}
        placeholder="new todo..."
        onChangeText={text => setTodo(text)}
        onSubmitEditing={() => {
          textInputHandler(todo);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default InputTodo;
