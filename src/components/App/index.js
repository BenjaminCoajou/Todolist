// == Import npm
import React from 'react';

// == Import
import Todo from '../../containers/Todo'
import Terminated from '../Terminated';
import Newtask from '../../containers/NewTask';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <h1 className="title">Todo List</h1>
    <main className="main">
      <Newtask />
      <div className="status">
      <Todo />
      <Terminated />
      </div>
    </main>
  </div>
);

// == Export
export default App;
