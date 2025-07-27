import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css"

const TodoItems = ({ todoItems }) => {
  return <>
    <div className={css.itemsContainer}>
      {todoItems.map(item => <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>)}
    </div>
  </>;
}

export default TodoItems;