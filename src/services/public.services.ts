import {loadAbort} from '../utils';
import axios from 'axios';

export const getTodos = () => {
  const controller = loadAbort();
  return {
    call: axios.get<any>('https://serverless.neomadara.vercel.app/api/todos', {
      signal: controller.signal,
    }),
    controller,
  };
};
