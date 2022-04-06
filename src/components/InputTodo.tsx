import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface Props {
  submitHandler: (text: string) => void;
}

const InputTodo: FC<Props> = () => {
  return (
    <View testID="input-component">
      <TextInput style={styles.input} placeholder="new todo..." />
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
