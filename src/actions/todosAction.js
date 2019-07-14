import * as actionTypes from './types';

import DBData from '../data/db.json';

const dataBase = DBData[0].cards;

export const fetchTodosInit = () => dispatch => {
  dispatch({
    type: actionTypes.FETCH_TODOS_INIT
  });
};

export const fetchTodosFailed = () => dispatch => {
  dispatch({
    type: actionTypes.FETCH_TODOS_FAILED
  });
};

export const fetchTodosSuccess = data => dispatch => {
  dispatch({
    type: actionTypes.FETCH_TODOS_SUCCESS,
    payload: data
  });
};

export const fetchData = () => {
  // readData
  return dispatch => {
    dispatch(fetchTodosInit());
    dispatch(fetchTodosSuccess(dataBase));
  };
};

export const add = (text, id, status, order) => dispatch => {
  let data = { text, id, status, order };

  dispatch({
    type: actionTypes.ADD_TODOS,
    payload: data
  });
};

export const changeTarget = (
  text,
  id,
  status,
  order,
  elementId
) => dispatch => {
  let data = { text, id, status, order };

  dispatch({
    type: actionTypes.CHANGE_TARGET,
    payload: data,
    elementId
  });
};



export const deleteData=(id)=>{

  

return {
  type : actionTypes.DELETE_DATA,
  payload: id
}
}