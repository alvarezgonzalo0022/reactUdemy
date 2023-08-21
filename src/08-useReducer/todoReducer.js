
export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...initialState, action.payload];
        case 'REMOVE':
            return initialState.filter(todo => todo.id !== action.payload.id);
        case 'TOGGLE':
            return initialState.map(todo => (todo.id === action.payload.id) ? {...todo, done: !todo.done} : todo);
    
        default:
            return initialState;
    }
}