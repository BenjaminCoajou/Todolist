// == Import npm
import React from 'react';

// == Import
import Todo from '../Todo'
import Terminated from '../Terminated';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <h1 className="title">Todo List</h1>
    <main className="main">
      <Todo />
      <Terminated />
    </main>
  </div>
);

// == Export
export default App;
