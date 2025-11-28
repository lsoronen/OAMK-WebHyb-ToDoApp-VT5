
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoList from './components/TodoList';
import { StatusBar } from 'expo-status-bar';
import { useTodos } from './hooks/useTodos';


export default function App() {
    const { todos, input, setInput, addTodo, toggleTodo, removeTodo } = useTodos();

    return (
        <View style={styles.container}>
            <Header />
            <InputBar input={input} onChangeText={setInput} onAddItem={addTodo} />
            <TodoList items={todos} onToggleItem={toggleTodo} onRemoveItem={removeTodo} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
    },
});
