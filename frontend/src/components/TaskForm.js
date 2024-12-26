import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      name: '',
      description: '',
      dueDate: '',
      status: 'Pending',
      priority: 'Low',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={task.name} onChange={handleChange} placeholder="Task Name" required />
      <input type="text" name="description" value={task.description} onChange={handleChange} placeholder="Description" required />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <select name="status" value={task.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
