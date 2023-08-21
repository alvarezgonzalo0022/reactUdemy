import { useReducer } from "react";

export const useTodo = (reducer, initialState = []) => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || initialState;
    }

    const [todos, dispatch] = useReducer(reducer, initialState, init);

    const handleNewTodo = (todo) => {
        const action = {
            type: 'ADD',
            payload: todo,
        }
        dispatch(action);
    }

    const handleRemoveTodo = (todo) => {
        const action = {
            type: 'REMOVE',
            payload: todo,
        }
        dispatch(action);
    }

    const handleToggleTodo = (todo) => {
        const action = {
            type: 'TOGGLE',
            payload: todo,
        }
        dispatch(action);
    }

    return {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => todo.done === false).length,
    }
}