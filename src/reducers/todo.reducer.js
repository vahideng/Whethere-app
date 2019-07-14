import * as actionsTypes from '../actions/types';


const initialState = {
  cards: [{
    todo : [],

  }],
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

      const checkElementIdStatus = {
        todoID: 0,
        progressID: 1,
        DoneID: 2
      };
      let status= checkElementIdStatus[action.elementId] || 0;
      
      return {
        ...state,
        cards: state.cards.map((card) => 
          card.id === payload.id ? { ...card, status: status } : card
        )
      };


      case actionsTypes.DELETE_DATA: {

        console.log(payload,"payload.id");
        

       let updatedCards=  state.cards.filter(item =>{
         console.log(item.id,"item.id");
         
       return item.id !== payload

       })

       console.log(updatedCards,"updatedCards");
       
        return {
          ...state,
          cards: updatedCards
        };


      }
    default:
      return state;
  }
}
