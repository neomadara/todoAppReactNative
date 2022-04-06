/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  FlatList,
} from 'react-native';

import {Todo} from './src/models';
import {useFetchAndLoad} from './src/hooks';
import {getTodos} from './src/services/public.services';
import InputTodo from './src/components/InputTodo';
import TodoRow from './src/components/TodoRow';
import {useAsync} from './src/hooks';

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const {loading, callEndpoint} = useFetchAndLoad();

  const submitHandler = () => {};

  const todosAdapter = (response: any) => {
    setTodos(response);
  };

  const getApiData = async () => await callEndpoint(getTodos());

  useAsync(getApiData, todosAdapter, () => {});

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
      <View style={styles.container}>
        <View style={styles.header} testID="header-component">
          <Text style={styles.headerTitle}>My Todos</Text>
        </View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.content}>
            <InputTodo submitHandler={submitHandler} />
            <View style={styles.list} testID="list-component">
              <FlatList
                data={todos}
                // @ts-ignore
                keyExtractor={(item: Todo) => item._id}
                renderItem={({item}) => <TodoRow item={item} />}
              />
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  headerTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

export default App;
