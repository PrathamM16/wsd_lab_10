import React, { useState } from 'react';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = (taskName) => {
    setTasks([...tasks, { name: taskName }]);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    const editedTaskName = prompt('Edit task name:', tasks[index].name);
    if (editedTaskName !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[index].name = editedTaskName;
      setTasks(updatedTasks);
      setEditIndex(-1);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <TaskForm onAddTask={handleAddTask} />
        </div>
        <div className="col-md-6">
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
