import { FETCH_TODOS, ADD_TODOS } from './types';
import uuid from 'uuid/v4';

export const fetchTodos = () => dispatch => {
  dispatch({
    type: FETCH_TODOS
  });
};
export const addTodos = text => {
  return {
    type: ADD_TODOS, 
    payload: {
      id: uuid(),
      text,
      status: 0,
      order: 0,
      inProgress: false,
      todo: true,
      done: false
    }
  };
};
