import { motion } from "framer-motion";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, input, setInput, addTask, updateTask, deleteTask } = useTodos();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200 flex flex-col items-center py-10 relative overflow-hidden">
      <motion.h1 className="text-5xl font-extrabold mb-8 text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Todo List
      </motion.h1>
      <form onSubmit={handleSubmit} className="p-4 flex items-center gap-4 w-full max-w-lg z-10">
        <motion.input
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 border-2 border-gray-700 rounded-full p-3 px-5 focus:outline-none focus:ring-4 focus:ring-gray-500 transition bg-gray-800 text-gray-100 placeholder-gray-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Añade una nueva tarea."
        />
        <motion.button
          className="bg-green-600 rounded-full px-6 py-2 font-semibold transition hover:bg-green-500 active:scale-95 shadow-lg"
          onClick={addTask}
          whileTap={{ scale: 0.9 }}
        >
          Add
        </motion.button>
      </form>
      <TodoList todos={todos} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
