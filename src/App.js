import logo from './logo.svg';
import './App.css';
import TaskInput from './taskInput';
import TaskList from './taskList';
import React from 'react';
import { TaskProvider } from './taskContext';

function App() {

  return (
    <TaskProvider>
      <div className="App">
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList  />
    </div>
    </TaskProvider>

  );
}

export default App;
