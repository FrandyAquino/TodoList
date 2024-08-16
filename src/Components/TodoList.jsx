import React from 'react';
import TodoItem from '@/Components/TodoItem';

const TodoList = ({ tasks, deleteTask, completeTask }) => {
    return (
      <div>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    );
  };
  
  export default TodoList;