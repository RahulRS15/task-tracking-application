import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
      <p>{task.status}</p>
      <p>{task.priority}</p>
      <button onClick={() => updateTask(task._id, { ...task, status: 'Completed' })}>Complete</button>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
