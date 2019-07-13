import * as actionTypes from './types';
import uuid from 'uuid/v4';

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

  console.log(data,"ppppp");
  
  dispatch({
    type: actionTypes.FETCH_TODOS_SUCCESS,
    payload: data
  });
};
export const addTodos = data => { // readData
  return dispatch => { 
    dispatch(fetchTodosInit());
    dispatch(fetchTodosSuccess(data));
  };
};


export const add = (text,id,status,order) => dispatch => {


  let data ={text,id,status,order}
  console.log(data,"{{{{{{{{{{");
  
  
  dispatch({
    type: actionTypes.ADD_TODOS,
    payload: data
  });
};

export const changeTarget = (text,id,status,order, elementId) => dispatch => {


  let data ={text,id,status,order}
  console.log(data,"}}}}}}}}}");
  
  
  dispatch({
    type: actionTypes.CHANGE_TARGET,
    payload: data,
    elementId
  });
};







