import { useEffect } from "react"
import TodoList from "./TodoList"
import TodoAdd from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"
import { todoReducer } from "./todoReducer"


const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodo(todoReducer);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])

    return (
    <>
        <h1>TodoApp: { todosCount } <small>pendientes: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} handleRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo}/>
            </div>
            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr />

                <TodoAdd handleFormSubmit={handleNewTodo}/>
            </div>
        </div>

    </>
    )
}

export default TodoApp