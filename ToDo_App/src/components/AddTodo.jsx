import css from "./AddTodo.module.css"

function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input className={css.todoInput} type="text" placeholder="Enter TODO here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success my-btn">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;