import * as actionsTypes from '../actions/types';

const initialState = {
  cards: [],
  loading: false,
  message: ''
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.FETCH_TODOS_INIT:
      return {
        ...state,
        loading: true
      };

    case actionsTypes.FETCH_TODOS_FAILED:
      return {
        ...state,
        loading: false,
        cards: [],
        message: 'Try agian  :( '
      };

    case actionsTypes.FETCH_TODOS_SUCCESS:
      console.log(payload, 'payload');

      return {
        ...state,
        loading: false,
        cards: payload,
        message: ''
      };

    case actionsTypes.ADD_TODOS:
      return {
        ...state,
        cards: [...state.cards, payload]
      };

    case actionsTypes.CHANGE_TARGET:
      let status = 0;

      if (action.elementId === 'todoID') {
        status = 0;
      }
      if (action.elementId === 'progressID') {
        status = 1;
      }
      if (action.elementId === 'DoneID') {
        status = 2;
      }

      return {
        ...state,
        cards: state.cards.map((x, i) =>
          x.id === payload.id ? { ...x, status: status } : x
        )
      };

    default:
      return state;
  }
}
