import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  // get the newTodo from NewTodo.js here inside this function
  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <NewTodo handleAddTodo={handleAddTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
