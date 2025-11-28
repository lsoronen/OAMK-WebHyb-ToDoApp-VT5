import { useReducer, useState } from 'react';
import { Item } from '../types/Item';

type Action =
    | { type: 'ADD'; payload: string }
    | { type: 'TOGGLE'; payload: string }
    | { type: 'REMOVE'; payload: string };

function todoReducer(state: Item[], action: Action): Item[] {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                { id: Date.now().toString(), name: action.payload, completed: false }
            ];

        case 'TOGGLE':
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, completed: !item.completed }
                    : item
            );

        case 'REMOVE':
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }
}

export function useTodos() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [input, setInput] = useState<string>('');

    const addTodo = () => {
        if (!input.trim()) return;
        dispatch({ type: 'ADD', payload: input });
        setInput('');
    };

    const toggleTodo = (id: string) => {
        dispatch({ type: 'TOGGLE', payload: id });
    };

    const removeTodo = (id: string) => {
        dispatch({ type: 'REMOVE', payload: id });
    }

    return {
        todos,
        input,
        setInput,
        addTodo,
        toggleTodo,
        removeTodo,
    };
}