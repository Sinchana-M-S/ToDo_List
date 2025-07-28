import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css"

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return <>
    <div className={css.itemsContainer}>
      {todoItems.map(item => <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>)}
    </div>
  </>;
}

export default TodoItems;