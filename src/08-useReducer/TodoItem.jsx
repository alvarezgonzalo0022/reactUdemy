
const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
            className={`align-self-center ${ todo.done ? 'text-decoration-line-through': ""}`}
            onClick={() => onToggleTodo(todo)}
        >
            { todo.desc }
        </span>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(todo)}>Borrar</button>
    </li>
  )
}

export default TodoItem