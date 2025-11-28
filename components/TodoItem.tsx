import React from 'react';
import { Pressable, Text, StyleSheet, Alert } from 'react-native';

interface Props {
    name: string;
    completed: boolean;
    onToggle: () => void;
    onRemove: () => void;
}

export default function TodoItem({ name, completed, onToggle, onRemove }: Props) {
    return (
        <Pressable
            style={styles.taskBox}
            onPress={onToggle}
            onLongPress={() => {
                if (completed) {
                    onRemove()
                }
                else {
                    Alert.alert('Complete first', 'Mark task as done before deleting.')
                }
            }}
        >
            <Text style={[styles.rowText, completed && styles.rowStrike]}>
                {name}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    rowText: {
        fontSize: 16,
        padding: 12,
    },
    rowStrike: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: '#888',
    },
    taskBox: {
        margin: 8,
        marginBottom: 0,
        borderRadius: 8,
        backgroundColor: '#b8e6f5ff'
    }
});
