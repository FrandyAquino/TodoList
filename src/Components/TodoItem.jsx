import React from 'react';
import { faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/Styles/TodoItem/TodoItem.module.css';

const TodoItem = ({ task, deleteTask, completeTask }) => {
    const handleDelete = () => {
      deleteTask(task.id);
    };
  
    const handleComplete = () => {
      completeTask(task.id);
    };
  
    return (
      <div
        className={`${styles.todoItem} ${task.completed ? styles.completed : styles.pending}`}
      >
        <span className={styles.taskText}>{task.text}</span>
        <div className={styles.buttons}>
          <button className={styles.deleteButton} onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className={styles.completeButton} onClick={handleComplete}>
            <FontAwesomeIcon icon={task.completed ? faUndo : faCheck} />
          </button>
        </div>
      </div>
    );
  };
  
  export default TodoItem;