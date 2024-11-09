import { useState, useEffect } from "react";
import { Todo } from "../types";

function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const data = localStorage.getItem("todos");
        if (data) {
            setTodos(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTask = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput("");
        }
    };

    const deleteTask = (id: number) => {
        setTodos(todos.filter((i) => i.id !== id));
    };

    const updateTask = (id: number) => {
        setTodos(
            todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    };

    return { todos, input, setInput, addTask, deleteTask, updateTask };
}

export default useTodos;
