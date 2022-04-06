import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Todo} from '../models';

interface Props {
  item: Todo;
}

const TodoRow: FC<Props> = ({item}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
  },
});

export default TodoRow;
