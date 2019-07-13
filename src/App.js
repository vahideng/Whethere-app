import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodosContainer from './containers/todosContainer';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <TodosContainer />
    </Provider>
  );
}

export default App;
