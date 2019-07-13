// import { FETCH_TODOS, ADD_TODOS } from '../actions/types';

// const initialState = {
//   cards: [
//     {
//       id: 0,
//       text: 'Write a cool JS library',
//       status: 0,
//       order: 0,
//       inProgress: false,
//       todo: true,
//       done: false
//     },
//     {
//       id: 1,
//       text: 'Make it generic enough',
//       status: 0,
//       order: 1,
//       inProgress: false,
//       todo: false,
//       done: true
//     },
//     {
//       id: 2,
//       text: 'Write README',
//       status: 1,
//       order: 0,
//       inProgress: true,
//       todo: false,
//       done: false
//     },
//     {
//       id: 3,
//       text: 'Create some examples',
//       status: 1,
//       order: 1,
//       inProgress: false,
//       todo: false,
//       done: true
//     },
//     {
//       id: 4,
//       text:
//         'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
//       status: 2,
//       order: 0,
//       inProgress: false,
//       todo: true,
//       done: false
//     },
//     {
//       id: 5,
//       text: '???',
//       status: 2,
//       order: 1,
//       inProgress: true,
//       todo: false,
//       done: false
//     },
//     {
//       id: 6,
//       text: 'PROFIT',
//       status: 2,
//       order: 2,
//       inProgress: false,
//       todo: true,
//       done: false
//     }
//   ]
// };
// export default function(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case FETCH_TODOS:
//       return {
//         ...state
//       };
//     case ADD_TODOS:
//       return {
//         ...state,
//         cards: state.cards.concat({
//           id: payload.id,
//           text: payload.text,
//           status: payload.status,
//           order: payload.order,
//           inProgress: payload.inProgress,
//           todo: payload.todo,
//           done: payload.done
//         })
//       };

//     //     case DRAG_DROP_TODOS:
//     //       state
//     default:
//       return state;
//   }
// }
