import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Page() {
  return <div>
    <div>
      <TodoForm />
      <TodoList />
    </div>
  </div>
}

// classname for above span = className={todo.completed ? "todo-text completed" : "todo-text"}