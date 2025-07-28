import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import "./App.css"
import { useState } from "react"

function App() {

  const initialTodoItems = [
    {
      name: "DSA",
      dueDate: "31-10-2025",
    },
    {
      name: "Dev",
      dueDate: "03-08-2025",
    },
  ]

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    
    const newTodoItems = [...todoItems,{name: itemName, dueDate: itemDueDate}];

    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) => {
    
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);

    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length == 0 &&<WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App
