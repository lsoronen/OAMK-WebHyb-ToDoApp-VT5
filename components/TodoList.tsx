import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { Item } from '../types/Item';

interface Props {
    items: Item[];
    onToggleItem: (id: string) => void;
    onRemoveItem: (id: string) => void;
}

export default function TodoList({ items, onToggleItem, onRemoveItem }: Props) {
    return (
        <FlatList<Item>
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TodoItem
                    name={item.name}
                    completed={item.completed}
                    onToggle={() => onToggleItem(item.id)}
                    onRemove={() => onRemoveItem(item.id)}
                />
            )}
        />
    );
}
