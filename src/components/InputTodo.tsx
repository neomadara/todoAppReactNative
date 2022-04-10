import React, {FC, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface Props {
  submitHandler: (text: string) => void;
}

const InputTodo: FC<Props> = () => {
  const [text, setText] = useState('');

  const changeHandler = (val: string) => {
    setText(val);
  };

  const validationHandler = () => {
    if (text.length < 3) {
      console.log('texto menor que 3 caracteres');
    }
  };

  return (
    <View testID="input-component">
      <TextInput
        onChangeText={changeHandler}
        style={styles.input}
        placeholder="new todo..."
        value={text}
        onSubmitEditing={() => validationHandler()}
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
