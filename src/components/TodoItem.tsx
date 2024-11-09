import { motion } from "framer-motion";
import { Todo } from "../types";

type TodoItemProps = {
    todo: Todo;
    updateTask: (id: number) => void;
    deleteTask: (id: number) => void;
};

function TodoItem({ todo, updateTask, deleteTask }: TodoItemProps) {
    return (
        <motion.li
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, height: 0, margin: 0, padding: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-gray-900 bg-opacity-80 rounded-full p-4 mb-4 flex items-center gap-4 shadow-lg transition hover:shadow-xl hover:bg-opacity-90 overflow-hidden"
        >
            <motion.input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTask(todo.id)}
                whileTap={{ scale: 1.1 }}
                className="cursor-pointer accent-green-500"
            />
            <motion.span
                className={`flex-1 ${todo.completed ? "line-through text-gray-500" : "text-gray-300"} transition-colors duration-300`}
            >
                {todo.text}
            </motion.span>
            <motion.button
                className="bg-red-600 text-white rounded-full px-3 py-1 transition hover:bg-red-500 active:scale-95 shadow-md"
                onClick={() => deleteTask(todo.id)}
                whileTap={{ scale: 0.9 }}
            >
                Delete
            </motion.button>
        </motion.li>
    );
}

export default TodoItem;
