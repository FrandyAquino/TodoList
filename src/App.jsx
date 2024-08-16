// src/Pages/App.jsx

import React, { useState, useEffect } from 'react';
import TodoForm from '@/Components/TodoForm';
import TodoList from '@/Components/TodoList';
import styles from '@/Styles/App.module.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>TodoList</h1>
      <TodoForm addTask={addTask} />
      <div className={styles.taskContainers}>
        <div className={`${styles.taskContainer} ${styles.pendingContainer}`}>
          <h2 className={styles.containerTitle}>Tareas pendientes</h2>
          <TodoList tasks={pendingTasks} deleteTask={deleteTask} completeTask={completeTask} />
        </div>
        <div className={`${styles.taskContainer} ${styles.completedContainer}`}>
          <h2 className={styles.containerTitle}>Tareas completadas</h2>
          <TodoList tasks={completedTasks} deleteTask={deleteTask} completeTask={completeTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
