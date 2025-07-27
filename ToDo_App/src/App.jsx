import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"

function App() {

  const todoItems = [
    {
      name: "DSA",
      dueDate: "31-10-2025",
    },
    {
      name: "Dev",
      dueDate: "03-08-2025",
    },
  ]

  
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App
