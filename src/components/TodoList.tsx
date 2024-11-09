import { AnimatePresence } from "framer-motion";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
    updateTask: (id: number) => void;
    deleteTask: (id: number) => void;
};

function TodoList({ todos, updateTask, deleteTask }: TodoListProps) {
    return (
        <ul className="p-4 w-full max-w-lg mt-6 z-10">
            <AnimatePresence>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </AnimatePresence>
        </ul>
    );
}

export default TodoList;
