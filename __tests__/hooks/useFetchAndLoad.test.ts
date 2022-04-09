import 'whatwg-fetch';
import {renderHook} from '@testing-library/react-hooks';
import {act} from 'react-test-renderer';
import useFetchAndLoad from '../../src/hooks/useFetchAndLoad';
import {loadAbort} from '../../src/utils';
import axios, {AxiosResponse} from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('useFetchAndLoad', () => {
  it('should return a successful API request', async () => {
    const {result} = renderHook(() => useFetchAndLoad());
    const url = 'endpoint.com/todos';
    let mock = new MockAdapter(axios);

    const responseData = [
      {_id: '1', completed: true, title: 'task 01'},
      {_id: '2', completed: true, title: 'task 02'},
      {_id: '3', completed: true, title: 'task 03'},
    ];

    mock.onGet(url).reply(200, responseData);

    const endpoint = () => {
      const controller = loadAbort();
      return {
        call: axios.get<any>(url, {
          signal: controller.signal,
        }),
        controller,
      };
    };

    expect(result.current.loading).toBe(false);

    await act(async () => {
      const getApiDAta = async () =>
        await result.current.callEndpoint(endpoint());

      const handlerPromise = async (
        asyncFn: () => Promise<AxiosResponse<any, any>>,
      ) => {
        return asyncFn().then(res => {
          return res.data;
        });
      };

      const todosApiResponse = await handlerPromise(getApiDAta);
      expect(todosApiResponse).toStrictEqual(responseData);
    });
  });
});
