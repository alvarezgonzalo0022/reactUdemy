import TodoItem from "./TodoItem"

const TodoList = ({ todos, handleRemoveTodo, onToggleTodo }) => {

  return (
    <ul className="list-group">
        {todos.map((todo) => {
            return <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        onDeleteTodo={handleRemoveTodo} 
                        onToggleTodo={onToggleTodo}
                    />
        })}
    </ul>
  )
}

export default TodoList