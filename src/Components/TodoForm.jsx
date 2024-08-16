import React, { useState } from 'react';
import styles from '@/Styles/TodoForm/TodoForm.module.css';

const TodoForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskText.trim()) {
        addTask(taskText);
        setTaskText('');
      }
    };
  
    return (
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <input
          className={styles.taskInput}
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Añadir nueva tarea..."
        />
        <button className={styles.addButton} type="submit">
          Add
        </button>
      </form>
    );
  };
  
  export default TodoForm;